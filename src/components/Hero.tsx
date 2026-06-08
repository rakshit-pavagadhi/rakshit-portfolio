"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between pt-20 pb-10">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Rakshit Pavagadhi</span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-slate-300 h-10">
          <Typewriter />
        </div>

        <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
          Focused on engineering scalable MERN applications, integrating Agentic AI workflows, and deploying robust ML pipelines for cloud-ready systems.
        </p>

        <div className="flex gap-4 pt-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Rakshit_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg glass text-white hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <FaFileAlt size={20} /> View Resume
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 pt-8">
          {[
            { icon: FaGithub, href: "https://github.com/rakshit-pavagadhi" },
            { icon: FaLinkedin, href: "https://linkedin.com/in/rakshit-pavagadhi" },
            { icon: FaEnvelope, href: "mailto:rakshit080905@gmail.com" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Content - Profile Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex-1 flex justify-center mt-12 md:mt-0 relative"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-blue-500 to-cyan-400 animate-[spin_8s_linear_infinite]">
          <div className="absolute inset-1 bg-slate-950 rounded-full animate-[spin_8s_linear_infinite_reverse] flex items-center justify-center overflow-hidden border-4 border-transparent">
             <Image 
               src="/Rakshit Pavagadhi_photo.png" 
               alt="Rakshit Pavagadhi" 
               width={400} 
               height={400} 
               className="object-cover w-full h-full rounded-full"
               priority
             />
          </div>
        </div>
      </motion.div>
    </section>
  );
}