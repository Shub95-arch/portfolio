import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full border-2 transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
        isDark 
          ? 'bg-black/80 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/25' 
          : 'bg-white/80 border-slate-400/50 text-slate-600 hover:bg-slate-100 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-400/25'
      } backdrop-blur-md`}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 transition-all duration-500 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`} 
          size={24} 
        />
        <Moon 
          className={`absolute inset-0 transition-all duration-500 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`} 
          size={24} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;