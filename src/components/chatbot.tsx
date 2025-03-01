"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { X, Bot, Send } from "lucide-react"

// Define types for our knowledge base and user intents
type KnowledgeItem = {
  keywords: string[]
  response: string
}

type Intent = {
  name: string
  patterns: string[]
  responses: string[]
}

// Our knowledge base covering all aspects of the website
const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: ["services", "offer", "provide"],
    response:
      "At IESC, we offer a range of services including Digital Transformation, Bespoke Software Development, Cloud & AI Innovation, Data-Driven Insights, Social Media Automation, and Smart Chatbot Solutions. Each service is tailored to empower your business with cutting-edge technology.",
  },
  {
    keywords: ["digital transformation", "transform"],
    response:
      "Our Digital Transformation service helps businesses leverage technology to improve processes, customer experiences, and business models. We've successfully led projects for small and medium businesses, resulting in significant productivity gains and cost savings.",
  },
  {
    keywords: ["software", "development", "bespoke"],
    response:
      "Our Bespoke Software Development service creates custom in-house software solutions designed to address your unique business challenges and streamline operations. We work closely with you to understand your needs and deliver tailored solutions.",
  },
  {
    keywords: ["cloud", "ai", "artificial intelligence"],
    response:
      "Our Cloud & AI Innovation service harnesses the power of cloud engineering and artificial intelligence tools to boost productivity and unlock new revenue opportunities for your business. We help you leverage these cutting-edge technologies to stay ahead of the competition.",
  },
  {
    keywords: ["data", "insights", "analytics"],
    response:
      "Our Data-Driven Insights service focuses on engineering data streaming pipelines to convert diverse data sources into actionable business intelligence. We help you make informed decisions based on real-time data analysis.",
  },
  {
    keywords: ["social media", "automation"],
    response:
      "Our Social Media Automation service designs and implements automated self-service systems for social media platforms like WhatsApp. This helps businesses engage with customers more efficiently and effectively.",
  },
  {
    keywords: ["chatbot", "bot"],
    response:
      "Our Smart Chatbot Solutions service builds fine-tuned, AI-powered chatbots to solve specific business problems with precision. We create chatbots that can handle customer inquiries, automate processes, and improve user experiences.",
  },
  {
    keywords: ["contact", "reach", "get in touch"],
    response:
      "You can contact us through email at info@iesc.com.ng, by phone at +234 703 499 4623, or by using the contact form on our website. We're always ready to discuss how we can help your business leverage technology for growth and efficiency.",
  },
  {
    keywords: ["book", "call", "schedule"],
    response:
      "You can book a call with our experts to discuss your specific needs and solutions. Please use our online scheduling system to find a convenient time slot.",
  },
  {
    keywords: ["about", "company", "iesc"],
    response:
      "Ityav Enterprise Systems Consult (IESC) is a technology consulting firm specializing in innovative solutions for businesses. With over 10 years of expertise, we've successfully completed 50+ projects across 20+ industries, maintaining a 100% client satisfaction rate.",
  },
  {
    keywords: ["pricing", "cost", "rates"],
    response:
      "Our pricing is tailored to each project's specific requirements. We offer competitive rates and work to provide the best value for your investment. For a detailed quote, please contact us with your project details.",
  },
  {
    keywords: ["process", "methodology", "approach"],
    response:
      "Our process typically involves an initial consultation to understand your needs, followed by a tailored solution design. We then move to development, testing, and deployment, keeping you updated at every stage. We also provide ongoing support and maintenance as needed.",
  },
  {
    keywords: ["industries", "sectors"],
    response:
      "We have experience working across various industries including but not limited to finance, healthcare, retail, education, and manufacturing. Our solutions are adaptable to the unique needs of each sector.",
  },
  {
    keywords: ["team", "experts", "consultants"],
    response:
      "Our team consists of experienced technology consultants, software developers, data scientists, and AI specialists. Each member brings a wealth of knowledge and expertise to ensure the success of your projects.",
  },
  {
    keywords: ["case studies", "success stories", "examples"],
    response:
      "We have numerous success stories across various industries. For example, we helped a retail client increase online sales by 30% through a custom e-commerce solution, and assisted a manufacturing company in reducing operational costs by 25% through our data analytics services. We'd be happy to discuss more specific examples relevant to your industry.",
  },
  {
    keywords: ["technology", "tech stack", "tools"],
    response:
      "We use a wide range of cutting-edge technologies including but not limited to cloud platforms (AWS, Azure, Google Cloud), AI and machine learning frameworks, modern web and mobile development tools, and advanced data analytics platforms. Our tech stack is always evolving to incorporate the latest innovations.",
  },
  {
    keywords: ["support", "maintenance"],
    response:
      "We offer comprehensive support and maintenance services for all our solutions. This includes regular updates, performance monitoring, troubleshooting, and continuous improvement to ensure your systems remain efficient and up-to-date.",
  },
  {
    keywords: ["security", "data protection"],
    response:
      "Security is a top priority in all our solutions. We implement industry-standard security measures and best practices to protect your data and systems. This includes encryption, secure authentication methods, regular security audits, and compliance with relevant data protection regulations.",
  },
  {
    keywords: ["training", "knowledge transfer"],
    response:
      "We provide thorough training and knowledge transfer as part of our service. This ensures that your team is fully equipped to utilize and maintain the solutions we implement, maximizing the long-term value of your investment.",
  },
  {
    keywords: ["partnership", "collaboration"],
    response:
      "We view our clients as long-term partners. Our collaborative approach means we work closely with you at every stage, ensuring the solutions we provide are perfectly aligned with your business goals and can evolve as your needs change.",
  },
]

