import React, { useState, useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import Loading from "./components/Loading";
import ParticleBackground from "./components/ParticleBackground";
import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <div
      className={`min-h-screen relative overflow-x-hidden transition-all duration-500 ${
        isDark ? "bg-black text-slate-300" : "bg-white text-slate-700"
      }`}
    >
      {isLoading && (
        <Loading onComplete={handleLoadingComplete} isDark={isDark} />
      )}

      <ParticleBackground isDark={isDark} />
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

      <div
        className={`transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Header isDark={isDark} />
        <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <Experience isDark={isDark} />
          <Projects isDark={isDark} />
          <Contact isDark={isDark} />
        </main>
      </div>
    </div>
  );
}

export default App;
