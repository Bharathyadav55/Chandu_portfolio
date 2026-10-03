import React from 'react';

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#0b0c10] text-neutral-200 border-t border-neutral-900">
      
      {/* 1. Top Section: Two-Column Endorsements / Testimonials */}
      <div className="bg-[#12100e] py-20 px-6 md:px-12 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Testimonial 1 */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white font-normal">
              A Dedicated Screen Presence!
            </h3>
            <blockquote className="text-neutral-400 text-sm sm:text-base leading-relaxed italic font-light">
              "Working with Chandu across independent productions highlighted his instinct for emotional truth and physical conviction. Whether on-camera or shaping scene rhythm behind the scenes, he brings relentless discipline and quiet intensity to every take."
            </blockquote>
            <p className="font-mono text-xs tracking-[0.25em] text-neutral-400 uppercase pt-2">
              — INDEPENDENT CREATIVE COLLABORATOR
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white font-normal">
              Disciplined, Focused & Versatile.
            </h3>
            <blockquote className="text-neutral-400 text-sm sm:text-base leading-relaxed italic font-light">
              "Chandu's engineering background gives him a rare structured focus on set, while his martial arts and physicality allow him to execute demanding blocking with total spatial control. He is genuinely primed for advanced screen direction."
            </blockquote>
            <p className="font-mono text-xs tracking-[0.25em] text-neutral-400 uppercase pt-2">
              — PRODUCTION ASSOCIATE
            </p>
          </div>

        </div>
      </div>

      {/* 2. Bottom Section: Main Contact CTA & Details */}
      <div className="py-24 sm:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Headline, Subtitle & Quick Footer Links */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.1]">
              Available for Screen Roles & Collaborative Productions
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-lg font-light leading-relaxed">
              Available for independent films, character roles, and creative projects. Preparing for postgraduate research and MA Film & Television Production in the UK.
            </p>

            {/* Quick Anchor Navigation */}
            <div className="pt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase border-t border-neutral-900">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#work" className="hover:text-white transition-colors">Filmography</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Right Column: Contact Details & "Write Me" Action */}
          <div className="lg:col-span-5 flex flex-col lg:items-end justify-between space-y-8">
            <div className="space-y-6 text-left lg:text-right">
              
              {/* Academic & Casting Location */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-amber-500/90 uppercase mb-1">
                  Location & Availability
                </p>
                <p className="text-white text-sm font-medium">
                  Andhra Pradesh, India • Open for UK & International Projects
                </p>
              </div>

              {/* Direct Personal Contacts */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-amber-500/90 uppercase mb-1">
                  Direct Inquiries
                </p>
                <p className="text-neutral-200 text-sm">
                  <a href="tel:+917569234549" className="hover:text-amber-400 transition-colors">
                    +91 75692 34549
                  </a>
                  {" • "}
                  <a href="mailto:chandhusrinivas67@gmail.com" className="hover:text-amber-400 transition-colors">
                    chandhusrinivas67@gmail.com
                  </a>
                </p>
              </div>

            </div>

            {/* Outlined "Write Me" Button */}
            <div className="pt-2">
              <a
                href="mailto:chandhusrinivas67@gmail.com?subject=Film%20Inquiry%20-%20Chandu%20Allamalla"
                className="inline-block border border-neutral-600 hover:border-white px-8 py-3 text-xs font-mono tracking-[0.25em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Write Me
              </a>
            </div>

          </div>

        </div>

        {/* Copyright notice */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Chandu Allamalla. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono text-[11px]">Screen Actor • Director • MA Applicant</p>
        </div>
      </div>

    </footer>
  );
}