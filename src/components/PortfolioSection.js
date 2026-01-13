// src/components/PortfolioSection.js

import React from 'react';
import dashboardMockup from '../assets/images/dashboard_web_app.png'; // Ganti path gambar Anda
import mobileAppMockup from '../assets/images/mobile_app_landing.png';
import motionGraphicMockup from '../assets/images/motion_graphic_example.png';

const ProjectCard = ({ imageSrc, title, category }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-auto object-cover" 
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
  );
};

function PortfolioSection() {
  const projectsData = [
    { image: dashboardMockup, title: "Dashboard Web App", category: "UI/UX Design" },
    { image: mobileAppMockup, title: "Mobile App Landing", category: "Branding, UI/UX" },
    { image: motionGraphicMockup, title: "Motion Graphic", category: "Animation" },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-32">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
        Portfolio
      </h2>
      
      {/* Grid: 1 kolom di mobile, 3 di desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            imageSrc={project.image}
            title={project.title}
            category={project.category}
          />
        ))}
      </div>

    </section>
  );
}

export default PortfolioSection;