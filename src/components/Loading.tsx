import React, { useEffect, useState } from "react";

interface LoadingProps {
  onComplete: () => void;
  isDark: boolean;
}

const Loading: React.FC<LoadingProps> = ({ onComplete, isDark }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const loadingTexts = [
    "Initializing...",
    "Loading components...",
    "Preparing portfolio...",
    "Almost ready...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const textIndex = Math.floor(progress / 25);
    if (textIndex < loadingTexts.length) {
      setCurrentText(loadingTexts[textIndex]);
    }
  }, [progress]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="text-center">
        <div className="mb-8">
          <div
            className={`w-16 h-16 border-2 border-t-transparent rounded-full animate-spin mx-auto mb-4 ${
              isDark ? "border-emerald-400" : "border-slate-600"
            }`}
          ></div>
          <div
            className={`font-mono text-2xl mb-2 ${
              isDark ? "text-emerald-400" : "text-slate-600"
            }`}
          >
            shub95-arch
          </div>
        </div>

        <div
          className={`w-64 h-1 rounded-full overflow-hidden mb-4 ${
            isDark ? "bg-slate-800" : "bg-slate-200"
          }`}
        >
          <div
            className={`h-full transition-all duration-300 ease-out ${
              isDark
                ? "bg-gradient-to-r from-emerald-400 to-blue-400"
                : "bg-gradient-to-r from-slate-600 to-slate-800"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p
          className={`font-mono text-sm ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {currentText}
        </p>
        <p
          className={`font-mono text-xs mt-2 ${
            isDark ? "text-emerald-400" : "text-slate-600"
          }`}
        >
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default Loading;
