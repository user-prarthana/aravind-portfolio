import React from 'react';
import { Sparkles, CheckCircle2, Globe, HeartHandshake, Compass, Layers, Quote } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            Professional Overview
          </div>
          <h2 className="section-title">
            Creativity with a <span className="serif-accent">marketing mindset.</span>
          </h2>
          <p className="section-subtitle">
            Bridging the gap between conceptual imagination and audience-driven communication.
          </p>
        </div>

        {/* Main Grid */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Biography & Narrative */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} style={{ margin: 0 }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div style={{ marginTop: '2.5rem' }}>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                }}
              >
                Core Competencies
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1rem',
                }}
              >
                {personalInfo.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.875rem 1.125rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '12px',
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--accent-electric)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Cards (Working Style, Languages, Creative Mindset) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Creative Mindset Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-dark)',
                color: 'var(--text-inverse)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid var(--border-dark)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Quote
                size={70}
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '10px',
                  color: 'rgba(255, 255, 255, 0.05)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#60A5FA',
                  marginBottom: '0.75rem',
                }}
              >
                Creative Mindset
              </div>
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: '1.45rem',
                  lineHeight: 1.35,
                  color: '#FAF7F2',
                  margin: 0,
                  marginBottom: '1rem',
                }}
              >
                "{personalInfo.creativeMindset}"
              </blockquote>
              <div style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                Guiding principle behind every script, campaign, and visual concept.
              </div>
            </div>

            {/* Working Style Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '1.75rem',
                borderRadius: '20px',
                border: '1px solid var(--border-medium)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
                <Compass size={20} color="var(--accent-electric)" />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Working Style
                </h3>
              </div>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                {personalInfo.workingStyle}
              </p>
            </div>

            {/* Languages Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '1.5rem 1.75rem',
                borderRadius: '20px',
                border: '1px solid var(--border-medium)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.875rem' }}>
                <Globe size={18} color="var(--accent-electric)" />
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Languages
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                {personalInfo.languages.map((lang) => (
                  <span
                    key={lang}
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-medium)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
