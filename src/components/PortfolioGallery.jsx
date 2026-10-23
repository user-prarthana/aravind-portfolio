import React, { useState, useMemo } from 'react';
import { Film, ExternalLink, X, Play, Copy, Check, Info, Layers, Sparkles } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import PortfolioCard from './PortfolioCard';
import { portfolioReels } from '../data/portfolio';

export default function PortfolioGallery() {
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [activeModalReel, setActiveModalReel] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter reels based on selected collection tab
  const filteredReels = useMemo(() => {
    if (selectedCollection === 'all') return portfolioReels;
    return portfolioReels.filter((reel) => reel.collection === selectedCollection);
  }, [selectedCollection]);

  const handleOpenPreview = (reel) => {
    setActiveModalReel(reel);
    setCopiedLink(false);
  };

  const handleCloseModal = () => {
    setActiveModalReel(null);
    setCopiedLink(false);
  };

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const collectionTabs = [
    { id: 'all', label: 'All Reels', count: portfolioReels.length, range: '01–10' },
    { id: '01', label: 'Collection 01', count: 5, range: '01–05' },
    { id: '02', label: 'Collection 02', count: 5, range: '06–10' },
  ];

  return (
    <section id="work" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            <div className="section-tag">
              Curated Reel Archives
            </div>
            <h2 className="section-title">
              Creative content <span className="serif-accent">in motion.</span>
            </h2>
            <p className="section-subtitle">
              A curated catalog of 10 Instagram Reels showcasing vertical video ideation, visual pacing, and audience-first digital brand storytelling.
            </p>
          </div>

          {/* Quick Counter / Format Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-medium)',
              padding: '0.625rem 1.25rem',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-electric)',
              }}
            />
            <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {filteredReels.length} Reels Displayed
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              • 9:16 Vertical Storytelling
            </span>
          </div>
        </div>

        {/* Collection Filter Tabs (Same Architectural Model as Reference) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              marginRight: '0.5rem',
            }}
          >
            Collections:
          </span>

          {collectionTabs.map((tab) => {
            const isActive = selectedCollection === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCollection(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'all var(--transition-fast)',
                  backgroundColor: isActive ? 'var(--text-primary)' : 'var(--bg-primary)',
                  color: isActive ? 'var(--text-inverse)' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--text-primary)' : '1px solid var(--border-medium)',
                  boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.12)' : 'none',
                  cursor: 'pointer',
                }}
              >
                <span>{tab.label}</span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.1rem 0.45rem',
                    borderRadius: '999px',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.06)',
                    color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                    fontWeight: 700,
                  }}
                >
                  {tab.range}
                </span>
              </button>
            );
          })}
        </div>

        {/* Informational Guidance Notice */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-light)',
            borderRadius: '14px',
            padding: '0.875rem 1.25rem',
            marginBottom: '2.5rem',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
          }}
        >
          <Info size={18} color="var(--accent-electric)" style={{ flexShrink: 0 }} />
          <span>
            Clicking any card or <strong>"Watch on Instagram"</strong> opens the original verified Reel in a new tab.
          </span>
        </div>

        {/* Filtered Reels Responsive Grid */}
        <div
          className="portfolio-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredReels.map((reel, index) => (
            <PortfolioCard
              key={reel.id}
              reel={reel}
              index={index}
              onPreview={handleOpenPreview}
            />
          ))}
        </div>

      </div>

      {/* Modal for Embed Preview / Direct Link Launch */}
      {activeModalReel && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-reel-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(14, 19, 31, 0.85)',
            backdropFilter: 'blur(8px)',
            padding: '1rem',
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              backgroundColor: '#0E131F',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px',
              padding: '1.75rem',
              color: '#FAF7F2',
              boxShadow: 'var(--shadow-card-hover)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '1rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#60A5FA',
                  }}
                >
                  COLLECTION {activeModalReel.collection || '01'} • REEL {activeModalReel.number}
                </span>
                <h3 id="modal-reel-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#FAF7F2' }}>
                  {activeModalReel.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close modal"
                style={{
                  padding: '0.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FAF7F2',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Embedded Instagram Iframe */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '9 / 13',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#151C2C',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '1.25rem',
              }}
            >
              <iframe
                src={`https://www.instagram.com/reel/${activeModalReel.reelCode}/embed/`}
                title={activeModalReel.title}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={activeModalReel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <InstagramIcon size={18} />
                <span>Open Reel on Instagram</span>
                <ExternalLink size={15} />
              </a>

              <button
                type="button"
                onClick={() => handleCopyLink(activeModalReel.url)}
                className="btn btn-secondary"
                style={{
                  width: '100%',
                  color: '#FAF7F2',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                {copiedLink ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
                <span>{copiedLink ? 'Reel URL Copied!' : 'Copy Instagram Reel Link'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
