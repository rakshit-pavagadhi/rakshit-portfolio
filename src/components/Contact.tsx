"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <h2 className="text-4xl font-bold text-center mb-4">
        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Connect</span>
      </h2>
      <p className="text-slate-400 text-center mb-12">Connect with me through my channels or drop an email.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
        {[
          { name: "GitHub", icon: FaGithub, href: "https://github.com/rakshit-pavagadhi" },
          { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/rakshit-pavagadhi" },
          { name: "Resume", icon: FaFileAlt, href: "/Rakshit_Resume.pdf" },
          { name: "Email", icon: FaEnvelope, href: "mailto:rakshit080905@gmail.com" }
        ].map((item, idx) => (
          <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="group relative rounded-xl glass p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-blue-500/30 cursor-pointer">
            <item.icon className="text-4xl text-slate-400 group-hover:text-cyan-400 transition-colors" />
            <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{item.name}</span>
          </a>
        ))}
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 max-w-4xl mx-auto">
        <p>Software Engineer focused on AI Workflows and Full-Stack Systems.</p>
        <p>© {new Date().getFullYear()} Deployed by Rakshit Pavagadhi</p>
      </div>
    </section>
  );
}