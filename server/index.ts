import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import OpenAI from 'openai';

dotenv.config({ path: '.env' });

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type NoteSection = {
  id: string;
  title: string;
  bullets: string[];
};

const physicsNotesByTopic: Record<string, { topicId: string; title: string; sections: NoteSection[] }> = {
  'astronomy-space': {
    topicId: 'astronomy-space',
    title: 'Astronomy and Space Science',
    sections: [
      {
        id: 'units',
        title: 'Core Units',
        bullets: ['1 AU = 1.50 x 10^11 m', '1 ly = 9.46 x 10^15 m', 't = d / c'],
      },
      {
        id: 'distance-order',
        title: 'Distance and Scale',
        bullets: [
          'Convert all distances into one unit before ordering.',
          'For two bodies orbiting the Sun: d_max = r1 + r2, d_min = |r1 - r2|.',
          'Galaxy >> star cluster >> star system in scale.',
        ],
      },
      {
        id: 'illumination',
        title: 'Light and Brightness',
        bullets: [
          'Inverse-square trend: brightness proportional to 1/r^2.',
          'For projected illumination: include cosine factor when angle is given.',
        ],
      },
    ],
  },
};

app.get('/api/physics/notes/:topicId', (req, res) => {
  const { topicId } = req.params;
  const notes = physicsNotesByTopic[topicId];

  if (!notes) {
    return res.status(404).json({
      success: false,
      error: `Notes not found for topicId: ${topicId}`,
    });
  }

  return res.json({
    success: true,
    ...notes,
  });
});

app.post('/api/evaluate-writing', async (req, res) => {
  try {
    const { prompt, essay, wordLimit, grade } = req.body as {
      prompt: string;
      essay: string;
      wordLimit: { min: number; max: number };
      grade: string;
    };

    if (!essay || essay.trim().length < 10) {
      return res.status(400).json({ error: 'Essay content is too short.' });
    }

    const wordCount = essay.trim().split(/\s+/).length;

    const systemPrompt = `You are an experienced English teacher in Hong Kong, specializing in DSE (Diploma of Secondary Education) English assessment.

Your task is to evaluate a student's writing based on Hong Kong DSE standards. The student is in ${grade} (Secondary ${grade.replace('S', '')}).

Evaluate the essay on three dimensions (each scored 1-7):
1. Content: Relevance to topic, ideas development, supporting details
2. Language: Grammar accuracy, vocabulary range, sentence structure variety
3. Organization: Logical flow, paragraph structure, coherence, use of connectives

Writing Task: ${prompt}
Word Limit: ${wordLimit.min}-${wordLimit.max} words
Actual Word Count: ${wordCount} words

Please respond in JSON format:
{
  "content": <score 1-7>,
  "language": <score 1-7>,
  "organization": <score 1-7>,
  "total": <sum>,
  "feedback": {
    "strengths": ["...","..."],
    "improvements": ["...","..."],
    "correctedSentences": [{"original":"...","corrected":"..."}]
  },
  "overallComment": "..."
}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Please evaluate this essay:\n\n${essay}` },
      ],
      temperature: 0.3,
      response_format: { type: 'json_object' },
    });

    const responseText = completion.choices[0]?.message?.content || '{}';
    const result = JSON.parse(responseText);

    return res.json({
      success: true,
      wordCount,
      ...result,
    });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    return res.status(500).json({
      error: 'AI evaluation service is temporarily unavailable.',
      details: error.message,
    });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Health check: http://localhost:${port}/api/health`);
  console.log(`Astronomy notes API: http://localhost:${port}/api/physics/notes/astronomy-space`);
});

