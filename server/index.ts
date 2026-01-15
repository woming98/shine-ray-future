/**
 * Express 后端服务器
 * 代理 OpenAI API 调用，保护 API Key 安全
 */

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'

// 加载环境变量
dotenv.config({ path: '.env' })

const app = express()
const PORT = process.env.PORT || 3001

// 中间件
app.use(cors())
app.use(express.json())

// 初始化 OpenAI 客户端
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

/**
 * 写作评分 API
 * POST /api/evaluate-writing
 * 
 * 请求体：
 * {
 *   prompt: string,      // 写作题目/要求
 *   essay: string,       // 学生作文
 *   wordLimit: { min: number, max: number },
 *   grade: string        // 年级 S1/S2/S3
 * }
 */
app.post('/api/evaluate-writing', async (req, res) => {
  try {
    const { prompt, essay, wordLimit, grade } = req.body

    if (!essay || essay.trim().length < 10) {
      return res.status(400).json({ error: '作文内容太短' })
    }

    const wordCount = essay.trim().split(/\s+/).length

    // 构建评分 prompt（按香港 DSE 标准）
    const systemPrompt = `You are an experienced English teacher in Hong Kong, specializing in DSE (Diploma of Secondary Education) English assessment. 

Your task is to evaluate a student's writing based on Hong Kong DSE standards. The student is in ${grade} (Secondary ${grade.replace('S', '')}).

Evaluate the essay on three dimensions (each scored 1-7):
1. **Content (內容)**: Relevance to the topic, ideas development, supporting details
2. **Language (語言)**: Grammar accuracy, vocabulary range, sentence structure variety
3. **Organization (組織)**: Logical flow, paragraph structure, coherence, use of connectives

Writing Task: ${prompt}
Word Limit: ${wordLimit.min}-${wordLimit.max} words
Actual Word Count: ${wordCount} words

Please respond in the following JSON format:
{
  "content": <score 1-7>,
  "language": <score 1-7>,
  "organization": <score 1-7>,
  "total": <sum of three scores>,
  "feedback": {
    "strengths": ["<strength 1>", "<strength 2>"],
    "improvements": ["<improvement suggestion 1>", "<improvement suggestion 2>"],
    "correctedSentences": [
      {"original": "<original sentence with error>", "corrected": "<corrected sentence>"}
    ]
  },
  "overallComment": "<brief overall comment in Chinese, 2-3 sentences>"
}`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Please evaluate this essay:\n\n${essay}` }
      ],
      temperature: 0.3,
      response_format: { type: 'json_object' }
    })

    const responseText = completion.choices[0]?.message?.content || '{}'
    const result = JSON.parse(responseText)

    res.json({
      success: true,
      wordCount,
      ...result
    })

  } catch (error: any) {
    console.error('OpenAI API Error:', error)
    res.status(500).json({
      error: 'AI 评分服务暂时不可用',
      details: error.message
    })
  }
})

/**
 * 健康检查
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 后端服务器运行在 http://localhost:${PORT}`)
  console.log(`📝 写作评分 API: POST http://localhost:${PORT}/api/evaluate-writing`)
})
