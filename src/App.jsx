import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* Animated Background Elements */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>

      <div className="content-wrapper">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </div>

      <style>{`
        .app-container {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
        }

        .background-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
          z-index: 0;
          animation: floatBlob 20s infinite alternate;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: var(--primary);
          top: -100px;
          left: -100px;
        }

        .blob-2 {
          width: 600px;
          height: 600px;
          background: var(--secondary);
          bottom: -200px;
          right: -200px;
          animation-delay: -5s;
        }

        @keyframes floatBlob {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 50px) scale(1.1); }
          100% { transform: translate(-20px, -30px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}

export default App;
