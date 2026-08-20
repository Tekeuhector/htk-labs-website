import siteConfig from '../data/siteConfig'
import './Footer.css'

export default function Footer() {
  const hasSocials = Object.values(siteConfig.social).some(val => val !== null)

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => handleLinkClick(e, '#home')}>
              <img 
                src={`${import.meta.env.BASE_URL}images/logo-htk-labs.jpg`} 
                alt={siteConfig.brand.name} 
                width="120"
                height="40"
              />
            </a>
            <p className="footer-tagline">{siteConfig.brand.tagline}</p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              {siteConfig.navigation.map(item => (
                <li key={item.href}>
                  <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-services">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {siteConfig.services.items.map(item => (
                <li key={item.pillar}>{item.name}</li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              {siteConfig.contactInfo.email && (
                <li>
                  <a href={`mailto:${siteConfig.contactInfo.email}`}>{siteConfig.contactInfo.email}</a>
                </li>
              )}
              {siteConfig.contactInfo.phone && (
                <li>
                  <a href={`tel:${siteConfig.contactInfo.phone.replace(/[^0-9+]/g, '')}`}>{siteConfig.contactInfo.phone}</a>
                </li>
              )}
              {siteConfig.contactInfo.location && (
                <li>{siteConfig.contactInfo.location}</li>
              )}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="copyright">{siteConfig.footer.copyright}</p>
          
          {hasSocials && (
            <div className="footer-socials">
              {siteConfig.social.linkedin && <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              {siteConfig.social.twitter && <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
              {siteConfig.social.github && <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              {siteConfig.social.instagram && <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
            </div>
          )}
        </div>

      </div>
    </footer>
  )
}
