"use client";
import { useEffect, useState } from "react";

const titles = [
  "AI & ML Developer",
  "Python Specialist",
  "MERN Stack Developer",
  "Problem Solver"
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        setText(currentTitle.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setText(currentTitle.substring(0, text.length + 1));
        if (text.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold border-r-2 border-cyan-400 pr-1 animate-pulse-fast">
      {text}
    </span>
  );
}