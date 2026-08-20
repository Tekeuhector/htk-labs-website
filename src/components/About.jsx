import { useScrollReveal } from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'
import './About.css'

export default function About() {
  const revealRef = useScrollReveal()

  return (
    <section id="about" className="about" ref={revealRef}>
      <div className="container about-container">
        
        <div className="about-content reveal">
          <h2 className="about-title">{siteConfig.about.title}</h2>
          
          <p className="about-intro">
            {siteConfig.about.intro}
          </p>
          
          <p className="about-philosophy">
            {siteConfig.about.philosophy}
          </p>
          
          <div className="about-founder">
            <h3 className="founder-name">{siteConfig.about.founder.name}</h3>
            <p className="founder-role">{siteConfig.about.founder.role}</p>
          </div>
        </div>

        <div className="about-visual reveal reveal-delay-2" aria-hidden="true">
          <div className="about-brand-mark">
            <span>{siteConfig.brand.name}</span>
          </div>
        </div>

      </div>
    </section>
  )
}
