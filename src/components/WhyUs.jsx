import { useScrollReveal } from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'
import './WhyUs.css'

export default function WhyUs() {
  const revealRef = useScrollReveal()

  return (
    <section className="why-us" ref={revealRef}>
      <div className="container">
        
        <div className="why-us-header reveal">
          <h2 className="why-us-title">{siteConfig.whyUs.title}</h2>
        </div>

        <div className="why-us-grid">
          {siteConfig.whyUs.items.map((item, index) => (
            <div 
              key={index} 
              className={`why-us-item reveal reveal-delay-${index + 1}`}
            >
              <div className="why-us-icon-wrapper" aria-hidden="true">
                {/* SVG Icons based on item title */}
                {index === 0 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                )}
                {index === 1 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                )}
                {index === 2 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                )}
                {index === 3 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                )}
              </div>
              <h3 className="why-us-item-title">{item.title}</h3>
              <p className="why-us-item-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
