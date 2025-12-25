import React from 'react'
import './Hero.css'
import logo from '../assets/atechsole-new-logo.png'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Animated background particles */}
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Subtle watermark logo */}
      <div className="hero-watermark">
        <img src={logo} alt="" className="watermark-logo" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-headline">
          Empowering Your Business with <span className="highlight">Cutting-Edge</span> Technology
        </h1>

        <p className="hero-subtitle">
          We specialize in Cybersecurity, Web Development, and AI Solutions<br />
          to help your business thrive in the digital age.
        </p>

        <div className="hero-cta-group">
          <a href="#contact" className="hero-cta-primary">
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#services" className="hero-cta-secondary">
            Learn More
          </a>
        </div>

        <div className="hero-socials">
          <span className="social-label">Follow us</span>
          <div className="social-icons">
            <a className="social-icon" aria-label="LinkedIn" href="https://www.linkedin.com/company/atechsole/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 8.98h3.96V21H3V8.98zm7.49 0h3.79v1.64h.05c.53-.95 1.82-1.96 3.75-1.96 4.01 0 4.75 2.64 4.75 6.07V21h-3.98v-4.97c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.29-1.92 2.63V21h-3.88V8.98z" />
              </svg>
            </a>
            <a className="social-icon" aria-label="YouTube" href="https://www.youtube.com/@mustansarriazofficial" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.6 15.5V8.5l6.2 3.5-6.2 3.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
