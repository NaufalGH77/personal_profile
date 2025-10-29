// src/components/SkillsSection.js

import React from 'react';

const SkillCard = ({ icon, title, description, bgColor, iconColor }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 ${bgColor} text-center`}>
      
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
    { icon: "💡", title: "Branding", description: "Developing cohesive brand identity and visual language.", bgColor: "bg-yellow-50", iconColor: "bg-yellow-200 text-yellow-700" },
    { icon: "⚡", title: "Motion Graphic", description: "Bringing life to static designs through smooth animations and motion.", bgColor: "bg-red-50", iconColor: "bg-red-200 text-red-700" },
  ];

  return (
    <section id="skills" className="py-16 md:py-32">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
        My Skills
      </h2>
      
      {/* Grid: 1 kolom di mobile, 2 di tablet (sm), 4 di desktop (md) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            bgColor={skill.bgColor}
            iconColor={skill.iconColor}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;