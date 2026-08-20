import { useScrollReveal } from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'
import './Problems.css'

export default function Problems() {
  const revealRef = useScrollReveal()

  return (
    <section className="problems" ref={revealRef}>
      <div className="container problems-container">
        
        <div className="problems-header reveal">
          <h2 className="problems-title">{siteConfig.problems.headline}</h2>
        </div>

        <div className="problems-list">
          {siteConfig.problems.items.map((item, index) => (
            <div 
              key={index} 
              className={`problem-item reveal reveal-delay-${index + 1}`}
            >
              <div className="problem-number">
                0{index + 1}
              </div>
              <div className="problem-content">
                <h3 className="problem-question">{item.problem}</h3>
                <p className="problem-solution">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
