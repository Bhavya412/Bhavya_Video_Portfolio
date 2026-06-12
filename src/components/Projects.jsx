import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({ title, date, tech, points, githubUrl, liveUrl, categoryIcon }) => {
  return (
    <div 
      data-aos="fade-up"
      className="bg-white border border-zinc-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-[#ff2a2a]/60 hover:shadow-[0_15px_35px_rgba(255,42,42,0.08)] transition-all duration-500 group relative"
    >
      {/* Subtle hover gradient inside card */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[10px] text-red-500 font-black tracking-widest uppercase font-mono">{date}</span>
            <h3 className="text-2xl font-black text-zinc-900 tracking-tight mt-1 group-hover:text-[#ff2a2a] transition-colors duration-300">
              {title}
            </h3>
          </div>
          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-zinc-600 group-hover:text-white group-hover:bg-[#ff2a2a] group-hover:border-[#ff2a2a] transition-all duration-500 shadow-sm">
            {categoryIcon}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, index) => (
            <span key={index} className="px-3 py-1 bg-zinc-50 text-[10px] text-zinc-700 font-mono rounded-md border border-zinc-200 font-bold">
              {t}
            </span>
          ))}
        </div>

        {/* Bullet Points */}
        <ul className="text-sm text-zinc-600 space-y-3 mb-8 list-none pr-2">
          {points.map((pt, index) => (
            <li key={index} className="relative pl-5 leading-relaxed font-medium">
              <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-[#ff2a2a] rounded-full"></span>
              {pt}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 mt-auto relative z-10">
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2.5 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-zinc-200 transition-all active:scale-[0.98] shadow-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          Repository
        </a>
        
        {liveUrl && (
          <a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 bg-black hover:bg-zinc-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projectsData = [
    {
      title: "AI Code Generator",
      date: "Feb 2026 - Mar 2026",
      tech: ["Python", "Flask", "Groq API", "LLaMA 3", "REST API", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Bhavya412/AI_Code_Generator",
      liveUrl: "https://ai-code-generator-1-my2c.onrender.com/",
      points: [
        "Built an AI-powered code generation system using LLaMA 3 via Groq API to convert natural language prompts into executable code.",
        "Enabled multi-language code generation supporting Python, Java, C, C++, and JavaScript.",
        "Developed RESTful APIs using Flask for handling requests and AI response generation.",
        "Integrated Groq API for real-time low-latency inference and optimized prompt-based code synthesis."
      ],
      categoryIcon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "NUTMART – E-Commerce Web App",
      date: "Jul 2025 - Aug 2025",
      tech: ["React.js", "Firebase", "Node.js", "JavaScript", "HTML", "CSS", "Auth Systems"],
      githubUrl: "https://github.com/Bhavya412/E-commerce-Peanut-Website",
      liveUrl: "https://github.com/Bhavya412/E-commerce-Peanut-Website",
      points: [
        "Developed a full-stack e-commerce web application with dynamic product listing and cart functionality.",
        "Implemented secure authentication system using Firebase Authentication (login, signup, session management).",
        "Built real-time product catalog and checkout workflow using React state management.",
        "Integrated Firebase Realtime Database for scalable cloud data storage and synchronization."
      ],
      categoryIcon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: "Job Analysis & Prediction",
      date: "May 2025 - Jun 2025",
      tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit"],
      githubUrl: "https://github.com/Bhavya412/Job_Prediction",
      liveUrl: "https://jobprediction.streamlit.app/",
      points: [
        "Built a machine learning-based system for job market trend analysis and salary prediction.",
        "Performed data preprocessing, feature engineering, and exploratory data analysis (EDA) on structured datasets.",
        "Developed supervised learning models for job role classification and salary prediction.",
        "Designed interactive Streamlit dashboard for real-time data visualization and insights generation."
      ],
      categoryIcon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Virtual Library Website",
      date: "Sep 2025 - Oct 2025",
      tech: ["React.js", "Node.js", "Express", "Firebase", "CSS", "Auth Systems"],
      githubUrl: "https://github.com/Bhavya412",
      liveUrl: "https://github.com/Bhavya412",
      points: [
        "Developed a full-stack virtual library platform for buying and renting books as a part of full stack development.",
        "Implemented responsive search catalog, cart state, checkout workflow, and rent/buy transaction models.",
        "Designed bookshelf system for managing borrowed and purchased digital items in user session.",
        "Integrated Firebase storage and cloud synchronization for dynamic data retrieval."
      ],
      categoryIcon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="bg-[#fcfcfc] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-zinc-100">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight tracking-tight">
              Featured <span className="text-[#ff2a2a]">Projects</span>
            </h2>
          </div>
          <p className="text-zinc-600 text-sm md:text-base max-w-sm font-medium leading-relaxed">
            A selection of full stack applications, AI systems, and machine learning models I have developed.
          </p>
        </div>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              date={project.date}
              tech={project.tech}
              points={project.points}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              categoryIcon={project.categoryIcon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
