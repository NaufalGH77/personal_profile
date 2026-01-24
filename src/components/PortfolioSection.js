// src/components/PortfolioSection.js

import React, { useState, useEffect } from 'react';
import dashboardMockup from '../assets/images/EduPioneer.png'; // Ganti path gambar Anda
import mobileAppMockup from '../assets/images/Moodey.png';
import motionGraphicMockup from '../assets/images/ReLog.png';

const allProjectLink = 'https://drive.google.com/file/d/1KlhHmnDt_bNyS--vOIODo53Yz1p8CnWO/view?usp=sharing';

const ProjectCard = ({ imageSrc, title, category, onClick }) => {
  return (
    <button onClick={onClick} className="w-full text-left bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl focus:outline-none">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-auto object-cover" 
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </button>
  );
};

const projectsData = [
    { image: dashboardMockup, title: "EduPioneer", category: "UI/UX Design, Frontend, Backend", description: "A full-featured LMS web application with course management and progress tracking used for either student or teacher.", link: "https://edupioneer-frontend.vercel.app" },
    { image: mobileAppMockup, title: "Moodey", category: "UI/UX Design", description: "Figma responsive design for Website based music player called 'Moodey' with mood scroller for user to have playlist based on mood.", link: "https://www.figma.com/design/qhE9qz9Q42PS6w7ktL81qh/Naufal-Abdullah-Baso---Mini-Project-Moodey?node-id=0-1&t=CuMFnHcv1H5mf7N2-1" },
    { image: motionGraphicMockup, title: "ReLog", category: "Website, Frontend, Backend", description: "'ReLog' AKA Rental Logistic, used for renting or buying some logistic stuff like Forklift, Pallet, or transporting logistic.", link: "https://github.com/NaufalGH77/Relog.git" },
  ];

function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal} />

          <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden">
            <button onClick={closeModal} aria-label="Close" className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover" />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{selectedProject.category}</p>
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">View Project</a>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <a href={allProjectLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">see all project</a>
      </div>

    </section>
  );
}

export default PortfolioSection;