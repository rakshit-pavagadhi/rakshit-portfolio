"use client";
import PremiumCard from "./PremiumCard";
import { FaExternalLinkAlt } from "react-icons/fa";

const certs = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    image: "/certificates/Supervised.png",
    link: "https://coursera.org/share/947c76a6ba83dbe5f31b9247bcc1a37f",
    color: "from-blue-500/20 to-cyan-500/5"
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "Coursera",
    image: "/certificates/Unsupervised.png",
    link: "https://coursera.org/share/6aeca00294f04fa17f3ee3d086100a7e",
    color: "from-orange-500/20 to-red-500/5"
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "Coursera",
    image: "/certificates/Advanced.png",
    link: "https://coursera.org/share/4a86fd015de15bef0ec3171d8a6ba84c",
    color: "from-purple-500/20 to-pink-500/5"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    image: "/certificates/Oracle.png",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CAEB39AF92074F516B82383BE5F196BD4F2DCACB7043F895F42AF8DB9F8F0BC7",
    color: "from-green-500/20 to-emerald-500/5"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 scroll-mt-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Certifications</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certs.map((cert, idx) => (
          <PremiumCard key={idx} className="flex flex-col h-full">
            <div className="h-96 rounded-lg mb-6 overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-contain p-2" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 leading-snug">{cert.title}</h3>
            <p className="text-cyan-400 text-sm font-medium mb-6 flex-grow">Issued by {cert.issuer}</p>
            
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold flex items-center justify-center gap-2 transition-colors mt-auto cursor-pointer">
              {cert.issuer === "Oracle" ? "View Badge" : "View Certificate"} <FaExternalLinkAlt size={12} />
            </a>
          </PremiumCard>
        ))}
      </div>
    </section>
  );
}