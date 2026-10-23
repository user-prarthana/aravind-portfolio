import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp, Sparkles, Building2, Layers } from 'lucide-react';
import { currentExperience } from '../data/portfolio';

export default function Experience() {
  const [showAllTasks, setShowAllTasks] = useState(true);

  // Grouped pillars for editorial clarity
  const pillars = [
    {
      title: 'Creative Leadership & Direction',
      items: [
        'Lead creative development for digital marketing and social media communication.',
        'Support creative execution from initial idea and scripting through final communication.',
      ],
    },
    {
      title: 'Content Ideation & Scriptwriting',
      items: [
        'Develop concepts, content ideas, scripts, and marketing copy for digital platforms.',
        'Develop video-led and visual content ideas based on audience interests and social media trends.',
      ],
    },
    {
      title: 'Multi-Channel Execution',
      items: [
        'Plan and execute content across Instagram, LinkedIn, and YouTube.',
        'Translate institutional events, student activities, and initiatives into engaging brand content.',
      ],
    },
    {
      title: 'Campaign & Brand Communication',
      items: [
        'Work with internal teams on campaigns, promotional communication, and creative requirements.',
        'Contribute to digital brand visibility through consistent, audience-focused content.',
      ],
    },
  ];

  return (
    <section id="experience" className="section-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            Professional Track Record
          </div>
          <h2 className="section-title">
            Leadership & <span className="serif-accent">creative execution.</span>
          </h2>
          <p className="section-subtitle">
            Leading creative strategy, scripting, and social media marketing for digital brand communication.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: '24px',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
          }}
        >
          {/* Top Banner / Role Summary */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1.5rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--border-light)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-electric)',
                  marginBottom: '0.75rem',
                }}
              >
                <Building2 size={16} />
                <span>Autonomous Institution</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {currentExperience.designation}
              </h3>

              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--accent-cobalt)',
                }}
              >
                {currentExperience.organization}
              </div>
            </div>

            {/* Meta tags */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
                alignItems: 'flex-end',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  color: 'var(--accent-electric)',
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                }}
              >
                <Calendar size={15} />
                <span>{currentExperience.period}</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                }}
              >
                <MapPin size={15} />
                <span>{currentExperience.location}</span>
              </div>
            </div>
          </div>

          {/* Core Strategic Pillars Overview */}
          <div style={{ paddingTop: '2.5rem' }}>
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
              }}
            >
              Documented Scope of Responsibilities
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    transition: 'border-color var(--transition-fast)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '1rem',
                      paddingBottom: '0.5rem',
                      borderBottom: '1px solid var(--border-light)',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-electric)',
                        color: '#FFF',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span>{pillar.title}</span>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem', margin: 0, padding: 0 }}>
                    {pillar.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.625rem',
                          fontSize: '0.9rem',
                          lineHeight: 1.5,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <span
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-electric)',
                            marginTop: '0.55rem',
                            flexShrink: 0,
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Complete Full Responsibilities List (Expandable or Verified Accordion) */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Verified role at Lead College Autonomous (2025–Present).
              </div>

              <button
                type="button"
                onClick={() => setShowAllTasks(!showAllTasks)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--accent-electric)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>{showAllTasks ? 'Collapse Full Task List' : 'View All 8 Key Responsibilities'}</span>
                {showAllTasks ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>

            {showAllTasks && (
              <div
                style={{
                  marginTop: '1.5rem',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid var(--border-light)',
                }}
              >
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  Complete Official Scope:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.875rem' }}>
                  {currentExperience.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <CheckCircle size={16} color="var(--accent-electric)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
