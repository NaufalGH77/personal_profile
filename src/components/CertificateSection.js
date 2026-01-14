// src/components/CertificateSection.js

import React, { useState, useEffect, useRef } from 'react';
import cert1 from '../assets/images/Internship Certificate.jpg';
import cert2 from '../assets/images/Figma Certificate.jpg';
import cert3 from '../assets/images/AWS Certificate.jpg';

const CertCard = ({ imageSrc, title, issuer, date, onClick }) => {
  return (
    <button onClick={onClick} className="w-full text-left bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl focus:outline-none">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{issuer} • <span className="text-xs">{date}</span></p>
      </div>
    </button>
  );
};

function CertificateSection() {
  const certificates = [
    { image: cert1, title: 'CERTIFICATE OF INTERNSHIP', issuer: 'PT Mitra Talenta Grup (Celerates)', date: 'December 2025', description: 'Completed Bootcamp in PT Mitra Talenta Grup (Celerates) focusing on Web Development and UI/UX Design', link: 'https://drive.google.com/file/d/1jWFZHXiEH5AY02BBWyAyMmrSDW6dksdV/view?usp=sharing' },
    { image: cert2, title: 'CERTIFICATE FIGMA CAMP B4', issuer: 'Ousean Indonesia', date: 'July 2025', description: 'Completed the UI/UX Design Training Program with Figma held by Figma Camp and Ousean Indonesia', link: 'https://drive.google.com/file/d/1gzJOpD3vNd6mA960oWBwlZPKtpx06JZc/view?usp=sharing' },
    { image: cert3, title: 'AWS CERTIFICATE', issuer: 'Amazon Web Services', date: 'May 2024', description: 'Completed Cloud Essentials Knowledge course from Amazon Web Services', link: 'https://drive.google.com/file/d/1PjgxN2fTP4DqcaQ6SAjZbQF0qKhILXIh/view?usp=sharing' },
  ];


  const allCertificatesLink = 'https://drive.google.com/drive/folders/1n-v1QRl2ZngzBmwzpJzzq4YEfuWeSM-v?usp=sharing';
  const [selectedCert, setSelectedCert] = useState(null);
  const closeBtnRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const openModal = (cert) => {
    lastFocusedRef.current = document.activeElement;
    setSelectedCert(cert);
  };
  const closeModal = () => setSelectedCert(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = '';
      setTimeout(() => lastFocusedRef.current?.focus?.(), 0);
    }
  }, [selectedCert]);

  return (
    <section id="certificates" style={{ scrollMarginTop: '72px' }} className="py-16 md:py-32">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">Certificates</h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert, i) => (
          <CertCard
            key={i}
            imageSrc={cert.image}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            onClick={() => openModal(cert)}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href={allCertificatesLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">see all certificate</a>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal} />

          <div role="dialog" aria-modal="true" aria-labelledby="cert-modal-title" aria-describedby="cert-modal-desc" className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden">
            <button ref={closeBtnRef} onClick={closeModal} aria-label="Close" className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-64 object-cover" />

            <div className="p-6">
              <h3 id="cert-modal-title" className="text-2xl font-semibold mb-2">{selectedCert.title}</h3>
              <p id="cert-modal-desc" className="text-sm text-gray-500 mb-4">{selectedCert.issuer} • <span className="text-xs">{selectedCert.date}</span></p>
              <p className="text-gray-700 mb-6">{selectedCert.description}</p>
              {selectedCert.link && (
                <a href={selectedCert.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">View Certificate</a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificateSection;
