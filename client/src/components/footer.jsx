import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Email, Phone, Facebook, Twitter, Place, Instagram, LinkedIn } from "@mui/icons-material"

const styles = {
  footer: {
    color: "white",
    padding: "2rem 0",
  },
  container: {
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "4rem 2rem 2rem",
    position: "relative",
    zIndex: 1,
  },
  mainContent: {
    display: "grid",
    gap: "3rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    marginBottom: "3rem",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  logoSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    maxWidth: "300px",
  },
  logo: {
    width: "250px",
    height: "auto",
    filter: "brightness(1.1)",
  },
  tagline: {
    fontSize: "1.1rem",
    color: "#cbd5e0",
    lineHeight: "1.6",
    fontStyle: "italic",
  },
  sectionTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#f7fafc",
    marginBottom: "0.5rem",
    borderBottom: "2px solid #4299e1",
    paddingBottom: "0.5rem",
    display: "inline-block",
  },
  linksList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  link: {
    color: "#e2e8f0",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    padding: "0.5rem 0",
    borderLeft: "3px solid transparent",
    paddingLeft: "0.75rem",
    display: "block",
  },
  linkHover: {
    color: "#4299e1",
    borderLeftColor: "#4299e1",
    transform: "translateX(5px)",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0.75rem 0",
    transition: "all 0.3s ease",
  },
  contactIcon: {
    fontSize: "1.5rem",
    color: "#4299e1",
    backgroundColor: "rgba(66, 153, 225, 0.1)",
    padding: "0.5rem",
    borderRadius: "50%",
    minWidth: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contactText: {
    color: "#e2e8f0",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s ease",
  },
  socialContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  socialIcon: {
    color: "#e2e8f0",
    fontSize: "1.5rem",
    padding: "0.75rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    backdropFilter: "blur(10px)",
  },
  bottomBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
    paddingTop: "2rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  copyright: {
    color: "#a0aec0",
    fontSize: "0.9rem",
  },
  bottomLinks: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
  },
  bottomLink: {
    color: "#a0aec0",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.3s ease",
  },
}

// Interactive link component
const InteractiveLink = ({ to, children, style = {} }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Link
      to={to}
      style={{
        ...styles.link,
        ...(isHovered ? styles.linkHover : {}),
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  )
}

// Interactive contact item
const ContactItem = ({ icon: Icon, href, children, type = "link" }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const content = (
    <div 
      style={{
        ...styles.contactItem,
        transform: isHovered ? "translateX(5px)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.contactIcon}>
        <Icon />
      </div>
      <span style={{
        ...styles.contactText,
        color: isHovered ? "#4299e1" : "#e2e8f0"
      }}>
        {children}
      </span>
    </div>
  )
  
  if (type === "email") {
    return <a href={`mailto:${href}`} style={{ textDecoration: "none" }}>{content}</a>
  }
  if (type === "phone") {
    return <a href={`tel:${href}`} style={{ textDecoration: "none" }}>{content}</a>
  }
  return <div>{content}</div>
}

// Interactive social icon
const SocialIcon = ({ icon: Icon, href, label, hoverColor = "#4299e1" }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <a
      href={href}
      style={{
        ...styles.socialIcon,
        backgroundColor: isHovered ? hoverColor : "rgba(255, 255, 255, 0.1)",
        color: isHovered ? "white" : "#e2e8f0",
        transform: isHovered ? "translateY(-3px) scale(1.05)" : "none",
        boxShadow: isHovered ? `0 8px 25px rgba(66, 153, 225, 0.3)` : "none",
      }}
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon />
    </a>
  )
}

// Interactive bottom link
const BottomLink = ({ to, children }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Link
      to={to}
      style={{
        ...styles.bottomLink,
        color: isHovered ? "#4299e1" : "#a0aec0"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-primary" style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.mainContent}>
          {/* Enhanced Logo and Company Info */}
          <div style={styles.logoSection}>
            <img 
              src="/medias/construction_company_logo.png" 
              alt="Kizush Constructions Logo"
              style={styles.logo}
            />
            <p style={styles.tagline}>
              "Building dreams with precision, delivering excellence in every project. 
              Your trusted partner for quality construction solutions."
            </p>
          </div>

          {/* Enhanced Quick Links */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Quick Links</h3>
            <nav>
              <ul style={styles.linksList}>
                <li><InteractiveLink to="/about">About Us</InteractiveLink></li>
                <li><InteractiveLink to="/services">Our Services</InteractiveLink></li>
                <li><InteractiveLink to="/projects">Portfolio</InteractiveLink></li>
                <li><InteractiveLink to="/resources">Resources</InteractiveLink></li>
                <li><InteractiveLink to="/contact">Get In Touch</InteractiveLink></li>
              </ul>
            </nav>
          </div>

          {/* Enhanced Contact Info */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Contact Information</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <ContactItem 
                icon={Email} 
                href="info@kizushconstructions.com" 
                type="email"
              >
                info@kizushconstructions.com
              </ContactItem>
              <ContactItem 
                icon={Phone} 
                href="+123456789" 
                type="phone"
              >
                416-300-4040
              </ContactItem>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Connect With Us</h3>
            <div style={styles.socialContainer}>
              <p style={{ color: "#cbd5e0", fontSize: "0.95rem", margin: 0 }}>
                Follow us for updates and project showcases
              </p>
              <div style={styles.socialIcons}>
                <SocialIcon 
                  icon={Facebook} 
                  href="#" 
                  label="Facebook"
                  hoverColor="#1877f2"
                />
                <SocialIcon 
                  icon={Twitter} 
                  href="#" 
                  label="Twitter"
                  hoverColor="#1da1f2"
                />
                <SocialIcon 
                  icon={Instagram} 
                  href="#" 
                  label="Instagram"
                  hoverColor="#e4405f"
                />
                <SocialIcon 
                  icon={LinkedIn} 
                  href="#" 
                  label="LinkedIn"
                  hoverColor="#0077b5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>
            © 2025 Kizush Constructions. All rights reserved.
          </p>
          <div style={styles.bottomLinks}>
            <BottomLink to="/privacy">Privacy Policy</BottomLink>
            <BottomLink to="/terms">Terms of Service</BottomLink>
            <BottomLink to="/sitemap">Sitemap</BottomLink>
          </div>
        </div>
      </div>
    </footer>
  )
}