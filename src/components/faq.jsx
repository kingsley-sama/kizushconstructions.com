"use client"

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
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging. Please contact our customer support team to initiate a return.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days within the continental US. International shipping can take 7-14 business days depending on the destination.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary based on location. You can see the exact shipping cost during checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with a tracking number and link. You can also track your order in your account dashboard.",
    },
    {
      question: "Are there any discounts for bulk orders?",
      answer:
        "Yes, we offer discounts for bulk orders. Please contact our sales team at sales@example.com for a custom quote based on your requirements.",
    },
  ]

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
        <button className="px-6 py-2 bg-accent text-white rounded-md hover:bg-gray-800 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  )
}
