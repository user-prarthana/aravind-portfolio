import React from 'react';
import { ArrowDown, ArrowUpRight, Play, Sparkles, Film, Compass, Clapperboard, MapPin, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo, currentExperience, portfolioMetrics } from '../data/portfolio';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        paddingTop: 'clamp(7.5rem, 14vw, 10.5rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 5.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Editorial Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(250,247,242,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.95fr', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="hero-content">
            
            {/* Status / Role Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <span
                style={{
                  position: 'relative',
                  display: 'flex',
                  width: '8px',
                  height: '8px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    opacity: 0.75,
                    animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                }}
              >
                {currentExperience.designation} — {currentExperience.organization}
              </span>
            </div>

            {/* Subtitle / Positioning */}
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: 'var(--accent-electric)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              {personalInfo.title}
            </div>

            {/* Main Heading */}
            <h1
              className="hero-heading"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              Ideas that <span className="serif-accent" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 600, color: 'var(--accent-electric)' }}>connect.</span>
              <br />
              Content that communicates.
            </h1>

            {/* Short Introduction */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.0625rem, 1.8vw, 1.1875rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                marginBottom: '2.25rem',
              }}
            >
              {personalInfo.shortIntro}
            </p>

            {/* CTAs */}
            <div
              className="hero-ctas"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#work" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                <span>Explore Works</span>
                <ArrowDown size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                <span>Let's Connect</span>
                <ArrowUpRight size={18} />
              </a>

              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.9rem 1.5rem',
                    fontSize: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <FileText size={18} color="var(--accent-electric)" />
                  <span>View Resume</span>
                </button>
              )}
            </div>

            {/* Key Skill Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.625rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-medium)',
              }}
            >
              <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                Focus:
              </span>
              {['Content Strategy', 'Creative Direction', 'Social Media'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    backgroundColor: 'rgba(15, 23, 42, 0.04)',
                    border: '1px solid var(--border-light)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {tag}
                </span>
              ))}

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  marginLeft: 'auto',
                }}
              >
                <MapPin size={14} />
                <span>{personalInfo.location}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Creative Visual Composition (Typographic & Editorial Art) */}
          <div className="hero-visual" style={{ position: 'relative' }}>
            
            {/* Editorial Showcase Frame */}
            <div
              style={{
                position: 'relative',
                background: 'linear-gradient(145deg, #0E131F 0%, #151D2F 100%)',
                borderRadius: '24px',
                padding: '2.25rem',
                color: '#FAF7F2',
                boxShadow: 'var(--shadow-card-hover)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
              }}
            >
              {/* Subtle Ambient Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-20%',
                  width: '280px',
                  height: '280px',
                  background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
              />

              {/* Header inside frame */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '2rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '1.25rem',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#60A5FA' }}>
                    Creative Direction & Strategy
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.015em', color: '#FAF7F2' }}>
                    ARAVIND V
                  </div>
                </div>

                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(37, 99, 235, 0.25)',
                    border: '1px solid rgba(37, 99, 235, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#93C5FD',
                  }}
                >
                  <Sparkles size={18} />
                </div>
              </div>

              {/* Editorial Statement Quote */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  marginBottom: '1.75rem',
                  position: 'relative',
                }}
              >
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', marginBottom: '0.5rem' }}>
                  Core Creative Philosophy
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: '1.35rem',
                    lineHeight: 1.35,
                    color: '#FAF7F2',
                  }}
                >
                  "{personalInfo.creativeMindset}"
                </div>
              </div>

              {/* Visual Reel Preview Teaser */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '1.75rem',
                }}
              >
                {[
                  { tag: '01', label: 'Scripting', icon: Clapperboard },
                  { tag: '02', label: 'Visuals', icon: Film },
                  { tag: '03', label: 'Strategy', icon: Compass },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '12px',
                        padding: '1rem 0.75rem',
                        textAlign: 'center',
                      }}
                    >
                      <Icon size={20} style={{ margin: '0 auto 0.5rem', color: '#60A5FA' }} />
                      <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#94A3B8' }}>{item.tag}</div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#FAF7F2' }}>{item.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quick Feature Reel Link */}
              <a
                href="#work"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(37, 99, 235, 0.15)',
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                  borderRadius: '12px',
                  color: '#FAF7F2',
                  transition: 'all var(--transition-normal)',
                }}
                className="group"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-electric)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Play size={14} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: '2px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>10 Curated Instagram Reels</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Vertical video storytelling & direction</div>
                  </div>
                </div>
                <ArrowUpRight size={18} color="#60A5FA" />
              </a>

            </div>

            {/* Floating Accents */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1.25rem',
                left: '-1.25rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                borderRadius: '14px',
                padding: '0.875rem 1.25rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-subtle)',
                  color: 'var(--accent-electric)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                }}
              >
                MBA
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)' }}>Marketing Mindset</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Calicut University</div>
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* SREEJITH-INSPIRED 4-CARD METRICS & TRUST COUNTER BAR MODEL    */}
        {/* ============================================================== */}
        <div
          className="metrics-grid"
          style={{
            marginTop: 'clamp(3rem, 6vw, 4.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
        >
          {portfolioMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="metric-card"
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                borderRadius: '18px',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-normal)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle top accent bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '1.25rem',
                  right: '1.25rem',
                  height: '2px',
                  backgroundColor: idx === 0 ? 'var(--accent-electric)' : 'transparent',
                }}
              />

              <div style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {metric.label}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                    }}
                  >
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--accent-electric)',
                      }}
                    >
                      {metric.unit}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '0.2rem',
                  }}
                >
                  {metric.detail}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.4,
                  }}
                >
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
