"use client";
import PremiumCard from "./PremiumCard";
import { FaGraduationCap, FaCode, FaBriefcase, FaTrophy } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Me</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Column - Journey & Experience */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <PremiumCard>
            <h3 className="text-2xl font-bold text-white mb-6">My Background</h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Hey, I'm Rakshit — a Computer Engineering student at Pandit Deendayal Energy University (PDEU), graduating in 2027. I'm deeply passionate about bridging the gap between Full-Stack Development and Artificial Intelligence, and what really excites me is building intelligent systems that can automate complex workflows and scale efficiently.
              </p>
              <p>
                I thrive at the intersection of engineering and problem-solving. Whether it's architecting a robust backend, designing scalable systems, or exploring the latest in AI and machine learning, I bring both curiosity and a strong technical foundation to everything I work on.
              </p>
              <p>
                I actively sharpen my problem-solving skills through competitive programming in C++, because I believe writing clean, optimized code is the foundation of high-performance software. 
              </p>
              <p>
                Outside of code, I'm someone who genuinely loves the fast-paced energy of hackathons, the grind of learning something new, and the satisfaction of shipping something that works. I'm always looking for opportunities to grow, collaborate, and build things that actually make a difference.
              </p>
            </div>
          </PremiumCard>

          <PremiumCard>
             <div className="flex items-center gap-3 mb-6">
              <FaBriefcase className="text-blue-400 text-2xl" />
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>
            
            <div className="relative pl-6 border-l-2 border-slate-800">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <h4 className="text-xl font-bold text-white">Software Engineering Intern</h4>
              <p className="text-blue-400 font-medium text-sm mb-2">Infosys Springboard | Sept 2025 - Oct 2025</p>
              <ul className="list-disc pl-4 text-slate-400 space-y-2 text-sm leading-relaxed">
                <li>Developed an end-to-end AI-based music composition system generating instrumental audio from user prompts.</li>
                <li>Built a secure Flask backend with authentication, protected routes, and session handling.</li>
                <li>Implemented a machine learning pipeline using Librosa and Random Forest for mood-driven genre prediction.</li>
                <li>Designed a hybrid composition engine combining predicted genres with MusicGen prompts.</li>
              </ul>
            </div>
          </PremiumCard>
        </div>

        {/* Right Column - Education & Stats */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <PremiumCard>
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-cyan-400 text-2xl" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-2 text-slate-300">
              <h4 className="font-semibold text-lg text-white">Pandit Deendayal Energy University</h4>
              <p className="text-sm text-cyan-400">B.Tech in Computer Engineering</p>
              <div className="flex justify-between text-sm text-slate-400 pt-2">
                <span className="font-medium text-white bg-white/10 px-2 py-1 rounded">CGPA: 9.34 / 10</span>
                <span>2023 - 2027</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">Gandhinagar, Gujarat</p>
            </div>
          </PremiumCard>

          <PremiumCard>
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-cyan-400 text-2xl" />
              <h3 className="text-2xl font-bold text-white">Problem Solving</h3>
            </div>
            <div className="space-y-4">
              <a href="https://leetcode.com/u/_coding101_/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">LC</div>
                <div>
                  <h4 className="text-white font-medium group-hover:underline">LeetCode - Solved 180+ Problems</h4>
                </div>
              </a>
            </div>
          </PremiumCard>

          <PremiumCard>
            <div className="flex items-center gap-3 mb-6">
              <FaTrophy className="text-cyan-400 text-2xl" />
              <h3 className="text-2xl font-bold text-white">Hackathons & Competitions</h3>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <div>
                <h4 className="text-white font-semibold text-lg mb-2">🏆 1st Place – ANIRVEDA Breach Fintech Hackathon</h4>
                <p className="text-sm">700+ participants | Won Rs. 20,000</p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-2">Adani Ideathon 2024</h4>
                <p className="text-sm">Proposed 'Edu-Setu' to bridge the digital divide with AI-driven monitoring, online testing, and Learning Hubs. Integrated teacher training and workshops to align with SDG 4: Quality Education.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-2">🎖️ Finalist – ACM-W's SDG Ideathon 2024</h4>
                <p className="text-sm font-medium text-cyan-400 mb-1">Adani University</p>
                <p className="text-sm">Selected among 50+ teams from across India for presenting an innovative solution aligned with Sustainable Development Goals</p>
              </div>
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  );
}
