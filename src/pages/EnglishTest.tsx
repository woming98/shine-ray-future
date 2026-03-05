import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, FileText, PenTool, BookA, ChevronRight, ArrowLeft } from 'lucide-react'
import { gradeOptions, sectionOptions, getTestConfig, type Grade, type SectionType } from '../data/englishQuestions'
import ReadingTest from '../components/english/ReadingTest'
import GrammarTest from '../components/english/GrammarTest'
import VocabularyTest from '../components/english/VocabularyTest'
import WritingTest from '../components/english/WritingTest'

/**
 * 英文测试页面
 * 四大板块：Reading / Grammar & Vocabulary / Vocabulary Test / Writing
 */
export default function EnglishTest() {
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null)
  const [selectedSection, setSelectedSection] = useState<SectionType | null>(null)

  const testConfig = selectedGrade ? getTestConfig(selectedGrade) : null

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return BookOpen
      case 'FileText': return FileText
      case 'PenTool': return PenTool
      case 'BookA': return BookA
      default: return FileText
    }
  }

  const handleBack = () => {
    if (selectedSection) {
      setSelectedSection(null)
    } else if (selectedGrade) {
      setSelectedGrade(null)
    }
  }

  const hasSectionData = (section: SectionType): boolean => {
    if (!testConfig) return false
    switch (section) {
      case 'reading': return testConfig.reading.passages.length > 0
      case 'grammar': return testConfig.grammar.questions.length > 0
      case 'vocabulary': return testConfig.vocabulary.questions.length > 0
      case 'writing': return testConfig.writing.tasks.length > 0
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-navy-950 via-primary-900 to-navy-900 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              英文能力测试
            </h1>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              {!selectedGrade && '选择年级开始测试'}
              {selectedGrade && !selectedSection && `${testConfig?.gradeLabel} - 选择测试板块`}
              {selectedGrade && selectedSection && `${testConfig?.gradeLabel} - ${sectionOptions.find((s: typeof sectionOptions[number]) => s.value === selectedSection)?.labelZh}`}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {(selectedGrade || selectedSection) && !selectedSection && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleBack}
              className="mb-6 flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回
            </motion.button>
          )}

          <AnimatePresence mode="wait">
            {!selectedGrade && (
              <motion.div
                key="grade-select"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-semibold text-slate-800 mb-6 text-center">选择年级</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {gradeOptions.map((grade: typeof gradeOptions[number]) => (
                    <motion.button
                      key={grade.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedGrade(grade.value)}
                      className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-primary-300 hover:shadow-md transition-all group"
                    >
                      <div className="text-4xl font-bold text-primary-600 mb-2">{grade.value}</div>
                      <div className="text-lg font-medium text-slate-700">{grade.label}</div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary-500 mx-auto mt-4 transition-colors" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {selectedGrade && !selectedSection && (
              <motion.div
                key="section-select"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-semibold text-slate-800 mb-6 text-center">选择测试板块</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sectionOptions.map((section: typeof sectionOptions[number]) => {
                    const Icon = getIcon(section.icon)
                    const hasData = hasSectionData(section.value)
                    
                    return (
                      <motion.button
                        key={section.value}
                        whileHover={hasData ? { scale: 1.02 } : {}}
                        whileTap={hasData ? { scale: 0.98 } : {}}
                        onClick={() => hasData && setSelectedSection(section.value)}
                        disabled={!hasData}
                        className={`bg-white rounded-2xl p-6 shadow-sm border transition-all text-left ${
                          hasData 
                            ? 'border-slate-100 hover:border-primary-300 hover:shadow-md cursor-pointer' 
                            : 'border-slate-100 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${hasData ? 'bg-primary-100' : 'bg-slate-100'}`}>
                          <Icon className={`w-6 h-6 ${hasData ? 'text-primary-600' : 'text-slate-400'}`} />
                        </div>
                        <div className="text-base font-semibold text-slate-800 mb-1">{section.label}</div>
                        <div className="text-sm text-slate-500 mb-3">{section.labelZh}</div>
                        {hasData ? (
                          <div className="text-xs text-primary-600 font-medium">
                            {section.value === 'reading' && `${testConfig?.reading.passages.length} 篇文章 · ${testConfig?.reading.timeLimit} 分钟`}
                            {section.value === 'grammar' && `${testConfig?.grammar.questions.length} 道题 · ${testConfig?.grammar.timeLimit} 分钟`}
                            {section.value === 'vocabulary' && `${testConfig?.vocabulary.questions.length} 道题 · ${testConfig?.vocabulary.timeLimit} 分钟`}
                            {section.value === 'writing' && `${testConfig?.writing.tasks.length} 篇作文 · ${testConfig?.writing.timeLimit} 分钟`}
                          </div>
                        ) : (
                          <div className="text-xs text-slate-400">暂无题目</div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {selectedGrade && selectedSection && testConfig && (
              <motion.div
                key="test-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {selectedSection === 'reading' && (
                  <ReadingTest
                    passages={testConfig.reading.passages}
                    timeLimit={testConfig.reading.timeLimit}
                    onBack={() => setSelectedSection(null)}
                  />
                )}
                {selectedSection === 'grammar' && (
                  <GrammarTest
                    questions={testConfig.grammar.questions}
                    timeLimit={testConfig.grammar.timeLimit}
                    onBack={() => setSelectedSection(null)}
                  />
                )}
                {selectedSection === 'vocabulary' && (
                  <VocabularyTest
                    questions={testConfig.vocabulary.questions}
                    timeLimit={testConfig.vocabulary.timeLimit}
                    onBack={() => setSelectedSection(null)}
                  />
                )}
                {selectedSection === 'writing' && (
                  <WritingTest
                    tasks={testConfig.writing.tasks}
                    grade={selectedGrade}
                    onBack={() => setSelectedSection(null)}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