// Define user intents
const intents: Intent[] = [
  {
    name: "greeting",
    patterns: ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"],
    responses: [
      "Hello! How can I assist you today?",
      "Hi there! What can I help you with?",
      "Greetings! How may I be of service?",
    ],
  },
  {
    name: "goodbye",
    patterns: ["bye", "goodbye", "see you later", "farewell", "take care"],
    responses: [
      "Goodbye! Feel free to return if you have more questions.",
      "Take care! Don't hesitate to reach out if you need further assistance.",
      "Farewell! We're always here to help if you need anything else.",
    ],
  },
  {
    name: "thanks",
    patterns: ["thank you", "thanks", "appreciate it", "thank you so much"],
    responses: [
      "You're welcome! Is there anything else I can help you with?",
      "Glad I could help! Do you have any other questions?",
      "It's my pleasure! Let me know if you need further assistance.",
    ],
  },
  {
    name: "fallback",
    patterns: [],
    responses: [
      "I'm sorry, I didn't quite understand that. Could you please rephrase your question?",
      "I'm not sure I have the information you're looking for. Could you try asking in a different way?",
      "I apologize, but I'm having trouble understanding your request. Could you provide more details or ask in another way?",
    ],
  },
]

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([])
  const [input, setInput] = useState("")
  const [showTooltip, setShowTooltip] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tooltipInterval = setInterval(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 30000)

    return () => clearInterval(tooltipInterval)
  }, [])

  useEffect(() => {
    if (isOpen && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [isOpen]) //Corrected dependency

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setMessages([{ role: "bot", content: "Hello! How can I assist you today?" }])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === "") return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Process the user's message and generate a response
    const botResponse = generateResponse(input)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }])
    }, 500) // Simulate a slight delay for more natural conversation flow
  }

  const generateResponse = (userInput: string): string => {
    // Check for intents first
    for (const intent of intents) {
      if (intent.patterns.some((pattern) => userInput.toLowerCase().includes(pattern))) {
        return intent.responses[Math.floor(Math.random() * intent.responses.length)]
      }
    }

    // If no intent matched, search the knowledge base
    const relevantItems = knowledgeBase.filter((item) =>
      item.keywords.some((keyword) => userInput.toLowerCase().includes(keyword)),
    )

    if (relevantItems.length > 0) {
      // Return the response from the most relevant knowledge item
      return relevantItems[0].response
    }

    // If no relevant information found, use a fallback response
    return intents.find((intent) => intent.name === "fallback")!.responses[
      Math.floor(Math.random() * intents.find((intent) => intent.name === "fallback")!.responses.length)
    ]
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {showTooltip && !isOpen && (
        <div className="absolute bottom-16 right-0 bg-white p-2 rounded-lg shadow-md text-sm animate-fade-in">
          How can I assist you today?
        </div>
      )}
      <button
        onClick={toggleChat}
        className={`w-12 h-12 md:w-[50px] md:h-[50px] bg-primary text-white rounded-full flex items-center justify-center shadow-lg ${
          !isOpen ? "animate-pulse" : ""
        }`}
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[90vw] max-w-[350px] md:w-[350px] h-[500px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-primary p-4 text-white font-bold flex justify-between items-center">
            <span>IESC Support</span>
            <button onClick={toggleChat} className="hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <div ref={chatRef} className="flex-1 p-4 overflow-y-auto flex flex-col space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === "user" ? "self-end bg-primary text-white" : "self-start bg-gray-200 text-black"
                } rounded-lg p-2 max-w-[80%]`}
              >
                {message.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-r-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChatBot

