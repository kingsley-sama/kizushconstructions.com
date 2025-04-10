"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { motion, AnimatePresence } from "framer-motion"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { cn } from "../lib/utils"

const featuresDropdown = [
  { title: "Property Search", href: "/features/search" },
  { title: "Property Listings", href: "/features/listings" },
  { title: "Market Analysis", href: "/features/market-analysis" },
  { title: "Agent Directory", href: "/features/agents" },
]

const blogDropdown = [
  { title: "Latest Articles", href: "/blog" },
  { title: "Market Trends", href: "/blog/market-trends" },
  { title: "Buying Tips", href: "/blog/buying-tips" },
  { title: "Selling Tips", href: "/blog/selling-tips" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }
  const topLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 10 },
  }

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -10 },
  }
  return (
    <nav className="sticky border-b bg-white ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white">
            <HomeIcon style={{ fontSize: 30 }} />
          </div>
          <span className="text-lg font-bold leading-5">
            Kizush<span className="text-orange-600"><br></br>Construction</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-orange-600">
            Home
          </Link>

          {/* Features Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("features")}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600"
            >
              Features
              <KeyboardArrowDownIcon style={{ fontSize: 18 }} />
            </button>
            {activeDropdown === "features" && (
              <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                {featuresDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("blog")}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600"
            >
              Blog
              <KeyboardArrowDownIcon style={{ fontSize: 18 }} />
            </button>
            {activeDropdown === "blog" && (
              <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                {blogDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-orange-600">
            Contact Us
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/login" className="text-sm font-medium text-orange-600 hover:text-orange-700">
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile menu button */}
        <MenuButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            topLineVariants={topLineVariants}
            middleLineVariants={middleLineVariants}
            bottomLineVariants={bottomLineVariants}
          />
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute left-0 right-0 z-20 bg-white px-4 pb-6 shadow-lg md:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col space-y-4 pt-4">
          <Link
            href="/"
            className="text-base font-medium text-gray-700 hover:text-orange-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Features Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("features-mobile")}
              className="flex w-full items-center justify-between text-base font-medium text-gray-700"
            >
              Features
              <KeyboardArrowDownIcon
                className={cn("transition-transform", activeDropdown === "features-mobile" ? "rotate-180" : "")}
              />
            </button>
            {activeDropdown === "features-mobile" && (
              <div className="mt-2 space-y-2 pl-4">
                {featuresDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-gray-600 hover:text-orange-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Blog Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("blog-mobile")}
              className="flex w-full items-center justify-between text-base font-medium text-gray-700"
            >
              Blog
              <KeyboardArrowDownIcon
                className={cn("transition-transform", activeDropdown === "blog-mobile" ? "rotate-180" : "")}
              />
            </button>
            {activeDropdown === "blog-mobile" && (
              <div className="mt-2 space-y-2 pl-4">
                {blogDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-gray-600 hover:text-orange-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="text-base font-medium text-gray-700 hover:text-orange-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>

          <div className="flex flex-col space-y-3 pt-4">
            <Link
              href="/login"
              className="text-center text-base font-medium text-orange-600 hover:text-orange-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-orange-600 px-4 py-2 text-center text-base font-medium text-white hover:bg-orange-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      
    </nav>
  )
}




const MenuButton = ({ isMenuOpen, setIsMenuOpen, topLineVariants, middleLineVariants, bottomLineVariants }) => {
    return (
      <motion.button
      className="md:hidden absolute right-5 z-50 top-3 w-12 h-12 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
  
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className="absolute w-6 h-0.5 bg-gray-600 rounded-full left-3 top-4"
          variants={topLineVariants}
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute w-5 h-0.5 bg-gray-600 rounded-full left-3 top-6"
          variants={middleLineVariants}
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute w-6 h-0.5 bg-gray-600 rounded-full left-3 bottom-4"
          variants={bottomLineVariants}
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={isMenuOpen ? { scale: 1, opacity: 0.1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    );
  };     
  
  