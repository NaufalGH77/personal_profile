// src/components/ContactSection.js

import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-32 bg-purple-50 font-poppins"> 
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          
          {/* Kolom Kiri: Info Kontak */}
          <div className="md:w-5/12 space-y-8 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Me</h2>
            
            <p className="text-gray-600 max-w-md mx-auto md:mx-0">
              Interested in connecting or have a project? Let's talk! Reach out to discuss your project and make something awesome together.
            </p>

            {/* Detail Kontak */}
            <div className="space-y-3 pt-6 text-gray-700">
              <p>📍 Surabaya, ID</p>
              <p>📧 naufalabdullahbaso@gmail.com</p>
              <p>📱 +62-838-5411-6846</p>
            </div>
            
            {/* Social Icons (dengan SVG) */}
            <div className="flex space-x-4 text-gray-500 justify-center md:justify-start pt-4">
                {/* GitHub */}
                <a href="https://github.com/NaufalGH77" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition w-6 h-6">
                    <svg xmlns="https://github.com/NaufalGH77" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.375 3.551 9.915 8.441 11.539.615.111.832-.266.832-.594 0-.293-.01-1.06-.015-2.071-3.488.76-4.212-1.688-4.212-1.688-.57-1.442-1.389-1.829-1.389-1.829-1.134-.775.087-.76.087-.76 1.25.088 1.908 1.283 1.908 1.283 1.109 1.908 2.905 1.357 3.613 1.037.112-.809.435-1.357.792-1.666-2.766-.314-5.672-1.383-5.672-6.155 0-1.357.485-2.467 1.282-3.332-.133-.314-.555-1.583.131-3.291 0 0 1.04-.334 3.414 1.272 1.011-.281 2.083-.42 3.15-.424 1.067.004 2.138.143 3.15.424 2.374-1.606 3.413-1.272 3.413-1.272.686 1.708.264 2.977.131 3.291.797.865 1.282 1.975 1.282 3.332 0 4.783-2.906 5.836-5.682 6.145.44.378.829 1.109.829 2.238 0 1.619-.015 2.92-.015 3.318 0 .329.215.71.836.592 4.887-1.626 8.439-6.216 8.439-11.537 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/naufal-abdullah-baso-8b17b9381/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition w-6 h-6">
                    <svg xmlns="https://www.linkedin.com/in/naufal-abdullah-baso-8b17b9381/" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.518-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                
                {/* Instagram */}
                <a href="https://www.instagram.com/nauf.ab" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition w-6 h-6">
                    <svg xmlns="https://www.instagram.com/nauf.ab" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.205 0 3.58.014 4.851.071 4.79.227 6.443 1.88 6.67 6.67.058 1.27.071 1.645.071 4.851s-.014 3.58-.071 4.851c-.227 4.79-1.88 6.443-6.67 6.67-1.27.058-1.645.071-4.851.071s-3.58-.014-4.851-.071c-4.79-.227-6.443-1.88-6.67-6.67-.058-1.27-.071-1.645-.071-4.851s.014-3.58.071-4.851c.227-4.79 1.88-6.443 6.67-6.67 1.27-.058 1.645-.071 4.851-.071zm0 2.23c-3.14 0-3.541.013-4.78.069-4.088.194-5.18 1.287-5.376 5.376-.056 1.239-.069 1.64-.069 4.78s.013 3.541.069 4.78c.196 4.088 1.287 5.18 5.376 5.376 1.239.056 1.64.069 4.78.069s3.541-.013 4.78-.069c4.088-.196 5.18-1.287 5.376-5.376.056-1.239.069-1.64.069-4.78s-.013-3.541-.069-4.78c-.196-4.088-1.287-5.18-5.376-5.376-1.239-.056-1.64-.069-4.78-.069zm0 2.404c-3.21 0-5.807 2.597-5.807 5.807s2.597 5.807 5.807 5.807 5.807-2.597 5.807-5.807-2.597-5.807-5.807-5.807zm0 2.23c2.08 0 3.577 1.497 3.577 3.577s-1.497 3.577-3.577 3.577-3.577-1.497-3.577-3.577 1.497-3.577 3.577-3.577zm6.657-3.951c0-.791.64-.891 1.431-.891s.891.071.891.891c0 .791-.64.891-1.431.891s-.891-.071-.891-.891z"/></svg>
                </a>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Kontak */}
          <div className="md:w-6/12 bg-white p-8 rounded-xl shadow-2xl">
            <form className="space-y-4">
              <input type="text" placeholder="Your name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"/>
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"/>
              <textarea placeholder="Message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;