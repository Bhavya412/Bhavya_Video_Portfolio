import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark'); // 'dark' = white text on dark sections, 'light' = black text on white sections

  useEffect(() => {
    const handleScroll = () => {
      // Find current scroll position with an offset for navbar height
      const scrollPosition = window.scrollY + 100;
      
      const sections = ['home', 'about', 'skills', 'internships', 'projects', 'certificates', 'contact'];
      let activeSection = 'home';
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            activeSection = sectionId;
            break;
          }
        }
      }

      // 'skills', 'internships', 'projects' are light (white) background -> black text navbar
      // others (home, about, certificates, contact) are dark/red background -> white text navbar
      if (['skills', 'internships', 'projects'].includes(activeSection)) {
        setTheme('light');
      } else {
        setTheme('dark');
      }

      // Scroll state to add border and backdrop blur
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Internships', 'Projects', 'Certificates'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isOpen 
          ? 'bg-[#ff2a2a] border-transparent py-4'
          : isScrolled 
            ? theme === 'light'
              ? 'bg-white/80 backdrop-blur-md border-zinc-100 py-4 shadow-sm'
              : 'bg-[#0a0a0a]/80 backdrop-blur-md border-zinc-900/30 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
            : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a 
            href="#" 
            className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}
          >
            BHAVYA<span className="text-[#ff2a2a]">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className={`font-semibold relative group transition-colors duration-300 ${
                theme === 'light' 
                  ? 'text-black hover:text-zinc-600 text-sm' 
                  : 'text-white/85 hover:text-white text-sm'
              }`}
            >
              {link}
              {/* Smooth hover underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 backdrop-blur-md text-xs border ${
              theme === 'light' 
                ? 'bg-black text-white border-black hover:bg-zinc-800 shadow-sm' 
                : 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
            }`}
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-2 transition-colors duration-300 ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2">
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
