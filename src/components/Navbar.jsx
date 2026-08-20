import { useState, useEffect } from 'react'
import siteConfig from '../data/siteConfig'
import Button from './Button'
import './Navbar.css'

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Add scroll listener for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  
  const closeMenu = () => setIsMobileMenuOpen(false)

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    closeMenu()
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#home')}>
          <img 
            src={`${import.meta.env.BASE_URL}images/logo-htk-labs.jpg`} 
            alt={siteConfig.brand.name} 
            width="120"
            height="40"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav">
          <ul className="navbar-links">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className={`navbar-link ${activeSection === item.href.substring(1) ? 'is-active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" variant="primary" className="navbar-cta">
            Start a project
          </Button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-nav-content">
          <ul className="mobile-nav-links">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.href.substring(1) ? 'is-active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" variant="primary" onClick={closeMenu}>
            Start a project
          </Button>
        </nav>
      </div>
    </header>
  )
}
