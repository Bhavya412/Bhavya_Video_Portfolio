import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, subtitle, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive 
          ? 'bg-[#ff2a2a] border border-[#ff2a2a] shadow-[0_20px_50px_rgba(255,42,42,0.2)]' 
          : 'bg-white border border-zinc-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)]'
      }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-black/15' : 'bg-red-50/30'
      }`}>
        <span className={`text-xs font-bold tracking-wider mb-1 uppercase transition-colors duration-700 ${
          isActive ? 'text-white/80' : 'text-[#ff2a2a] font-black'
        }`}>{number}</span>
        
        <h3 className={`text-2xl font-black mb-1 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-zinc-900'
        }`}>{title}</h3>

        <span className={`text-[10px] font-bold uppercase tracking-wider mb-3 transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-red-600'
        }`}>{subtitle}</span>
        
        <p className={`text-xs leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-zinc-600'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Internships = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="internships"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-zinc-100"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1100px]">
        
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.1] mb-6 tracking-tight relative">
            Professional Internships
            {/* Hand-drawn arrow */}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" className="hidden" />
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-zinc-600 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            Leading teams, developing full stack projects, and analyzing machine learning models.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg 
          className="hidden md:block absolute top-0 left-0 w-full h-[1100px] pointer-events-none z-0" 
          viewBox="0 0 1000 1100" 
          preserveAspectRatio="none"
        >
          {/* Faint background path */}
          <path 
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,960" 
            fill="none" 
            stroke="black" 
            strokeOpacity={0.15}
            strokeWidth="2" 
            strokeDasharray="8 10" 
          />

          {/* Mask to reveal the dashed path based on scroll */}
          <mask id="path-mask">
            <motion.path 
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,960" 
              fill="none" 
              stroke="white" 
              strokeWidth="20" 
              style={{ pathLength }}
            />
          </mask>

          {/* The actual dashed line that gets revealed */}
          <path 
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,960" 
            fill="none" 
            stroke="#ff2a2a" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg 
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" 
          viewBox="0 0 4 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="black" 
            strokeOpacity={0.15}
            strokeWidth="4" 
            strokeDasharray="4 6" 
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="#ff2a2a" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          
          <TagCard 
            number="01"
            title="MSME 360"
            subtitle="Junior Developer • Remote • Sep 2025 - Nov 2025"
            text="Contributed to implementing Next.js features and functionality. Led the Full Stack Wing team, coordinating development efforts, tasks, and collaboration."
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="02"
            title="Matsa Solutions"
            subtitle="Web Dev Intern • Remote • May 2025 - Aug 2025"
            text="Developed responsive web applications while collaborating with a remote team. Built user-friendly interfaces using React, Node.js, HTML, and Tailwind CSS."
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="03"
            title="SkillDzire"
            subtitle="Data Science Intern • Remote • May 2025 - Jul 2025"
            text="Worked on data analysis and machine learning projects involving preprocessing, visualization, and building predictive models. Applied web scraping and Pandas."
            className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Hand-drawn end text */}
          <div 
            data-aos="fade-in" 
            data-aos-delay="600"
            className="hidden md:block absolute top-[1000px] left-[30%] lg:left-[35%] font-['Caveat',cursive] text-3xl text-black rotate-6 opacity-75"
          >
            Practical expertise!
          </div>

        </div>

      </div>
    </section>
  );
};

export default Internships;
