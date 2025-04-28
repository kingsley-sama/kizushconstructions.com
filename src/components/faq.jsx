"use client"
import { Link } from "react-router-dom"
import { useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"


// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left font-medium text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <BiChevronUp className="h-5 w-5 text-accent hover:text-primary" /> : <BiChevronDown className="h-5 w-5 text-accent hover:text-accent"/>}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

// FAQ Page Component
export default function FAQPage() {
  const faqData = [
    {
      question: "What types of construction and renovation services do you offer?",
      answer:
        "At Kizush Constructions, we specialize in full-service home renovations, custom remodeling, and design-build projects across Canada. Whether it's a kitchen makeover, bathroom remodel, basement finishing, or a complete home transformation, our in-house design and construction teams work closely with you to bring your vision to life with high-quality craftsmanship and personalized service.",
    },
    {
      question: "How long does a typical renovation project take?",
      answer:
        "The timeline for a renovation project can vary depending on the size and complexity of the work. Smaller projects like bathroom remodels may take 2-4 weeks, while larger full-home renovations can take several months. During our initial consultation, we provide a detailed project schedule and keep you updated throughout the entire process to ensure transparency and minimize disruptions.",
    },
    {
      question: "Do you provide design services along with construction?",
      answer:
        "Yes, we do! Kizush Constructions has an in-house design team that collaborates with you to create a space tailored to your needs, lifestyle, and aesthetic preferences. We guide you through the entire design process — from initial concept drawings and material selection to final layouts — ensuring a seamless transition from vision to reality.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. Kizush Constructions is fully licensed and insured to operate across Canada. We meet all regulatory requirements and carry liability insurance to protect our clients and team members. When you work with us, you can feel confident that your project is handled professionally and safely from start to finish.",
    },
    {
      question: "How do I get started with a renovation project?",
      answer:
        "Getting started is easy! Simply reach out to our team through our website or call us directly to schedule a consultation. We'll discuss your ideas, goals, and budget, and then provide a customized plan and quote. From the initial design meeting to the final walkthrough, we are committed to making the renovation process smooth, collaborative, and exciting for you.",
    },
  ];
  

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-1">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-primary mb-4">Still have questions?</p>
        <Link to={"/contact"}>
        <button className="px-6 py-2 bg-accent text-white rounded-md hover:bg-gray-800 transition-colors">
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  )
}
