import React, { useState } from 'react';
import card1 from '../assets/Card1_work.png';
import card2 from '../assets/Card2_work.jpeg';
import card3 from '../assets/Card3_work.jpeg';

const works = [
  {
    id: 1,
    year: "2020",
    title: "Brother",
    genre: "EMOTIONAL DRAMA",
    duration: "22 MIN",
    role: "Lead Actor, Director, Writer & Screenplay",
    description:
      "A deeply intimate emotional drama exploring the fragile bonds and unspoken sacrifices between an elder brother and sister. Authored from original script to screen, focusing on nuanced vulnerability, pacing, and organic family dynamics.",
    highlights: [
      "Original Screenplay, Direction & Lead Performance",
      "Character-Driven Narrative & Emotional Staging",
      "Complete Creative Direction & Editing Execution"
    ],
    image: card1,
    videoUrl: "https://www.youtube-nocookie.com/embed/xRgASnZiQbI"
  },
  {
    id: 2,
    year: "2022",
    title: "KGF (Cover Song)",
    genre: "ACTION / VISUAL TRIBUTE",
    duration: "4 MIN",
    role: "Lead Role, Direction & Screenplay",
    description:
      "A high-octane cinematic cover capturing commanding screen presence, stylized action choreography, and raw charisma. Designed to study large-scale visual pacing, aggressive color palettes, and intense character conviction.",
    highlights: [
      "Physical Stunt Choreography & Action Presence",
      "Dynamic Scene Blocking & Camera Movement",
      "Stylized Visual Tone & Rhythm Editing"
    ],
    image: card2,
    videoUrl: "https://www.youtube-nocookie.com/embed/afGYbRwpQF4"
  },
  {
    id: 3,
    year: "2022",
    title: "Dream (but it's true)",
    genre: "PSYCHOLOGICAL DRAMA",
    duration: "4 MIN",
    role: "Lead Actor, Director, Writer & Screenplay",
    description:
      "A psychological narrative dissecting the blurred boundaries between illusion and waking reality. Follows a protagonist who experiences a vivid reality only to confront the haunting awakening of a waking dream.",
    highlights: [
      "Concept Development, Script & Storyboarding",
      "Surreal Atmospheric Direction & Visual Tension",
      "Psychological Character Arc & Climax Staging"
    ],
    image: card3,
    videoUrl: "https://www.youtube-nocookie.com/embed/ogjjfSFrzf4"
  }
];

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="work" className="bg-[#0b0c10] text-neutral-200 py-24 sm:py-32 px-6 md:px-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Tagline & Main Editorial Header */}
        <div className="mb-20 sm:mb-28">
          <p className="font-mono text-xs tracking-[0.35em] text-amber-500/90 uppercase mb-4">
            | SELECTED WORKS |
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight max-w-xl">
              My Best Performances, Stories, and Roles
            </h2>
            <span className="font-serif text-3xl sm:text-5xl text-neutral-400 font-light tracking-widest">
              2020 – 2024
            </span>
          </div>
        </div>

        {/* Alternating Project Cards */}
        <div className="space-y-28 sm:space-y-36">
          {works.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div 
                key={item.id} 
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-12 lg:gap-20`}
              >
                {/* Left/Right Text Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  {/* Year Tag */}
                  <span className="font-mono text-xs text-neutral-400 tracking-widest">
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
                    {item.title}
                  </h3>

                  {/* Genre & Duration */}
                  <p className="font-mono text-xs tracking-[0.25em] text-amber-400/90 uppercase font-semibold">
                    {item.genre} | {item.duration}
                  </p>

                  {/* Credit Roles */}
                  <p className="text-sm font-medium text-neutral-300">
                    <span className="text-neutral-400 font-normal">Roles:</span> {item.role}
                  </p>

                  {/* Synopsis Description */}
                  <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights / Accolades Style */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-neutral-300">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Watch Video Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => setSelectedVideo(item.videoUrl)}
                      className="inline-flex items-center gap-3 border border-neutral-700 hover:border-amber-400 bg-neutral-900/60 hover:bg-neutral-900 px-6 py-3 rounded-md text-xs font-mono uppercase tracking-[0.2em] text-white hover:text-amber-300 transition-all duration-300"
                    >
                      <span>▶ Watch Film</span>
                    </button>
                  </div>
                </div>

                {/* Left/Right Framed Vertical Poster Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div 
                    onClick={() => setSelectedVideo(item.videoUrl)}
                    className="group relative cursor-pointer w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 transition-all duration-500 hover:border-neutral-600"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 bg-black/70 border border-neutral-700 rounded-full flex items-center justify-center text-amber-400 text-xl group-hover:scale-110 transition-transform">
                        ▶
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-4xl aspect-video bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 bg-neutral-900/90 text-white hover:text-amber-400 border border-neutral-700 rounded-full w-10 h-10 flex items-center justify-center font-bold transition"
              aria-label="Close Player"
            >
              ✕
            </button>
            <iframe 
              src={`${selectedVideo}?autoplay=1`} 
              className="w-full h-full" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              title="Project Video Player"
            />
          </div>
        </div>
      )}
    </section>
  );
}