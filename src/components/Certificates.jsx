import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const CertificateCard = ({ title, issuer, type, description, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e) => {
    // Prevent flipping when clicking standard links/buttons inside the card
    if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-[340px] h-[220px] relative flex-shrink-0 cursor-pointer" onClick={handleCardClick}>
      {/* Metallic connector pin */}
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-100 to-zinc-400 border border-zinc-500 shadow-md flex items-center justify-center absolute -top-3 left-1/2 -translate-x-1/2 z-20">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-650 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]"></div>
      </div>

      <motion.div
        drag
        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
        dragElastic={0.1}
        whileDrag={{ scale: 1.02, cursor: "grabbing" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full relative duration-500"
      >
        {/* Card Front - White Background, Black Text */}
        <div 
          style={{ 
            backfaceVisibility: "hidden",
            zIndex: isFlipped ? 0 : 10,
            pointerEvents: isFlipped ? "none" : "auto"
          }}
          className="absolute inset-0 bg-white border border-zinc-200 rounded-[28px] p-6 flex flex-col justify-between shadow-lg text-zinc-900"
        >
          <div>
            <div className="flex justify-between items-start">
              <span className="text-[9px] text-[#ff2a2a] font-black tracking-widest uppercase font-mono">{issuer}</span>
              <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse"></span>
            </div>
            <h3 className="text-sm font-black text-zinc-900 tracking-tight mt-2.5 leading-snug whitespace-normal">
              {title}
            </h3>
            <p className="text-[11px] text-zinc-500 font-medium mt-2 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
          <div className="flex justify-between items-end border-t border-zinc-150 pt-2 text-[9px] text-zinc-400 font-mono">
            <span>{type}</span>
            <span className="text-[#ff2a2a] font-bold hover:underline">CLICK TO FLIP</span>
          </div>
        </div>

        {/* Card Back - Black Background, White Text */}
        <div 
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)",
            zIndex: isFlipped ? 10 : 0,
            pointerEvents: isFlipped ? "auto" : "none"
          }}
          className="absolute inset-0 bg-zinc-950 border border-zinc-800 rounded-[28px] p-6 flex flex-col justify-between shadow-lg text-white"
        >
          <div>
            <div className="flex justify-between items-start">
              <span className="text-[9px] text-[#ff2a2a] font-black tracking-widest uppercase font-mono">{issuer}</span>
            </div>
            <h3 className="text-base font-black text-white tracking-tight mt-4 leading-snug whitespace-normal">
              {title}
            </h3>
          </div>
          <div className="flex flex-col gap-3 border-t border-zinc-900 pt-3">
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-[#ff2a2a] hover:bg-red-650 text-white font-black text-[10px] tracking-wider uppercase rounded-xl shadow transition-colors text-center block"
            >
              View Certificate
            </a>
            <div className="flex justify-center items-center text-[8px] text-zinc-500 font-mono">
              <span>{type}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Certificates = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const certsData = [
    {
      title: "Certified in Machine Learning",
      issuer: "Kaggle",
      type: "Professional Certification",
      description: "Learned and applied basic machine learning concepts, including building simple models, improving accuracy, and writing clean code.",
      link: "https://drive.google.com/file/d/1D5u2H1EVAAxjHS0uWhZ2zN1k_s0daIET/view?usp=drive_link"
    },
    {
      title: "Agentic AI Workshop",
      issuer: "Capabl",
      type: "Workshop Certification",
      description: "Learned the basics of Agentic AI, including how AI agents make decisions, plan tasks, and use tools to solve real-world problems.",
      link: "https://drive.google.com/file/d/1Qlg0SEkGmd3Ude9ruy4xDV0WgMBrIs98/view?usp=drive_link"
    },
    {
      title: "Data Analytics Virtual Internship",
      issuer: "Accenture / Forage",
      type: "Virtual Internship",
      description: "Gained experience in data cleaning, exploratory data analysis, and dashboard generation. Analyzed dataset categories to recommend high-growth insights.",
      link: "https://drive.google.com/file/d/1AZvna0Ew3bJ_DiV6hn7lGNmKPk0gNltS/view?usp=sharing"
    },
    {
      title: "Certified in Prompt Engineering",
      issuer: "Infosys Springboard",
      type: "Professional Certification",
      description: "Mastered prompt design, zero-shot and few-shot inference patterns, role prompting, and chaining models to solve complex reasoning problems.",
      link: "https://drive.google.com/file/d/1_75FMjpaEIGlgkx_avyWIwNeV5lTEJOE/view?usp=drive_link"
    },
    {
      title: "Cyber Security Workshop",
      issuer: "Cyberthreya",
      type: "2-Day Workshop",
      description: "Explored threat detection models, network protocols security, cyber defense workflows, and methodologies for building resilient online systems.",
      link: "https://drive.google.com/file/d/1ypm_oDOXe0eXj2LGn8NtuIo_UF2GBaTD/view?usp=drive_link"
    },
    {
      title: "AI & ML Workshop",
      issuer: "GeeksforGeeks",
      type: "GFG Chapter Workshop",
      description: "Covered supervised machine learning algorithms, dataset feature selection engineering, regression modeling, and performance evaluation metrics.",
      link: "https://drive.google.com/file/d/1KCOKiRXaU0-XPYOehId_i3wkl5X1BErr/view?usp=drive_link"
    },
    {
      title: "Winner of Excellence Coding Contest",
      issuer: "GeeksforGeeks",
      type: "Competitive Programming Award",
      description: "Awarded for optimal algorithm design, speed, and clean code implementation during the Week 2 GFG student chapter coding challenge.",
      link: "https://drive.google.com/file/d/1__41jBDBWnh16Alb41WjI3LZt7eGBcZh/view?usp=drive_link"
    }
  ];

  // Double the array to ensure continuous loop scrolling
  const marqueeData = [...certsData, ...certsData];

  return (
    <section id="certificates" className="bg-[#ff2a2a] pt-32 pb-40 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top, transitioning from white Projects to red Certificates */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-30 transform -translate-y-1 rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#fcfcfc]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-20 right-10 md:right-20 text-black opacity-15 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-15 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>

      {/* Centered Header */}
      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <div data-aos="fade-up" className="text-center mb-24">
          <span className="text-[10px] font-black tracking-[0.25em] text-black uppercase mb-4 block font-mono">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 uppercase tracking-tight">Certifications & Awards</h2>
          <p className="text-sm md:text-base font-bold max-w-xl mx-auto text-red-50 leading-relaxed">
            Drag cards to inspect. Click to flip. Hover to pause.
          </p>
        </div>
      </div>

      {/* CSS Keyframes for infinite marquee scroll */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>

      {/* Scrollable track wrapper (Full-width showcase, not limited by max-w-6xl container) */}
      <div className="marquee-container overflow-hidden w-full relative py-12 select-none z-10">
        
        {/* Scroll Container (Spans full page width, animates infinitely) */}
        <div 
          className="marquee-content flex gap-12 pb-8 pt-6 relative"
          style={{
            animation: 'marquee 35s linear infinite',
            width: 'max-content'
          }}
        >
          {/* Dashed line inside the animated container, connecting the pins exactly at top-[24px] */}
          <div 
            className="absolute top-[24px] h-[2px] border-t-2 border-dashed border-black/25 z-0 pointer-events-none"
            style={{ left: '170px', right: '170px' }}
          ></div>

          {marqueeData.map((cert, index) => (
            <CertificateCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              type={cert.type}
              description={cert.description}
              link={cert.link}
            />
          ))}
        </div>
      </div>

      {/* Torn paper divider at bottom, transitioning to black Contact section */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default Certificates;
