import { useScrollReveal } from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'
import './Process.css'

export default function Process() {
  const revealRef = useScrollReveal()

  return (
    <section id="process" className="process" ref={revealRef}>
      <div className="container">
        
        <div className="process-header reveal">
          <h2 className="process-title">{siteConfig.process.title}</h2>
        </div>

        <div className="process-timeline">
          {siteConfig.process.steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-step reveal reveal-delay-${index + 1}`}
            >
              <div className="process-step-marker">
                <span className="process-step-number">{step.number}</span>
                <div className="process-step-line" aria-hidden="true"></div>
              </div>
              
              <div className="process-step-content">
                <h3 className="process-step-name">{step.name}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
