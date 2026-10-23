import React from 'react';
import {
  Compass,
  Clapperboard,
  Share2,
  PenTool,
  Lightbulb,
  Megaphone,
  CalendarCheck,
  Eye,
  ArrowUpRight,
} from 'lucide-react';
import { coreExpertise } from '../data/portfolio';

const iconMap = {
  Compass: Compass,
  Clapperboard: Clapperboard,
  Share2: Share2,
  PenTool: PenTool,
  Lightbulb: Lightbulb,
  Megaphone: Megaphone,
  CalendarCheck: CalendarCheck,
  Eye: Eye,
};

export default function Expertise() {
  return (
    <section id="expertise" className="section-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            Core Capabilities
          </div>
          <h2 className="section-title">
            Specialized <span className="serif-accent">marketing & creative</span> skillset.
          </h2>
          <p className="section-subtitle">
            Documented domains of expertise spanning strategic planning, narrative copywriting, visual direction, and digital execution.
          </p>
        </div>

        {/* 8 Expertise Cards Grid */}
        <div
          className="expertise-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {coreExpertise.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Compass;
            return (
              <div
                key={item.id}
                className="expertise-card group"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '18px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-normal)',
                }}
              >
                <div>
                  {/* Top Icon & Index */}
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
                        border: '1px solid var(--accent-border)',
                        color: 'var(--accent-electric)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform var(--transition-fast)',
                      }}
                    >
                      <IconComponent size={22} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description based on verified resume */}
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Bottom subtle accent line */}
                <div
                  style={{
                    marginTop: '1.75rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted)',
                    }}
                  >
                    Verified Domain
                  </span>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-electric)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
