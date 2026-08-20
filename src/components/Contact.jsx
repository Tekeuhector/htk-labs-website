import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import siteConfig from '../data/siteConfig'
import Button from './Button'
import './Contact.css'

export default function Contact() {
  const revealRef = useScrollReveal()
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error, fallback

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // If no endpoint is configured, show the graceful fallback message
    if (!siteConfig.formEndpoint) {
      setFormStatus('fallback')
      return
    }

    // In a real scenario, this is where the fetch/axios call goes
    setFormStatus('submitting')
    
    // Simulated network request (will be replaced by actual logic when endpoint is added)
    setTimeout(() => {
      // We don't simulate success if we don't have a real endpoint, but if we get here
      // we assume the user added one.
      setFormStatus('error') 
    }, 1500)
  }

  return (
    <section id="contact" className="contact" ref={revealRef}>
      <div className="container contact-container">
        
        <div className="contact-info reveal">
          <h2 className="contact-title">{siteConfig.contactSection.title}</h2>
          <p className="contact-subtitle">{siteConfig.contactSection.subtitle}</p>

          <div className="contact-details">
            {siteConfig.contactInfo.email && (
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <a href={`mailto:${siteConfig.contactInfo.email}`} className="detail-link">
                  {siteConfig.contactInfo.email}
                </a>
              </div>
            )}
            
            {siteConfig.contactInfo.phone && (
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <a href={`tel:${siteConfig.contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="detail-link">
                  {siteConfig.contactInfo.phone}
                </a>
              </div>
            )}
            
            {siteConfig.contactInfo.whatsapp && (
              <div className="detail-item">
                <span className="detail-label">WhatsApp</span>
                <a href={`https://wa.me/${siteConfig.contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} className="detail-link" target="_blank" rel="noopener noreferrer">
                  {siteConfig.contactInfo.whatsapp}
                </a>
              </div>
            )}
            
            {siteConfig.contactInfo.location && (
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-text">{siteConfig.contactInfo.location}</span>
              </div>
            )}
          </div>
        </div>

        <div className="contact-form-wrapper reveal reveal-delay-2">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="business">Business / Company</label>
              <input type="text" id="business" name="business" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Service needed</label>
              <select id="service" name="service" required defaultValue="">
                <option value="" disabled>Select a service...</option>
                {siteConfig.contactSection.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Project description</label>
              <textarea id="description" name="description" rows="4" required></textarea>
            </div>

            {formStatus === 'fallback' && (
              <div className="form-alert alert-info">
                {siteConfig.contactSection.fallbackMessage}
              </div>
            )}

            {formStatus === 'error' && (
              <div className="form-alert alert-error">
                Failed to send message. Please try reaching out directly.
              </div>
            )}

            <Button 
              type="submit" 
              variant="primary" 
              disabled={formStatus === 'submitting'}
              className="submit-btn"
            >
              {formStatus === 'submitting' ? 'Sending...' : siteConfig.contactSection.button}
            </Button>
          </form>
        </div>

      </div>
    </section>
  )
}
