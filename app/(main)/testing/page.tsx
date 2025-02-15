'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

type MBTIType = 'ISTJ' | 'ISFJ' | 'INFJ' | 'INTJ' | 'ISTP' | 'ISFP' | 'INFP' | 'INTP' 
  | 'ESTP' | 'ESFP' | 'ENFP' | 'ENTP' | 'ESTJ' | 'ESFJ' | 'ENFJ' | 'ENTJ'

export default function TestingPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 })
  const [showResult, setShowResult] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    document.body.setAttribute('data-page', '/testing')
    return () => {
      document.body.removeAttribute('data-page')
    }
  }, [])

  const questions = [
    { question: "Вы предпочитаете:", options: ["Встречаться с друзьями", "Оставаться дома один"], type: "EI" },
    { question: "Как вы лучше запоминаете информацию:", options: ["Через факты и детали", "Через общие идеи и концепции"], type: "SN" },
    { question: "Как вы обычно принимаете решения:", options: ["Основываясь на логике", "Основываясь на эмоциях"], type: "TF" },
    { question: "Как вы организуете свою работу:", options: ["Планируете заранее", "Делаете по мере необходимости"], type: "JP" },
    { question: "Вы чувствуете себя более комфортно:", options: ["На больших вечеринках", "На уединенных встречах"], type: "EI" },
    { question: "Когда вы решаете проблему, вы:", options: ["Собираете все возможные факты", "Полагаетесь на интуицию"], type: "SN" },
    { question: "Вы больше цените:", options: ["Честность", "Доброту"], type: "TF" },
    { question: "Вы предпочитаете:", options: ["Строгий график", "Свободное планирование"], type: "JP" },
    { question: "Как вы относитесь к новым опытам:", options: ["С осторожностью", "С энтузиазмом"], type: "EI" },
    { question: "Вы больше склонны:", options: ["Анализировать", "Мечтать"], type: "SN" },
    { question: "Как вы реагируете на конфликт:", options: ["Решительно", "С опаской"], type: "TF" },
    { question: "Вы предпочитаете:", options: ["Правила и порядок", "Свободу действий"], type: "JP" },
    { question: "Вы чувствуете себя энергичнее, когда:", options: ["Общаетесь с людьми", "Пребываете в одиночестве"], type: "EI" },
    { question: "Как вы воспринимаете мир вокруг:", options: ["Через конкретные детали", "Через абстрактные идеи"], type: "SN" },
    { question: "Вы чаще:", options: ["Критичны", "Толерантны"], type: "TF" },
    { question: "Как вы предпочитаете работать:", options: ["По плану", "Импровизируя"], type: "JP" }
  ]

  const mbtiDescriptions: Record<MBTIType, string> = {
    "ISTJ": "Защитник — надежный и ответственный человек, который ценит традиции и структуру. Люди этого типа стремятся к стабильности и следуют установленным правилам.",
    "ISFJ": "Попечитель — заботливый и внимательный человек, который стремится помогать другим. Они ценят гармонию и стараются поддерживать близких людей.",
    "INFJ": "Чародей — глубокий и интуитивный человек, который видит потенциал в других. Люди этого типа часто являются идеалистами и стремятся к позитивным изменениям.",
    "INTJ": "Архитектор — стратегический мыслитель, который стремится к мастерству и совершенству. Они ценят независимость и способны разрабатывать долгосрочные планы.",
    "ISTP": "Исследователь — практичный и любознательный человек, который наслаждается решением проблем. Они ценят свободу и предпочитают действовать самостоятельно.",
    "ISFP": "Художник — чувствительный и спокойный человек, который живет в моменте. Они ценят красоту и индивидуальность, часто проявляя креативность.",
    "INFP": "Медитатор — идеалистический и преданный человек, который стремится к значимым отношениям. Они часто глубоко размышляют о жизни и ищут смысл во всем.",
    "INTP": "Инженер — аналитический и любознательный человек, который ищет понимания мира. Они ценят логику и часто увлекаются научными или философскими вопросами.",
    "ESTP": "Предприниматель — харизматичный и решительный человек, который любит приключения. Они активны и часто находятся в центре внимания, решая практические задачи.",
    "ESFP": "Развлекатель — жизнерадостный и социальный человек, который наслаждается компанией других. Они ценят удовольствие и часто становятся источником позитива.",
    "ENFP": "Поборник — креативный и энергичный человек, который стремится к свободе и самовыражению. Они часто вдохновляют других и стремятся к новым идеям.",
    "ENTP": "Изобретатель — изобретательный и остроумный человек, который любит интеллектуальные вызовы. Они часто генерируют новые идеи и любят дискуссии.",
    "ESTJ": "Директор — организованный и решительный человек, который ценит эффективность и порядок. Они часто берут на себя лидерские роли и стремятся к результатам.",
    "ESFJ": "Консул — дружелюбный и поддерживаемый человек, который стремится к гармонии. Они часто заботятся о других и стремятся создать комфортную атмосферу.",
    "ENFJ": "Лидер — харизматичный и вдохновляющий человек, который помогает другим развиваться. Они часто становятся лидерами групп и стремятся к позитивным изменениям.",
    "ENTJ": "Командир — уверенный и лидерский человек, который стремится к достижению целей. Они часто берут на себя ответственность и стремятся к успеху."
  }

  const handleAnswer = (value: number) => {
    setIsSubmitting(true)
    
    const questionData = questions[currentQuestionIndex]
    const type = questionData.type
    
    if (type === "EI") {
      setScores(prev => ({ ...prev, [value === 0 ? "E" : "I"]: prev[value === 0 ? "E" : "I"] + 1 }))
    } else if (type === "SN") {
      setScores(prev => ({ ...prev, [value === 0 ? "S" : "N"]: prev[value === 0 ? "S" : "N"] + 1 }))
    } else if (type === "TF") {
      setScores(prev => ({ ...prev, [value === 0 ? "T" : "F"]: prev[value === 0 ? "T" : "F"] + 1 }))
    } else if (type === "JP") {
      setScores(prev => ({ ...prev, [value === 0 ? "J" : "P"]: prev[value === 0 ? "J" : "P"] + 1 }))
    }

    setTimeout(() => {
      setIsSubmitting(false)
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1)
      } else {
        setShowResult(true)
      }
    }, 500)
  }

  const calculateResult = () => {
    const resultLetters = [
      scores.E > scores.I ? "E" : "I",
      scores.S > scores.N ? "S" : "N",
      scores.T > scores.F ? "T" : "F",
      scores.J > scores.P ? "J" : "P"
    ].join("") as MBTIType

    return {
      type: resultLetters,
      description: mbtiDescriptions[resultLetters]
    }
  }

  return (
    <div className="min-h-[calc(100vh-var(--header-height))] bg-white pt-[var(--header-height)] pb-8">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="bg-[#673ab7] text-white p-8">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl font-bold mb-4 text-center"
            >
              ТЕСТ MBTI ОТ ТЕХНОЛИУМ
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-center text-purple-100"
            >
              ПРОЙДИ ДО ВСТУПИТЕЛЬНОГО ИНТЕРВЬЮ
            </motion.h2>
          </div>

          <div className="p-6 sm:p-8">
            {!showResult ? (
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="mb-8">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#673ab7] rounded-full transition-all duration-500"
                      style={{
                        width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`
                      }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    Вопрос {currentQuestionIndex + 1} из {questions.length}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-6">
                    {questions[currentQuestionIndex].question}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto py-4 px-6 text-left hover:bg-purple-50 hover:text-[#673ab7] hover:border-[#673ab7] transition-colors"
                        onClick={() => handleAnswer(index)}
                        disabled={isSubmitting}
                      >
                        <div className="font-medium">{option}</div>
                      </Button>
                    ))}
                  </div>
                </div>

                {isSubmitting && (
                  <div className="mt-6 flex items-center justify-center text-gray-500">
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Анализируем ваш ответ...
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Ваш тип личности: {calculateResult().type}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {calculateResult().description}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 