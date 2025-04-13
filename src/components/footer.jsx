import { Link } from "react-router-dom"
import { Email, Phone, Facebook, Twitter } from "@mui/icons-material"

const styles = {
  footer: {
    color: "white",
    padding: "2rem 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  grid: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "0.875rem",
    color: "#cbd5e0",
  },
  link: {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  icon: {
    fontSize: "1.25rem",
    marginRight: "0.5rem",
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
  },
}

export default function Footer() {
  return (
    <footer className="bg-primary" style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Logo and Company Info */}
          <div style={styles.section}>
            <img src="/medias/logo_white_1.png" alt="kizush_logo"></img>
            <p style={styles.subtitle}>A Delightful experience for every project</p>
          </div>

          {/* Quick Links */}
          <div style={styles.section}>
            <nav>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <Link to="/about" style={styles.link}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" style={styles.link}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/services" style={styles.link}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" style={styles.link}>
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div style={styles.section}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Email style={styles.icon} />
              <a href="mailto:info@skyline.com" style={styles.link}>
                info@kizushconstructions.com
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Phone style={styles.icon} />
              <a href="tel:+123456789" style={styles.link}>
                +123 456 789
              </a>
            </div>
            <p style={styles.subtitle}>1234, 111 Main St CA qw, AB</p>
          </div>

          {/* Social Links */}
          <div style={styles.section}>
            <h3 style={{ ...styles.subtitle, fontWeight: "bold" }}>Connect with us</h3>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.link} aria-label="Facebook">
                <Facebook style={styles.icon} />
              </a>
              <a href="#" style={styles.link} aria-label="Twitter">
                <Twitter style={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

