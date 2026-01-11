
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectIdeaValidator from './components/ProjectIdeaValidator';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageCircle, ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Why Choose Us Section */}
        <section className="py-24 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-8 border-l-2 border-indigo-500 bg-indigo-500/5">
                <h4 className="text-xl font-bold mb-4">Scalable Architecture</h4>
                <p className="text-slate-400">Our code grows with your business. We build systems that handle 100 to 10M users without breaking a sweat.</p>
              </div>
              <div className="p-8 border-l-2 border-cyan-500 bg-cyan-500/5">
                <h4 className="text-xl font-bold mb-4">On-Time Delivery</h4>
                <p className="text-slate-400">We use agile methodologies to ensure transparent milestones and zero-delay project completion.</p>
              </div>
              <div className="p-8 border-l-2 border-emerald-500 bg-emerald-500/5">
                <h4 className="text-xl font-bold mb-4">Modern Tech Stack</h4>
                <p className="text-slate-400">From React and Flutter to Node.js and AWS, we use the most reliable tech in the world.</p>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        {/* AI Feature Interaction */}
        <ProjectIdeaValidator />

        {/* Process Section */}
        <section id="process" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-slate-400">A battle-tested 4-step framework to launch high-conversion products.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Discover', desc: 'Strategy sessions to map your goals and user needs.' },
                { step: '02', title: 'Design', desc: 'Crafting pixel-perfect prototypes and UX systems.' },
                { step: '03', title: 'Develop', desc: 'High-speed coding with rigorous testing phases.' },
                { step: '04', title: 'Launch', desc: 'Deployment, optimization, and scaling support.' }
              ].map((item, idx) => (
                <div key={idx} className="relative p-8 group border border-white/5 bg-white/2 hover:bg-white/5 transition-all rounded-2xl">
                  <span className="text-5xl font-black text-white/5 group-hover:text-indigo-500/10 absolute top-4 right-4 transition-colors">{item.step}</span>
                  <h4 className="text-2xl font-bold mb-4 text-indigo-400">{item.title}</h4>
                  <p className="text-slate-400 relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Mini Section */}
        <section id="work" className="py-24 bg-slate-900/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:row items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-slate-400">A glimpse into the digital products we've shipped for our global clients.</p>
              </div>
              <a href="#" className="px-8 py-3 glass rounded-full font-bold hover:bg-white/10 transition-all">View All Work</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: 'Nexus FinTech', cat: 'Mobile Banking', img: 'https://picsum.photos/800/600?random=11' },
                { title: 'Velocis App', cat: 'Logistics Platform', img: 'https://picsum.photos/800/600?random=12' }
              ].map((p, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-video">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <span className="px-6 py-2 bg-indigo-600 rounded-full text-sm font-bold">Case Study</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{p.title}</h4>
                  <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">{p.cat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <ContactForm />
      </main>

      <Footer />

      {/* Floating UI Elements */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="w-14 h-14 bg-white/10 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all animate-in fade-in zoom-in"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
        <a 
          href="https://wa.me/15550000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* Sticky Bottom CTA for Mobile-First Conversion */}
      <div className="fixed bottom-0 left-0 w-full p-4 md:hidden z-50 pointer-events-none">
        <a href="#contact" className="pointer-events-auto w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center shadow-2xl shadow-indigo-600/40">
          Book Free Strategy Call
        </a>
      </div>
    </div>
  );
};

export default App;
