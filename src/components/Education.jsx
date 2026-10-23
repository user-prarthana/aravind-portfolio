import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { educationList } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            Academic Background
          </div>
          <h2 className="section-title">
            Education & <span className="serif-accent">marketing foundation.</span>
          </h2>
          <p className="section-subtitle">
            Formal business and marketing qualifications providing theoretical rigor and strategic commercial understanding.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {educationList.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                borderRadius: '24px',
                padding: '2.25rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle Corner Accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, transparent 50%, rgba(37,99,235,0.06) 50%)',
                }}
              />

              <div>
                {/* Degree Badge & Year */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--accent-subtle)',
                      color: 'var(--accent-electric)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <GraduationCap size={24} />
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--accent-electric)',
                      backgroundColor: 'rgba(37, 99, 235, 0.08)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Degree Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.degree}
                </h3>

                {/* Institution */}
                <div
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--accent-cobalt)',
                    marginBottom: '1rem',
                  }}
                >
                  {item.institution}
                </div>

                {/* Focus / Description */}
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}
                >
                  {item.focus}
                </p>
              </div>

              {/* Bottom verified indicator */}
              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                }}
              >
                <BookOpen size={14} />
                <span>Verified Academic Degree</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
