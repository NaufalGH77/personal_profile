// src/components/AboutSection.js

import React from 'react';
import profileAbout from '../assets/images/profile_about.png'; // Ganti path gambar Anda

function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-32">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
        About Me
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Kolom Kiri: Gambar Profil */}
        <div className="md:w-1/2 flex justify-center md:justify-start order-1">
          <img 
            src={profileAbout} 
            alt="About Profile" 
            className="w-full max-w-sm rounded-2xl shadow-xl object-cover transform hover:scale-[1.02] transition duration-500" 
          />
        </div>
        
        {/* Kolom Kanan: Deskripsi & Skills Tag */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left order-2">
          
          <h3 className="text-2xl font-semibold text-gray-800">
            Hi, I'm Naufal, a passionate designer and frontend developer
          </h3>
          
          <p className="text-gray-500">
            A 20 year old human. I love creating engaging, beautiful, functional, and user-centered interfaces. I started my journey in graphic design but quickly fell in love with coding and turning my designs into interactive digital products.
          </p>
          
          {/* Skills Tag / Badges */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full">UI/UX Design</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">Web Development</span>
            <span className="bg-pink-100 text-pink-800 text-sm font-medium px-4 py-2 rounded-full">Branding</span>
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">Motion Graphic</span>
          </div>

          <div className="pt-6">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;