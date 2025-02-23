import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import ChatBot from './components/ChatBot';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main>
              <Hero />
              <Stats />
              <About />
              <Programs />
              <Impact />
              <GetInvolved />
              <Contact />
            </main>
            <Footer />
            <ChatBot />
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className={`fixed bottom-6 left-6 bg-[#ffe600] text-[#002e6d] p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 ${
                showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;