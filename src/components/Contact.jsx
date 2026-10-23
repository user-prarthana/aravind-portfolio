import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, MessageSquare, FileText, Clock, Tag } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolio';

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states for creating mailto link
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Brand Campaign & Creative Direction Inquiry',
    selectedScope: 'Brand Campaign',
    selectedTimeline: 'Within 2–4 Weeks',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scopeOptions = [
    'Brand Campaign',
    'Social Media Retainer',
    'Scriptwriting & Ideation',
    'Creative Direction',
    'Content Strategy',
  ];

  const timelineOptions = [
    'Immediate',
    'Within 2–4 Weeks',
    'Flexible',
  ];

  const handleSelectScope = (scope) => {
    setFormState((prev) => ({
      ...prev,
      selectedScope: scope,
      subject: `${scope} Inquiry — ${prev.name || 'Creative Collaboration'}`,
    }));
  };

  const handleSelectTimeline = (timeline) => {
    setFormState((prev) => ({
      ...prev,
      selectedTimeline: timeline,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subjectLine = encodeURIComponent(
      formState.subject || `Inquiry: ${formState.selectedScope} from ${formState.name || 'Portfolio Visitor'}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nProject Scope: ${formState.selectedScope}\nTimeline: ${formState.selectedTimeline}\n\nMessage:\n${formState.message || 'I would like to discuss a potential creative marketing collaboration.'}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            Start a Conversation
          </div>
          <h2 className="section-title">
            Have an idea <span className="serif-accent">worth communicating?</span>
          </h2>
          <p className="section-subtitle">
            Let's connect and explore how creative thinking, content, and marketing can bring your ideas to life.
          </p>
        </div>

        {/* Contact Grid: Direct Channels & Interactive Inquiry Builder */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Verified Contact Channels */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Email Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      color: 'var(--accent-electric)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                      }}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem 0.85rem', fontSize: '0.8125rem' }}
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="btn btn-primary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}
                  >
                    <span>Email Me</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                      Phone & WhatsApp
                    </div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                      }}
                    >
                      {personalInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem 0.85rem', fontSize: '0.8125rem' }}
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>

                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}
                  >
                    <span>Call</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '20px',
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(10, 102, 194, 0.1)',
                      color: '#0A66C2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LinkedInIcon size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                      Professional Network
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      linkedin.com/in/aravind-vamadevan
                    </div>
                  </div>
                </div>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: '#0A66C2',
                    padding: '0.5rem 1rem',
                    fontSize: '0.8125rem',
                  }}
                >
                  <span>Connect</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Resume / Location Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin size={20} color="var(--accent-electric)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                    Based in <strong>{personalInfo.location}</strong>
                  </span>
                </div>

                {onOpenResume && (
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="btn btn-secondary"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.8125rem', gap: '0.4rem' }}
                  >
                    <FileText size={15} color="var(--accent-electric)" />
                    <span>View Full Resume</span>
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Inquiry Builder */}
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-medium)',
              borderRadius: '24px',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <MessageSquare size={18} color="var(--accent-electric)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                Start an Inquiry
              </h3>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Select your project scope and timeline below. Your selections automatically prepare an email to <strong>{personalInfo.email}</strong>.
            </p>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Project Scope Chips */}
              <div>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Tag size={13} color="var(--accent-electric)" />
                  <span>Project Scope / Focus</span>
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {scopeOptions.map((scope) => {
                    const isSelected = formState.selectedScope === scope;
                    return (
                      <button
                        key={scope}
                        type="button"
                        onClick={() => handleSelectScope(scope)}
                        style={{
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          padding: '0.35rem 0.85rem',
                          borderRadius: '999px',
                          border: isSelected ? '1px solid var(--accent-electric)' : '1px solid var(--border-medium)',
                          backgroundColor: isSelected ? 'var(--accent-electric)' : 'var(--bg-surface)',
                          color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        {scope}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline Chips */}
              <div>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}
                >
                  <Clock size={13} color="var(--accent-electric)" />
                  <span>Target Timeline</span>
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {timelineOptions.map((timeline) => {
                    const isSelected = formState.selectedTimeline === timeline;
                    return (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => handleSelectTimeline(timeline)}
                        style={{
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          padding: '0.35rem 0.85rem',
                          borderRadius: '999px',
                          border: isSelected ? '1px solid var(--text-primary)' : '1px solid var(--border-medium)',
                          backgroundColor: isSelected ? 'var(--text-primary)' : 'var(--bg-surface)',
                          color: isSelected ? 'var(--text-inverse)' : 'var(--text-primary)',
                          cursor: 'pointer',
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        {timeline}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-name"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Nair"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-surface)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. rahul@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-surface)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                >
                  Subject Line
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-surface)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Share a brief overview of your ideas, creative requirements, or collaboration goals..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1.5px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-surface)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  fontSize: '0.9375rem',
                  marginTop: '0.5rem',
                }}
              >
                <Send size={16} />
                <span>Launch Email Client & Send</span>
              </button>

              {formSubmitted && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    borderRadius: '10px',
                    color: '#065F46',
                    fontSize: '0.8125rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Check size={16} />
                  <span>Draft created in your mail client. Ready for review and sending!</span>
                </div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
