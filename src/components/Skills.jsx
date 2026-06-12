import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillCategory = ({ title, skills, color }) => {
  return (
    <div 
      data-aos="fade-up"
      className="bg-white/80 backdrop-blur-md border border-zinc-200/60 rounded-2xl p-6 hover:border-zinc-400 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:bg-white transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Subtle border top accent line on hover */}
      <div 
        className="absolute top-0 left-0 w-0 h-[3px] transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: color }}
      ></div>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-4 rounded-full" style={{ backgroundColor: color }}></span>
          <h3 className="text-sm font-bold tracking-tight text-zinc-900 uppercase font-mono">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-zinc-50/50 hover:bg-[#ff2a2a] hover:text-white text-zinc-600 hover:border-[#ff2a2a] rounded-lg text-xs font-semibold tracking-wide border border-zinc-200/50 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = [
    {
      title: "Programming",
      color: "#ff2a2a",
      skills: ["C", "C++", "Java", "Python"]
    },
    {
      title: "Web Development",
      color: "#ff8c00",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"]
    },
    {
      title: "Databases & Cloud",
      color: "#ffd700",
      skills: ["MySQL", "Firebase", "Vercel"]
    },
    {
      title: "Libraries & Data Science",
      color: "#00ff7f",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
    },
    {
      title: "Tools & Platforms",
      color: "#00bfff",
      skills: ["Git", "GitHub", "VS Code", "Streamlit", "Android Studio"]
    },
    {
      title: "Core Concepts",
      color: "#da70d6",
      skills: ["DSA", "OOPS", "Operating Systems", "Computer Networks"]
    },
    {
      title: "Designing",
      color: "#ff1493",
      skills: ["UI/UX Design", "Figma", "Wireframing", "Prototyping"]
    },
    {
      title: "Soft Skills",
      color: "#8c8c8c",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="bg-white pt-32 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-zinc-100">
      
      {/* Premium square grid background pattern with fade-out mask */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `, 
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-24">
          <span className="text-[10px] font-black tracking-[0.25em] text-[#ff2a2a] uppercase mb-4 block font-mono">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-tight tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-zinc-500 text-sm md:text-base max-w-lg mx-auto mt-4 font-medium leading-relaxed">
            A comprehensive overview of languages, frameworks, libraries, and design practices I use to build modern products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <SkillCategory 
              key={index}
              title={cat.title}
              color={cat.color}
              skills={cat.skills}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
