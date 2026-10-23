import React from 'react';
import { ExternalLink, CheckCircle, Clock } from 'lucide-react';
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from './SocialIcons';
import { digitalPlatforms } from '../data/portfolio';

const platformIcons = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
};

export default function Platforms() {
  return (
    <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Editorial Sub-Header */}
        <div style={{ maxWidth: '780px', marginBottom: '2.5rem' }}>
          <div className="section-tag">
            Digital Presence
          </div>
          <h2 className="section-title">
            Digital platforms & <span className="serif-accent">ecosystems.</span>
          </h2>
          <p className="section-subtitle">
            Active creative production, audience distribution, and professional networking across primary digital video and business platforms.
          </p>
        </div>

        {/* 3 Platforms Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {digitalPlatforms.map((platform) => {
            const Icon = platformIcons[platform.name];
            return (
              <div
                key={platform.name}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color var(--transition-fast)',
                }}
              >
                <div>
                  {/* Top Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: platform.name === 'Instagram'
                          ? 'rgba(225, 48, 108, 0.1)'
                          : platform.name === 'LinkedIn'
                          ? 'rgba(10, 102, 194, 0.1)'
                          : 'rgba(255, 0, 0, 0.1)',
                        color: platform.name === 'Instagram'
                          ? '#E1306C'
                          : platform.name === 'LinkedIn'
                          ? '#0A66C2'
                          : '#FF0000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    {platform.isVerifiedUrl ? (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: '#059669',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          border: '1px solid rgba(16, 185, 129, 0.2)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        <CheckCircle size={12} />
                        <span>Verified Profile</span>
                      </span>
                    ) : (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: 'var(--text-muted)',
                          backgroundColor: 'rgba(15, 23, 42, 0.05)',
                          border: '1px solid var(--border-light)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        <Clock size={12} />
                        <span>Profile Link Pending</span>
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {platform.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                    {platform.role}
                  </p>
                </div>

                {/* Action Link or Placeholder Pill */}
                <div>
                  {platform.isVerifiedUrl ? (
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '0.65rem 1rem',
                        fontSize: '0.875rem',
                        borderRadius: '12px',
                        backgroundColor: '#0A66C2',
                      }}
                    >
                      <span>Connect on LinkedIn</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div
                      style={{
                        padding: '0.65rem 1rem',
                        fontSize: '0.8125rem',
                        color: 'var(--text-muted)',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px dashed var(--border-medium)',
                        borderRadius: '12px',
                        textAlign: 'center',
                      }}
                    >
                      {platform.placeholderNote}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
