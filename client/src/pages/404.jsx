"use client"
import {useNavigate, Link} from "react-router-dom"
import { useState, useEffect } from "react"

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(20)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate])

  const handleGoBack = () => {
	if (window.history.length > 1) {
	  window.history.back()
	} else {
	  navigate('/')
	}
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="text-8xl">🏗️</div>
          <h1 className="text-5xl md:text-10xl lg:text-10xl font-bold text-primary">404!!!</h1>
          <h2 className="text-3xl font-bold text-primary">Oops! Page Under Construction</h2>
        </div>
        <div className="space-y-4 max-w-md mx-auto">
          <p className="text-gray-600 text-lg">
            Looks like this page is still being built! Our construction crew must have missed this one.
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary">
            <span className="text-2xl">⏰</span>
            <p className="text-lg">
              Redirecting to homepage in <span className="font-bold text-accent">{countdown}</span> seconds
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 bg-gray-100 text-primary rounded-md hover:bg-gray-200 transition-colors font-medium border border-gray-300"
          >
            ← Go Back
          </button>

          <Link to="/" className="flex items-center justify-center">
            <button className="px-6 py-3 bg-accent text-white rounded-md hover:bg-gray-800 transition-colors font-medium">
              🏠 Go to Homepage
            </button>
          </Link>
        </div>

        {/* Additional helpful links */}
        <div className="pt-8 border-t border-gray-200 space-y-4">
          <p className="text-primary font-medium">Maybe you were looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-accent hover:text-primary transition-colors underline">
              Our Services
            </Link>
            <Link to="/projects" className="text-accent hover:text-primary transition-colors underline">
              Recent Projects
            </Link>
            <Link to="/contact" className="text-accent hover:text-primary transition-colors underline">
              Contact Us
            </Link>
            <Link to="/faq" className="text-accent hover:text-primary transition-colors underline">
              FAQ
            </Link>
          </div>
        </div>

        {/* Fun construction-themed message */}
        <div className="bg-gray-50 rounded-lg p-6 max-w-lg mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-2xl">👷‍♂️</span>
            <span className="text-2xl">🚧</span>
            <span className="text-2xl">👷‍♀️</span>
          </div>
          <p className="text-gray-600 text-sm">
            Don't worry! At Kizush Constructions, we build things right the first time. This page will be ready soon!
          </p>
        </div>
      </div>
    </div>
  )
}
