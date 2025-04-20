"use client"

import { useState } from "react"

const contactMethods = [
  { id: "email", label: "Email", icon: "✉️", placeholder: "your.email@example.com" },
  { id: "phone", label: "Phone", icon: "📱", placeholder: "+1 (123) 456-7890" },
  { id: "whatsapp", label: "WhatsApp", icon: "💬", placeholder: "+1 (123) 456-7890" },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    user_mail: "",
    contactMethods: [],
    email: "",
    phone: "",
    whatsapp: "",
    social: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleContactMethodChange = (methodId) => {
    setFormData((prev) => {
      const updatedMethods = prev.contactMethods.includes(methodId)
        ? prev.contactMethods.filter((id) => id !== methodId)
        : [...prev.contactMethods, methodId]

      return {
        ...prev,
        contactMethods: updatedMethods,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        message: "",
        contactMethods: [],
        email: "",
        phone: "",
        whatsapp: "",
        social: "",
      })
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-[#f5f5f5]">
      <div className="mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#08445e] text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-[#08445e] text-lg">
            We value your feedback. Please fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-[0_2px_10px_-3px_rgba(8,68,94,0.1)] p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-[#08445e] text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-[#08445e]">Your message has been received. We'll contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[#08445e] font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08445e]"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-[#08445e] font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.user_mail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08445e]"
                  placeholder="John Doe"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[#08445e] font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08445e]"
                  placeholder="Please describe your inquiry or feedback..."
                />
              </div>

              {/* Contact Method Selection */}
              <div>
                <p className="block text-[#08445e] font-medium mb-3">How should we contact you?</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {contactMethods.map((method) => (
                    <div key={method.id}>
                      <button
                        type="button"
                        onClick={() => handleContactMethodChange(method.id)}
                        className={`w-full py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center gap-2
                          ${
                            formData.contactMethods.includes(method.id)
                              ? "border-[#ed6a11] bg-[#ed6a11]/10 text-[#ed6a11]"
                              : "border-gray-300 text-[#08445e] hover:border-[#08445e]/50"
                          }
                        `}
                      >
                        <span>{method.icon}</span>
                        <span>{method.label}</span>
                      </button>
                    </div>
                  ))}
                </div>
                {formData.contactMethods.length === 0 && (
                  <p className="text-red-500 text-sm mt-2">Please select at least one contact method</p>
                )}
              </div>

              {/* Dynamic Contact Fields */}
              {formData.contactMethods.length > 0 && (
                <div className="space-y-4 border-t border-gray-100 pt-4">
                  <p className="text-[#08445e] font-medium">Your contact details:</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {formData.contactMethods.includes("email") && (
                      <div>
                        <label htmlFor="email" className="block text-[#08445e] text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08445e]"
                          placeholder={contactMethods.find((m) => m.id === "email").placeholder}
                        />
                      </div>
                    )}

                    {formData.contactMethods.includes("phone") && (
                      <div>
                        <label htmlFor="phone" className="block text-[#08445e] text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08445e]"
                          placeholder={contactMethods.find((m) => m.id === "phone").placeholder}
                        />
                      </div>
                    )}

                    {formData.contactMethods.includes("whatsapp") && (
                      <div>
                        <label htmlFor="whatsapp" className="block text-[#08445e] text-sm font-medium mb-1">
                          WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          id="whatsapp"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08445e]"
                          placeholder={contactMethods.find((m) => m.id === "whatsapp").placeholder}
                        />
                      </div>
                    )}

                    {formData.contactMethods.includes("social") && (
                      <div>
                        <label htmlFor="social" className="block text-[#08445e] text-sm font-medium mb-1">
                          Social Media Handle
                        </label>
                        <input
                          type="text"
                          id="social"
                          name="social"
                          value={formData.social}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#08445e]"
                          placeholder={contactMethods.find((m) => m.id === "social").placeholder}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formData.contactMethods.length === 0}
                  className="w-full py-3 px-6 bg-[#08445e] text-white rounded-lg hover:bg-[#08445e]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
