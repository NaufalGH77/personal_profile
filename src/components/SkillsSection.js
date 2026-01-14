// src/components/SkillsSection.js

import React from 'react';

const SkillCard = ({ icon, title, description, bgColor, iconColor, aosDelay }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay} className={`w-full max-w-xs mx-auto bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 ${bgColor} text-center`}>
      
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${iconColor}`}>
        <span className="text-xl">{icon}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

function SkillsSection() {
  const skillsData = [
    { icon: "🖌️", title: "UI/UX Design", description: "Creating intuitive and beautiful user interfaces and experiences.", bgColor: "bg-purple-50", iconColor: "bg-purple-200 text-purple-700" },
    { icon: "💻", title: "Frontend Dev", description: "Turning designs into high-performance, responsive web applications.", bgColor: "bg-blue-50", iconColor: "bg-blue-200 text-blue-700" },
    { icon: "💾", title: "Backend Dev", description: "Developing APIs, databases, and server logic to ensure reliable application performance.", bgColor: "bg-yellow-50", iconColor: "bg-yellow-200 text-yellow-700" },
    
  ];

  return (
    <section id="skills" className="py-16 md:py-32">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
        My Skills
      </h2>
      
      {/* Grid: 1 kolom di mobile, 2 di tablet (sm), 3 di desktop (md) */}
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            bgColor={skill.bgColor}
            iconColor={skill.iconColor}
            aosDelay={index * 120}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;