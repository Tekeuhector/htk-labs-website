import { useScrollReveal } from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'
import Button from './Button'
import './Hero.css'

export default function Hero() {
  const revealRef = useScrollReveal()

  return (
    <section id="home" className="hero" ref={revealRef}>
      <div className="container hero-container">
        
        {/* Left: Content */}
        <div className="hero-content">
          <span className="hero-signature reveal">
            {siteConfig.hero.signature}
          </span>
          
          <h1 className="hero-title reveal reveal-delay-1">
            {siteConfig.hero.headline}
          </h1>
          
          <p className="hero-description reveal reveal-delay-2">
            {siteConfig.hero.description}
          </p>
          
          <div className="hero-actions reveal reveal-delay-3">
            <Button href="#contact" variant="primary">
              {siteConfig.hero.ctaPrimary}
            </Button>
            <Button href="#work" variant="secondary">
              {siteConfig.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Right: Restrained Geometric Accent */}
        <div className="hero-visual reveal reveal-delay-4" aria-hidden="true">
          <div className="geometric-composition">
            {/* Minimalist intersecting lines and angles inspired by the "K" in the logo */}
            <div className="geo-line geo-line-1"></div>
            <div className="geo-line geo-line-2"></div>
            <div className="geo-angle"></div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
