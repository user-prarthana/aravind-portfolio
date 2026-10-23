import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import PortfolioGallery from './components/PortfolioGallery';
import Expertise from './components/Expertise';
import Platforms from './components/Platforms';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" style={{ flex: 1 }}>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <PortfolioGallery />
        <Expertise />
        <Platforms />
        <Education />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Verified Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
