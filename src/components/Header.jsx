import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business, navLinks } from '../data/siteData'
import { PhoneIcon, MailIcon, MenuIcon, CloseIcon } from './Icons'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Close on Escape, and lock body scroll while the panel is open.
  useEffect(() => {
    if (!menuOpen) return
    function onKeyDown(e) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Small shadow once the page has scrolled past the top.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <ul className="topbar-contacts">
            <li>
              <a href={`tel:${business.phoneFreephone.replace(/\s/g, '')}`}>
                <PhoneIcon aria-hidden="true" />
                {business.phoneFreephone}
              </a>
            </li>
            <li>
              <a href={`tel:${business.phoneMobile.replace(/\s/g, '')}`}>
                <PhoneIcon aria-hidden="true" />
                {business.phoneMobile}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`}>
                <MailIcon aria-hidden="true" />
                {business.email}
              </a>
            </li>
          </ul>
          <p className="topbar-tagline">{business.tagline}</p>
        </div>
      </div>

      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <img src={business.logo} alt={business.name} className="brand-logo" />
          <span className="brand-name">{business.name}</span>
        </Link>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <button
        type="button"
        className={`nav-backdrop ${menuOpen ? 'is-open' : ''}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  )
}
