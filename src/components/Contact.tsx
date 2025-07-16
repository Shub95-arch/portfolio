import React from "react";

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <p
          className={`font-mono text-base mb-5 ${
            isDark ? "text-emerald-400" : "text-slate-600"
          }`}
        >
          04. What's Next?
        </p>

        <h2
          className={`text-4xl sm:text-5xl font-bold mb-6 ${
            isDark ? "text-slate-200" : "text-slate-900"
          }`}
        >
          Get In Touch
        </h2>

        <p
          className={`text-lg leading-relaxed mb-12 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          I'm currently open to new opportunities, collaborations, or exciting
          challenges. Whether you have a role in mind, a project to discuss, or
          just want to connect, feel free to reach out. I'll do my best to get
          back to you!
        </p>

        <a
          href="mailto:shubhamkr1177@gmail.com"
          className={`px-7 py-4 border rounded font-mono transition-all duration-200 transform hover:-translate-y-1 inline-block ${
            isDark
              ? "border-emerald-400 text-emerald-400 hover:bg-emerald-400/10"
              : "border-slate-600 text-slate-600 hover:bg-slate-100"
          }`}
        >
          Say Hello
        </a>

        <div className="mt-20 text-center">
          <p
            className={`font-mono text-sm ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Designed & Built by Shub
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
