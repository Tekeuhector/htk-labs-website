import { useScrollReveal } from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'
import './Portfolio.css'

export default function Portfolio() {
  const revealRef = useScrollReveal()

  // Only render if there are projects
  if (!siteConfig.portfolio.projects || siteConfig.portfolio.projects.length === 0) {
    return null
  }

  return (
    <section id="work" className="portfolio" ref={revealRef}>
      <div className="container">
        
        <div className="portfolio-header reveal">
          <h2 className="portfolio-title">{siteConfig.portfolio.title}</h2>
        </div>

        <div className="portfolio-list">
          {siteConfig.portfolio.projects.map((project, index) => (
            <article 
              key={index} 
              className={`project-feature reveal reveal-delay-${index + 1}`}
            >
              <div className="project-feature-content">
                <span className="project-type">{project.type}</span>
                <h3 className="project-name">{project.name}</h3>
                
                <div className="project-details">
                  <div className="project-detail-group">
                    <h4 className="detail-label">Challenge</h4>
                    <p className="detail-text">{project.challenge}</p>
                  </div>
                  
                  <div className="project-detail-group">
                    <h4 className="detail-label">Solution</h4>
                    <p className="detail-text">{project.solution}</p>
                  </div>
                  
                  {project.outcome && (
                    <div className="project-detail-group">
                      <h4 className="detail-label">Outcome</h4>
                      <p className="detail-text">{project.outcome}</p>
                    </div>
                  )}
                  
                  <div className="project-tech-list">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
