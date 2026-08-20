import { useScrollReveal } from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'
import './Services.css'

export default function Services() {
  const revealRef = useScrollReveal()

  return (
    <section id="services" className="services" ref={revealRef}>
      <div className="container">
        
        <div className="section-header reveal">
          <h2 className="section-title">{siteConfig.services.title}</h2>
          <p className="section-subtitle">{siteConfig.services.subtitle}</p>
        </div>

        <div className="services-grid">
          {siteConfig.services.items.map((item, index) => (
            <article 
              key={item.pillar} 
              className={`service-card reveal reveal-delay-${index + 1}`}
            >
              <div className="service-card-header">
                <span className="service-pillar">{item.pillar}</span>
                <h3 className="service-name">{item.name}</h3>
              </div>
              
              <p className="service-description">{item.description}</p>
              
              <ul className="service-offerings">
                {item.offerings.map((offering, i) => (
                  <li key={i}>{offering}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
