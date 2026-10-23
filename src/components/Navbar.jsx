import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Selected Work', href: '#work' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#0F172A]/8 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="container flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-decoration-none"
          aria-label="Aravind V - Home"
          style={{ textDecoration: 'none' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: 'var(--text-primary)',
            }}
          >
            ARAVIND V
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-electric)',
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden-mobile"
          aria-label="Primary Navigation"
          style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.01em',
                transition: 'color var(--transition-fast)',
              }}
            >
              {link.label}
            </a>
          ))}

          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="btn btn-secondary"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.8125rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <FileText size={14} color="var(--accent-electric)" />
              <span>Resume</span>
            </button>
          )}

          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              padding: '0.5rem 1.25rem',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          style={{
            padding: '0.5rem',
            color: 'var(--text-primary)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              {link.label}
            </a>
          ))}

          {onOpenResume && (
            <button
              type="button"
              onClick={() => {
                handleLinkClick();
                onOpenResume();
              }}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}
            >
              <FileText size={16} color="var(--accent-electric)" />
              <span>View Full Resume (CV)</span>
            </button>
          )}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}
