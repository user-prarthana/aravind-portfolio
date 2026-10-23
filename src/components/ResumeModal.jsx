import React, { useEffect } from 'react';
import { X, Printer, Download, MapPin, Mail, Phone, Calendar, Building2, GraduationCap, CheckCircle, Award } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';
import { personalInfo, currentExperience, educationList, coreExpertise } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="resume-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(14, 19, 31, 0.82)',
        backdropFilter: 'blur(8px)',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        className="resume-modal-paper"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid var(--border-medium)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Toolbar */}
        <div
          className="resume-toolbar no-print"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 1.75rem',
            backgroundColor: '#FAF7F2',
            borderBottom: '1px solid var(--border-medium)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Curriculum Vitae • Verified Record
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-primary"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.8125rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV modal"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="resume-printable-content" style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', color: '#0F172A' }}>
          
          {/* Header */}
          <div style={{ borderBottom: '2px solid #0F172A', paddingBottom: '1.75rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h1
                  id="resume-title"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                    marginBottom: '0.4rem',
                  }}
                >
                  {personalInfo.name}
                </h1>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--accent-electric)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {personalInfo.title}
                </div>
              </div>

              {/* Verified Contact Details Grid */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  fontSize: '0.85rem',
                  color: '#475569',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={14} color="#2563EB" />
                  <a href={`mailto:${personalInfo.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {personalInfo.email}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} color="#2563EB" />
                  <span>{personalInfo.phoneDisplay}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={14} color="#2563EB" />
                  <span>{personalInfo.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <LinkedInIcon size={14} color="#0A66C2" />
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    linkedin.com/in/aravind-vamadevan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-electric)',
                marginBottom: '0.75rem',
              }}
            >
              Professional Profile
            </div>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: '#334155', marginBottom: '0.75rem' }}>
              {personalInfo.aboutBio[0]}
            </p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.65, color: '#334155' }}>
              {personalInfo.aboutBio[1]}
            </p>
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: '2.25rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-electric)',
                marginBottom: '1rem',
              }}
            >
              Professional Experience
            </div>

            <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#0F172A' }}>
                    {currentExperience.designation}
                  </h3>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E40AF' }}>
                    {currentExperience.organization} • {currentExperience.location}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    backgroundColor: '#EFF6FF',
                    color: '#2563EB',
                    border: '1px solid #DBEAFE',
                  }}
                >
                  {currentExperience.period}
                </div>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {currentExperience.responsibilities.map((task, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#475569', lineHeight: 1.5 }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#2563EB', marginTop: '0.55rem', flexShrink: 0 }} />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '2.25rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-electric)',
                marginBottom: '1rem',
              }}
            >
              Academic Background
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {educationList.map((edu, idx) => (
                <div key={idx} style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#0F172A' }}>
                      {edu.degree}
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>{edu.period}</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2563EB', marginBottom: '0.5rem' }}>
                    {edu.institution}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.45 }}>
                    {edu.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent-electric)',
                marginBottom: '1rem',
              }}
            >
              Core Capabilities & Expertise
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {personalInfo.highlights.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    backgroundColor: '#F1F5F9',
                    border: '1px solid #E2E8F0',
                    color: '#1E293B',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
