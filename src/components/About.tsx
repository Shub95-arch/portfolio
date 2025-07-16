import React, { useEffect, useRef, useState } from "react";
import { Code, Coffee, Headphones, Gamepad2 } from "lucide-react";
import { SiCyberdefenders } from "react-icons/si";

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const technologies = [
    "JavaScript",
    "React",
    "Node.js",
    "ExpressJs",
    "Python",
    "Machine Learning",
    "LLMs",
    "MongoDB",
    "MySQL",
    "AWS",
    "Google Cloud",
    "Penetration Testing",
  ];

  const interests = [
    { icon: Code, text: "Bug Huting" },
    { icon: Coffee, text: "Coffee Brewing" },
    { icon: Headphones, text: "Music" },
    { icon: Gamepad2, text: "Gaming" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20" ref={sectionRef}>
      <div className="max-w-4xl">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-10 flex items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } ${isDark ? "text-slate-200" : "text-slate-900"}`}
        >
          <span
            className={`font-mono text-xl mr-2 ${
              isDark ? "text-emerald-400" : "text-slate-600"
            }`}
          >
            01.
          </span>
          About Me
          <div
            className={`ml-8 h-px flex-1 max-w-xs ${
              isDark ? "bg-slate-600" : "bg-slate-300"
            }`}
          ></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div
            className={`md:col-span-2 space-y-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className={`leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              I love building things that are secure, scalable, and actually
              used. My journey started over 5 years ago in cybersecurity, and
              along the way, I picked up backend development and cloud
              deployment. Now, I focus on creating practical, real world tools.
            </p>

            <p
              className={`leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Fast-forward to today, and I've had the privilege of working
              independently and launching multiple{" "}
              <a
                href="#"
                className={`hover:underline transition-colors duration-200 relative group ${
                  isDark
                    ? "text-emerald-400 hover:text-blue-400"
                    : "text-slate-800 hover:text-slate-900"
                }`}
              >
                SaaS products.
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDark ? "bg-emerald-400" : "bg-slate-800"
                  }`}
                ></span>
              </a>{" "}
              <a
                href="#"
                className={`hover:underline transition-colors duration-200 relative group ${
                  isDark
                    ? "text-emerald-400 hover:text-blue-400"
                    : "text-slate-800 hover:text-slate-900"
                }`}
              >
                {/* a start-up */}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDark ? "bg-emerald-400" : "bg-slate-800"
                  }`}
                ></span>
              </a>
              {/* , and{" "} */}
              <a
                href="#"
                className={`hover:underline transition-colors duration-200 relative group ${
                  isDark
                    ? "text-emerald-400 hover:text-blue-400"
                    : "text-slate-800 hover:text-slate-900"
                }`}
              >
                {/* a huge corporation */}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isDark ? "bg-emerald-400" : "bg-slate-800"
                  }`}
                ></span>
              </a>
              My main focus these days is building real, user driven tools
              served over 1200 clients so far.
            </p>

            <p
              className={`leading-relaxed ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className={`flex items-center group ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  <span
                    className={`mr-2 transition-colors duration-200 ${
                      isDark
                        ? "text-emerald-400 group-hover:text-blue-400"
                        : "text-slate-600 group-hover:text-slate-800"
                    }`}
                  >
                    ▹
                  </span>
                  <span
                    className={`transition-colors duration-200 ${
                      isDark
                        ? "group-hover:text-emerald-400"
                        : "group-hover:text-slate-800"
                    }`}
                  >
                    {tech}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <p
                className={`leading-relaxed mb-4 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                When I'm not coding, you can find me:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group cursor-pointer"
                  >
                    <interest.icon
                      className={`w-5 h-5 transition-colors duration-200 ${
                        isDark
                          ? "text-emerald-400 group-hover:text-blue-400"
                          : "text-slate-600 group-hover:text-slate-800"
                      }`}
                    />
                    <span
                      className={`font-mono text-sm transition-colors duration-200 ${
                        isDark
                          ? "text-slate-400 group-hover:text-emerald-400"
                          : "text-slate-600 group-hover:text-slate-800"
                      }`}
                    >
                      {interest.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`relative group transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className={`relative z-10 rounded-lg p-8 border backdrop-blur-sm transition-all duration-300 ${
                isDark
                  ? "bg-emerald-400/10 border-emerald-400/20 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/20"
                  : "bg-slate-100/50 border-slate-300/50 group-hover:border-slate-400/60 group-hover:bg-slate-200/50"
              }`}
            >
              <div className="text-center mb-8">
                <div
                  className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isDark
                      ? "bg-gradient-to-br from-emerald-400 to-blue-400"
                      : "bg-gradient-to-br from-slate-600 to-slate-800"
                  }`}
                >
                  <Code
                    className={`w-12 h-12 ${
                      isDark ? "text-slate-900" : "text-white"
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-slate-200" : "text-slate-900"
                  }`}
                >
                  Full Stack Developer
                </h3>
                <p
                  className={`text-sm font-mono ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Passionate about creating digital experiences
                </p>
              </div>
              <div className="text-center">
                <div
                  className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isDark
                      ? "bg-gradient-to-br from-emerald-400 to-blue-400"
                      : "bg-gradient-to-br from-slate-600 to-slate-800"
                  }`}
                >
                  <SiCyberdefenders
                    className={`w-12 h-12 ${
                      isDark ? "text-slate-900" : "text-white"
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark ? "text-slate-200" : "text-slate-900"
                  }`}
                >
                  Cybersecurity Enthusiast
                </h3>
                <p
                  className={`text-sm font-mono ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Exploring cybersecurity and building resilient systems.
                </p>
              </div>
            </div>
            <div
              className={`absolute top-4 left-4 w-full h-full border-2 rounded-lg -z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 ${
                isDark ? "border-emerald-400/30" : "border-slate-400/30"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
