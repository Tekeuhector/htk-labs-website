import './Button.css'

export default function Button({ 
  variant = 'primary', 
  href, 
  children, 
  className = '', 
  onClick,
  ...props 
}) {
  const baseClass = `btn btn-${variant} ${className}`

  if (href) {
    // If href starts with #, smooth scroll to id
    const handleClick = (e) => {
      if (href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
      if (onClick) onClick(e)
    }

    return (
      <a href={href} className={baseClass} onClick={handleClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={baseClass} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
