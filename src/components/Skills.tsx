"use client";
import PremiumCard from "./PremiumCard";
import { FaCode, FaLayerGroup, FaDatabase, FaWrench, FaRobot, FaUsers } from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    iconBg: "bg-blue-500/20 text-blue-400",
    skills: ["C", "C++", "Python", "Java", "HTML", "CSS", "JavaScript", "PHP"]
  },
  {
    title: "Frameworks & Libraries",
    icon: FaLayerGroup,
    iconBg: "bg-green-500/20 text-green-400",
    skills: ["Flask", "React.js", "Node.js", "Express.js", "Django", "JSP", "NumPy", "Pandas", "Scikit-learn", "Librosa"]
  },
  {
    title: "AI & LLMs",
    icon: FaRobot,
    iconBg: "bg-purple-500/20 text-purple-400",
    skills: ["Prompt Engineering", "Agentic Workflows", "LLM APIs", "Tool Calling", "Embeddings"]
  },
  {
    title: "Databases",
    icon: FaDatabase,
    iconBg: "bg-yellow-500/20 text-yellow-400",
    skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & Technologies",
    icon: FaWrench,
    iconBg: "bg-orange-500/20 text-orange-400",
    skills: ["REST APIs", "OAuth", "Postman", "Git", "GitHub", "SQLAlchemy", "Bcrypt", "Cloudinary"]
  },
  {
    title: "Soft Skills",
    icon: FaUsers,
    iconBg: "bg-cyan-500/20 text-cyan-400",
    skills: ["Teamwork", "Leadership", "Problem-Solving", "Communication"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <PremiumCard key={idx} className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.iconBg}`}>
                <category.icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-800/50 text-slate-300 border border-white/5 hover:bg-white/10 hover:text-white transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </PremiumCard>
        ))}
      </div>
    </section>
  );
}