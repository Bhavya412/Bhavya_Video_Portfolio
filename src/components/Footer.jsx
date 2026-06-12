
const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Software Development</p>
          <p>Web & App Solutions</p>
          <p>Machine Learning & Analytics</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>B.Tech Computer Science</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Visakhapatnam, AP</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[14vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          bhavya
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
            <a href="https://github.com/Bhavya412" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">GitHub</a>
            <a href="https://www.linkedin.com/in/raparthi-bhavya-10793a303/" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">LinkedIn</a>
            <a href="https://leetcode.com/u/p3px7mZzdZ/" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">LeetCode</a>
          </div>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Bhavya Raparthi | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:bhavyaraparthi412@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">bhavyaraparthi412@gmail.com</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#home" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold uppercase">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
