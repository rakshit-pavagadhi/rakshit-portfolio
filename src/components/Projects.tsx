"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PremiumCard from "./PremiumCard";

const projects = [
  {
    title: "VoiceAI – Local Agent Pro",
    description: "Engineered an end-to-end agentic AI workflow integrating STT (Whisper), LLM reasoning (Llama 3 via Groq), and tool execution. Designed multi-intent command processing with contextual memory and a human-in-the-loop execution system.",
    tech: ["Python", "Whisper", "LLMs", "Groq", "Streamlit"],
    github: "https://github.com/rakshit-pavagadhi/VoiceAI-Agent"
  },
  {
    title: "Expense Management Platform",
    description: "Developed a full-stack MERN expense management platform with secure REST APIs, JWT authentication, and Bcrypt hashing. Implemented a greedy Min-Cash-Flow algorithm for dynamic expense splitting and a responsive glassmorphism UI.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/rakshit-pavagadhi/split-smart"
  },
  {
    title: "AI Based Music Composition System",
    description: "Developed an end-to-end AI system capable of generating instrumental audio from user prompts using MusicGen, supported by a Librosa and Random Forest ML pipeline for mood-driven genre prediction.",
    tech: ["Flask", "Machine Learning", "Librosa", "Random Forest"],
    github: "https://github.com/rakshit-pavagadhi/music-composition-system"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <PremiumCard key={idx} className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            
            <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 mt-auto">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-md hover:bg-white/10 cursor-pointer">
                <FaGithub /> GitHub
              </a>
            </div>
          </PremiumCard>
        ))}
      </div>
    </section>
  );
}