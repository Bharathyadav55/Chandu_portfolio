import React from 'react';

export default function Resume() {
  const filmCredits = [
    {
      year: "2022",
      title: "Dream (but it's true)",
      type: "Short Film",
      role: "Lead Actor, Director, Writer & Screenplay",
      director: "Chandu Allamalla",
      notes: "Psychological drama examining blurred reality and dream states"
    },
    {
      year: "2022",
      title: "KGF (Cover Tribute)",
      type: "Visual Showcase",
      role: "Lead Performer, Director & Screenplay",
      director: "Chandu Allamalla",
      notes: "Action performance study focusing on screen presence & stylized blocking"
    },
    {
      year: "2020",
      title: "Brother",
      type: "Short Film (22 min)",
      role: "Lead Actor, Director, Writer & Screenplay",
      director: "Chandu Allamalla",
      notes: "Family emotional drama centering on filial sacrifice and resilience"
    }
  ];

  const educationAndTraining = [
    {
      period: "2020 – 2024",
      institution: "Kalasalingam University",
      qualification: "Bachelor of Technology (ECE)",
      details: "Analytical systems problem-solving, structured design logic, and technical production workflows."
    },
    {
      period: "2018 – 2020",
      institution: "Vignan Jr. College",
      qualification: "Intermediate in MPC",
      details: "Mathematics, Physics, Chemistry foundational training."
    },
    {
      period: "2017 – 2018",
      institution: "Bhashyam High School",
      qualification: "Secondary School Certificate",
      details: "Graduated with 8.7/10 GPA."
    }
  ];

  const physicalSkills = [
    "Martial Arts (Action Choreography Readiness)",
    "Horse Riding (Equestrian Handling)",
    "Swimming (Aquatic Performance)",
    "Physical Movement & Stunt Blocking"
  ];

  const languagesAndVoice = [
    "English (Unified International Olympiad Certified)",
    "Telugu (Native / Conversational Fluency)",
    "Hindi (Rashtrabhasha National Exam Certified)"
  ];

  return (
    <section id="resume" className="bg-[#12100e] text-neutral-200 py-24 sm:py-32 px-6 md:px-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header & Download Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-800/80">
          <div>
            <p className="font-mono text-xs tracking-[0.35em] text-amber-500/90 uppercase mb-3">
              | CURRICULUM VITAE |
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight">
              Performance & Production Resume
            </h2>
          </div>

          {/* Download Action targeting the file in public/ */}
          <a
            href="/Chandu_Resume.pdf"
            download="Chandu_Allamalla_CV.pdf"
            className="inline-flex items-center gap-3 border border-amber-500/60 bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-300 px-6 py-3 rounded-md text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 w-fit"
          >
            <span>↓ Download Full PDF</span>
          </a>
        </div>

        {/* 1. Quick Stats & Casting Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl bg-neutral-950 border border-neutral-800/80 mb-16 text-center md:text-left">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">Playing Age</span>
            <span className="font-serif text-lg text-white font-medium">20 – 28</span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">Height / Build</span>
            <span className="font-serif text-lg text-white font-medium">5'10" • Athletic</span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">Target Course</span>
            <span className="font-serif text-lg text-white font-medium">UK MA Film & TV</span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">Current Base</span>
            <span className="font-serif text-lg text-white font-medium">India (Open to Relocate)</span>
          </div>
        </div>

        {/* 2. Main Credits Table (Spotlight Industry Format) */}
        <div className="space-y-6 mb-20">
          <h3 className="font-serif text-2xl text-white font-normal flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            Screen Filmography & Directorial Works
          </h3>

          <div className="overflow-x-auto border border-neutral-800 rounded-xl bg-neutral-950/60">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/60 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                  <th className="py-4 px-6">Year</th>
                  <th className="py-4 px-6">Production Title</th>
                  <th className="py-4 px-6">Role / Responsibilities</th>
                  <th className="py-4 px-6">Director / Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 text-sm">
                {filmCredits.map((credit, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/30 transition-colors">
                    <td className="py-5 px-6 font-mono text-xs text-amber-400/90 whitespace-nowrap">
                      {credit.year}
                    </td>
                    <td className="py-5 px-6 font-serif text-base text-white">
                      {credit.title}
                      <span className="block font-sans text-xs text-neutral-400 font-light mt-0.5">
                        {credit.type}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-neutral-300 font-medium">
                      {credit.role}
                    </td>
                    <td className="py-5 px-6 text-neutral-400 font-light text-xs leading-relaxed">
                      {credit.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Two-Column Grid: Education & Special Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Education & Academic Discipline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl text-white font-normal flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              Academic Foundation & Training
            </h3>

            <div className="space-y-6">
              {educationAndTraining.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-neutral-950/40 border border-neutral-800/80 space-y-2">
                  <div className="flex justify-between items-baseline gap-4">
                    <h4 className="font-serif text-lg text-white">{edu.qualification}</h4>
                    <span className="font-mono text-xs text-amber-400">{edu.period}</span>
                  </div>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">{edu.institution}</p>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed pt-1">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Physical Performance & Languages */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-white font-normal flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                Physicality & Stunts
              </h3>
              <div className="p-6 rounded-xl bg-neutral-950/40 border border-neutral-800/80 space-y-3 text-sm text-neutral-300">
                {physicalSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-amber-400 text-xs">◆</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-white font-normal flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                Languages & Dialects
              </h3>
              <div className="p-6 rounded-xl bg-neutral-950/40 border border-neutral-800/80 space-y-3 text-sm text-neutral-300">
                {languagesAndVoice.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-amber-400 text-xs">◆</span>
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}