import React from 'react';
// import homeImg from '../assets/ACS_Home.jpg';
import homeImg from "../assets/ACS_Home.png"; // Ensure the path is correct based on your project structure

export default function Home() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* 100% Natural Image without any dark overlays or gradients */}
      <img 
        src={homeImg} 
        alt="Chandu - Actor Portfolio" 
        className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
      />

      {/* Editorial Name & Headline at Bottom Right */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-12 pb-12 sm:pb-16 flex flex-col justify-end items-end pointer-events-none">
        <div className="max-w-xl space-y-3 text-right">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.9] text-black uppercase drop-shadow-md">
            Chandu
            <span className="block font-serif font-light text-black">
                Allamalla
            </span>
            </h1>

            <p className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-black font-medium pt-2 drop-shadow">
            Actor • Performer • Filmmaker
            </p>
        </div>
        </div>
    </section>
  );
}