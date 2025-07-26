import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['ingredientes', 'preparacion', 'unete'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <>
      {/* Navbar desktop */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-100 shadow-md' : 'bg-gray-100/90'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo + nombre */}
            <div className="flex items-center space-x-3">
              <img
                src="../../assets/logo.png"
                alt="Muestra un tazón o cuenco de color azul visto de frente y con vapor elevándose de él, sugiriendo que contiene algo caliente o que se está cocinando."
                className="h-11 w-auto object-contain"
              />
              <a className="text-gray-800 font-bold text-xl">
                Sensación Aventurri
              </a>
            </div>

            {/* Enlaces */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <a
                  href="#inicio"
                  className={`px-3 py-2 font-medium ${activeSection === '' ? 'text-yellow-600 font-bold' : 'text-gray-800'} hover:text-gray-600`}
                  onClick={() => handleClick('')}
                >
                  Inicio
                </a>
                <a
                  href="#ingredientes"
                  className={`px-3 py-2 font-medium ${activeSection === 'ingredientes' ? 'text-yellow-600 font-bold' : 'text-gray-800'} hover:text-gray-600`}
                  onClick={() => handleClick('ingredientes')}
                >
                  Ingredientes
                </a>
                <a
                  href="#preparacion"
                  className={`px-3 py-2 font-medium ${activeSection === 'preparacion' ? 'text-yellow-600 font-bold' : 'text-gray-800'} hover:text-gray-600`}
                  onClick={() => handleClick('preparacion')}
                >
                  Preparación
                </a>
                <a
                  href="#unete"
                  className={`px-3 py-2 font-medium ${activeSection === 'unete' ? 'text-yellow-600 font-bold' : 'text-gray-800'} hover:text-gray-600`}
                  onClick={() => handleClick('unete')}
                >
                  Únete
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating button + mobile menu */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col items-end">
        {isOpen && (
          <div className="mb-2 flex flex-col items-end space-y-2 animate-fade-in-up">
            <a
              href="#inicio"
              onClick={() => handleClick('')}
              className={`px-4 py-2 rounded-lg shadow-md transition bg-white ${
                activeSection === '' ? 'text-yellow-600 font-bold' : 'text-gray-800 hover:text-yellow-600'
              }`}
            >
              Inicio
            </a>
            <a
              href="#ingredientes"
              onClick={() => handleClick('ingredientes')}
              className={`px-4 py-2 rounded-lg shadow-md transition bg-white ${
                activeSection === 'ingredientes' ? 'text-yellow-600 font-bold' : 'text-gray-800 hover:text-yellow-600'
              }`}
            >
              Ingredientes
            </a>
            <a
              href="#preparacion"
              onClick={() => handleClick('preparacion')}
              className={`px-4 py-2 rounded-lg shadow-md transition bg-white ${
                activeSection === 'preparacion' ? 'text-yellow-600 font-bold' : 'text-gray-800 hover:text-yellow-600'
              }`}
            >
              Preparación
            </a>
            <a
              href="#unete"
              onClick={() => handleClick('unete')}
              className={`px-4 py-2 rounded-lg shadow-md transition bg-white ${
                activeSection === 'unete' ? 'text-yellow-600' : 'text-gray-800 hover:text-yellow-600'
              }`}
            >
              Únete
            </a>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-yellow-600 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg focus:outline-none transition"
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
    </>
  );
};
