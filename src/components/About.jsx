import React from 'react';
import aboutImg from '../assets/About_ACS.png';

export default function About() {
  return (
    <section id="about" className="bg-[#12100e] text-neutral-200 py-24 sm:py-32 px-6 md:px-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Marker */}
        <p className="font-mono text-xs tracking-[0.35em] text-amber-500/90 uppercase mb-12 sm:mb-16">
          | ABOUT ME |
        </p>

        {/* Top Section: Framed Image + Editorial Bio + Accolades */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Framed Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950">
              <img 
                src={aboutImg} 
                alt="Chandu Allamalla - Actor & Filmmaker" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column: Bio Copy & Accolades */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.2] tracking-tight">
              Bridging technical discipline with authentic screen performance and visual storytelling.
            </h2>

            <div className="space-y-5 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                My artistic approach is anchored in bringing raw vulnerability, stillness, and calculated precision to each frame. Having performed across independent short films and editorial concept shoots, I see screen acting as an intimate dialogue between the performer’s instincts and the camera’s perspective.
              </p>
              
              <p>
                With a technical foundation in engineering and a relentless dedication to physical performance—including martial arts and equestrian discipline—I bring rigorous focus and spatial awareness to every set.
              </p>

              <p>
                My upcoming pursuit of the <span className="text-white font-normal">MA in Film and Television Production in the UK</span> is driven by an ambition to master both sides of the lens: unifying character performance with directorial craft, visual grammar, and narrative staging.
              </p>
            </div>

            
          </div>
        </div>

        {/* Bottom Section: 3-Column Training & Academic Cards */}
        <div className="mt-20 sm:mt-24 pt-16 border-t border-neutral-800/80 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1: Screen Acting & Performance */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Screen Performance & Voice
            </h3>
            <div className="text-xs font-mono text-neutral-400 space-y-1">
              <p>Location: Andhra Pradesh, India</p>
              <p>Focus Period: 2024 – Present</p>
            </div>
            <p className="text-neutral-400 text-sm font-light leading-relaxed pt-2">
              Extensive practical exploration across independent short films, on-camera scene blocking, character immersion, and dialogue delivery in English, Telugu, and Hindi.
            </p>
          </div>

          {/* Card 2: Physical Discipline */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Martial Arts & Movement
            </h3>
            <div className="text-xs font-mono text-neutral-400 space-y-1">
              <p>Disciplines: Martial Arts, Riding, Swimming</p>
              <p>Focus: Physicality & Stunt Readiness</p>
            </div>
            <p className="text-neutral-400 text-sm font-light leading-relaxed pt-2">
              Rigorous physical conditioning emphasizing martial arts precision, equestrian handling, and body control essential for demanding screen acting and stunt choreography.
            </p>
          </div>

          {/* Card 3: Academic & Production Foundation */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Engineering & Analysis
            </h3>
            <div className="text-xs font-mono text-neutral-400 space-y-1">
              <p>Kalasalingam University</p>
              <p>Graduation: 2024 (B.Tech ECE)</p>
            </div>
            <p className="text-neutral-400 text-sm font-light leading-relaxed pt-2">
              Rigorous engineering education providing analytical problem-solving and structured technical thinking, now serving as the backbone for prospective UK MA production studies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
