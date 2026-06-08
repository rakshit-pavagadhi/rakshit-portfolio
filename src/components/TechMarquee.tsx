"use client";
import { FaJava, FaGithub } from "react-icons/fa";
import { 
  SiC, SiCplusplus, SiPython, SiHtml5, SiCss, SiJavascript, SiPhp, 
  SiFlask, SiReact, SiNodedotjs, SiExpress, SiDjango, SiNumpy, SiPandas, SiScikitlearn, 
  SiMysql, SiPostgresql, SiMongodb, SiPostman, SiGit, SiCloudinary 
} from "react-icons/si";

// Extracted from your resume
const techStack = [
  { name: "C", icon: SiC, color: "text-blue-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
  { name: "Flask", icon: SiFlask, color: "text-white" },
  { name: "React.js", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-white" },
  { name: "Django", icon: SiDjango, color: "text-green-700" },
  { name: "NumPy", icon: SiNumpy, color: "text-blue-400" },
  { name: "Pandas", icon: SiPandas, color: "text-purple-500" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-500" }
];

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden border-y border-white/5 py-14 relative flex items-center bg-slate-950/50">
      
      {/* Custom CSS for a mathematically perfect seamless loop */}
      <style>{`
        @keyframes perfect-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-perfect-marquee {
          animation: perfect-marquee 50s linear infinite;
        }
      `}</style>

      {/* Edge Fades */}
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
      
      {/* The Moving Container */}
      <div className="flex animate-perfect-marquee hover:[animation-play-state:paused] w-max">
        
        {/* We duplicate the array EXACTLY ONCE so that when it hits -50%, it loops invisibly */}
        {[...techStack, ...techStack].map((tech, idx) => (
          <div key={idx} className="mx-4 relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl glass hover:scale-110 transition-all cursor-pointer group">
             
             {/* Floating Tooltip */}
             <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg pointer-events-none whitespace-nowrap border border-white/10 z-20">
               {tech.name}
               {/* Tooltip Arrow */}
               <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-white/10"></div>
             </div>

             <tech.icon className={`text-5xl md:text-6xl ${tech.color} drop-shadow-[0_0_15px_currentColor] group-hover:drop-shadow-[0_0_30px_currentColor] transition-all`} />
          </div>
        ))}
      </div>
    </div>
  );
}