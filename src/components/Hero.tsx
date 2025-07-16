import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const fullText = "Hi, my name is";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i === 0) setHasStartedTyping(true);
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Cursor blinking effect
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 relative">
      <div className="max-w-4xl">
        <p
          className={`font-mono text-base sm:text-lg mb-5 transition-opacity duration-500 ${
            hasStartedTyping ? "animate-fade-in-up" : "opacity-0"
          } ${isDark ? "text-emerald-400" : "text-slate-600"}`}
        >
          {displayText}
          <span
            className={`${
              showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100`}
          >
            |
          </span>
        </p>

        <h1
          className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-2 animate-fade-in-up animation-delay-300 ${
            isDark ? "text-slate-200" : "text-slate-900"
          }`}
        >
          <span
            className={`bg-clip-text text-transparent transition-all duration-500 ${
              isDark
                ? "bg-gradient-to-r from-emerald-400 to-blue-400 hover:from-blue-400 hover:to-emerald-400"
                : "bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-900 hover:to-slate-700"
            }`}
          >
            Shubham.
          </span>
        </h1>

        <h2
          className={`text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-500 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          I build things for the web.
        </h2>

        <p
          className={`text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed animate-fade-in-up animation-delay-700 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          I'm a software engineer working at the intersection of development and
          cybersecurity. I'm especially drawn to projects that are practical,
          impactful, and{" "}
          <a
            href="#"
            className={`hover:underline transition-colors duration-200 relative group ${
              isDark
                ? "text-emerald-400 hover:text-blue-400"
                : "text-slate-800 hover:text-slate-900"
            }`}
          >
            @secure by design
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                isDark ? "bg-emerald-400" : "bg-slate-800"
              }`}
            ></span>
          </a>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1000">
          <button
            onClick={() => scrollToSection("projects")}
            className={`group px-7 py-4 border-2 rounded font-mono transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden ${
              isDark
                ? "border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 hover:shadow-emerald-400/25"
                : "border-slate-600 text-slate-600 hover:bg-slate-100 hover:shadow-slate-400/25"
            }`}
          >
            <span className="relative z-10">Check out my work!</span>
            <div
              className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                isDark ? "bg-emerald-400/5" : "bg-slate-100/50"
              }`}
            ></div>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`group px-7 py-4 border-2 border-transparent rounded font-mono transition-all duration-300 transform hover:-translate-y-1 ${
              isDark
                ? "bg-emerald-400/10 text-emerald-400 hover:border-emerald-400 hover:bg-transparent"
                : "bg-slate-100 text-slate-600 hover:border-slate-600 hover:bg-transparent"
            }`}
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown
            className={`w-6 h-6 ${
              isDark ? "text-emerald-400" : "text-slate-600"
            }`}
          />
        </div>

        {/* Social Links - Fixed Left Side */}
        <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-20 animate-fade-in-left animation-delay-1200">
          <a
            href="https://github.com/Shub95-arch"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:-translate-y-1 transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? "text-slate-400 hover:text-emerald-400"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/subham-kumar-a2932723a"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:-translate-y-1 transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? "text-slate-400 hover:text-emerald-400"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:shubhamkr1177@gmail.com"
            className={`hover:-translate-y-1 transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? "text-slate-400 hover:text-emerald-400"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Mail size={20} />
          </a>
          <div
            className={`w-px h-24 ${isDark ? "bg-slate-400" : "bg-slate-400"}`}
          ></div>
        </div>

        {/* Email - Fixed Right Side */}
        <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-20 animate-fade-in-right animation-delay-1200">
          <a
            href="mailto:shubhamkr1177@gmail.com"
            className={`font-mono text-sm tracking-widest hover:-translate-y-1 transition-all duration-300 transform hover:scale-105 ${
              isDark
                ? "text-slate-400 hover:text-emerald-400"
                : "text-slate-500 hover:text-slate-800"
            }`}
            style={{ writingMode: "vertical-rl" }}
          >
            shubhamkr1177@gmail.com
          </a>
          <div
            className={`w-px h-24 ${isDark ? "bg-slate-400" : "bg-slate-400"}`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
