import React from 'react';
import { ArrowUp, Mail, Phone, Heart, FileText } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolio';

export default function Footer({ onOpenResume }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0A0E18',
        color: '#FAF7F2',
        paddingTop: '4.5rem',
        paddingBottom: '3rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* Main Footer Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '420px' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 700,
                letterSpacing: '-0.015em',
                color: '#FAF7F2',
                marginBottom: '0.5rem',
              }}
            >
              ARAVIND V
            </div>

            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#60A5FA',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              {personalInfo.title}
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#94A3B8', margin: 0 }}>
              Marketing-minded creative professional with hands-on experience across social media, content development, creative direction, and digital brand communication.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#FAF7F2',
                  marginBottom: '1rem',
                }}
              >
                Navigation
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'About', href: '#about' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Curated Works (10 Reels)', href: '#work' },
                  { label: 'Expertise', href: '#expertise' },
                  { label: 'Education', href: '#education' },
                  { label: 'Contact', href: '#contact' },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      style={{
                        fontSize: '0.875rem',
                        color: '#94A3B8',
                        textDecoration: 'none',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
                      onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Channels */}
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#FAF7F2',
                  marginBottom: '1rem',
                }}
              >
                Connect & Credentials
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#94A3B8',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#60A5FA')}
                  onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
                >
                  <LinkedInIcon size={16} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#94A3B8',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#60A5FA')}
                  onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
                >
                  <Mail size={16} />
                  <span>{personalInfo.email}</span>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    color: '#94A3B8',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#60A5FA')}
                  onMouseLeave={(e) => (e.target.style.color = '#94A3B8')}
                >
                  <Phone size={16} />
                  <span>{personalInfo.phoneDisplay}</span>
                </a>

                {onOpenResume && (
                  <button
                    type="button"
                    onClick={onOpenResume}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      color: '#60A5FA',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left',
                    }}
                  >
                    <FileText size={16} />
                    <span>View Official Resume / CV</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.25rem',
            paddingTop: '2rem',
          }}
        >
          <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>
            © {currentYear} Aravind V. All rights reserved. Sourced from verified resume.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="btn btn-secondary"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FAF7F2',
              padding: '0.45rem 1rem',
              fontSize: '0.8125rem',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
