import React, { useState } from 'react';
import { Play, ExternalLink, Film } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export default function PortfolioCard({ reel, index, onPreview }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="portfolio-card group"
      aria-label={`${reel.title} - Click to watch on Instagram`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundColor: '#0E131F',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(14, 19, 31, 0.25), 0 0 0 1.5px var(--accent-electric)'
          : 'var(--shadow-md)',
        transition: 'all var(--transition-smooth)',
        transform: isHovered ? 'translateY(-6px)' : 'none',
      }}
    >
      {/* 9:16 Ratio Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '9 / 16',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1.5rem',
          overflow: 'hidden',
        }}
      >
        {/* Background Editorial Canvas with Ambient Gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at 50% 30%, rgba(37, 99, 235, ${isHovered ? '0.28' : '0.12'}) 0%, rgba(14, 19, 31, 0.95) 75%)`,
            transition: 'background var(--transition-normal)',
            zIndex: 1,
          }}
        />

        {/* Film Frame Perforation / Editorial Vertical Lines */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '12px',
            width: '1px',
            background: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 4px, transparent 4px, transparent 8px)',
            zIndex: 2,
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: '12px',
            width: '1px',
            background: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 4px, transparent 4px, transparent 8px)',
            zIndex: 2,
            opacity: 0.6,
          }}
        />

        {/* Top Header: Collection & Reel Number & Format */}
        <div
          style={{
            position: 'relative',
            zIndex: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(8px)',
              padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              color: '#FAF7F2',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}
          >
            <Film size={12} color="#60A5FA" />
            <span>COLLECTION {reel.collection || '01'} • REEL {reel.number}</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#94A3B8',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            <InstagramIcon size={14} color="#E1306C" />
            <span>9:16</span>
          </div>
        </div>

        {/* Center: Play Icon & Graphic Frequency Bar Pulse */}
        <div
          style={{
            position: 'relative',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Animated Glow Ring */}
          <div
            onClick={() => onPreview ? onPreview(reel) : window.open(reel.url, '_blank')}
            role="button"
            tabIndex={0}
            aria-label={`Preview ${reel.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                if (onPreview) onPreview(reel);
                else window.open(reel.url, '_blank');
              }
            }}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              backgroundColor: isHovered ? 'var(--accent-electric)' : 'rgba(255, 255, 255, 0.08)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: isHovered ? '0 0 30px rgba(37, 99, 235, 0.6)' : 'none',
              transition: 'all var(--transition-normal)',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              cursor: 'pointer',
            }}
          >
            <Play
              size={28}
              fill="#FFFFFF"
              color="#FFFFFF"
              style={{
                marginLeft: '3px',
                transition: 'transform var(--transition-fast)',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
            />
          </div>

          {/* Sound / Frequency Bars Decorative graphic */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginTop: '1.25rem',
              opacity: isHovered ? 1 : 0.6,
              transition: 'opacity var(--transition-fast)',
            }}
          >
            {[14, 24, 18, 30, 22, 34, 20, 16, 26, 12].map((height, i) => (
              <span
                key={i}
                style={{
                  width: '3px',
                  height: isHovered ? `${height}px` : `${Math.max(6, height * 0.5)}px`,
                  backgroundColor: i % 2 === 0 ? 'var(--accent-electric)' : '#60A5FA',
                  borderRadius: '2px',
                  transition: 'height 200ms ease-in-out',
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Area: Accessible Title & Direct Watch Action */}
        <div
          style={{
            position: 'relative',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
          }}
        >
          {/* Title */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#FAF7F2',
                marginBottom: '0.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              {reel.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: '#94A3B8',
                margin: 0,
              }}
            >
              Vertical Video Storytelling
            </p>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${reel.title} on Instagram (opens in new tab)`}
              className="btn"
              style={{
                flex: 1,
                padding: '0.65rem 0.85rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                backgroundColor: isHovered ? 'var(--accent-electric)' : 'rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                borderRadius: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                transition: 'all var(--transition-fast)',
              }}
            >
              <InstagramIcon size={15} />
              <span>Watch on Instagram</span>
              <ExternalLink size={13} />
            </a>

            {/* In-page Modal Preview trigger */}
            {onPreview && (
              <button
                type="button"
                onClick={() => onPreview(reel)}
                title="Preview embedded Reel modal"
                aria-label={`Preview ${reel.title} in modal`}
                style={{
                  padding: '0.65rem 0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FAF7F2',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background var(--transition-fast)',
                }}
              >
                <Play size={14} />
              </button>
            )}
          </div>

        </div>

      </div>
    </article>
  );
}
