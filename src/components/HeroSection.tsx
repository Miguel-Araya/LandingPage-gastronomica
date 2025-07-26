import React, { useEffect } from 'react';

export const HeroSection = () => {
  useEffect(() => {
    const title = document.getElementById('hero-title');
    const subtitle = document.getElementById('hero-subtitle');
    const heroBtn = document.getElementById('hero-btn');

    setTimeout(() => {
      title?.classList.add('animate__animated', 'animate__fadeInDown');
      subtitle?.classList.add('animate__animated', 'animate__fadeInDown');
      if (heroBtn) {
        heroBtn.classList.add('animate__animated', 'animate__fadeInDown');

        // Cuando termine la animación fadeInDown, se inicia pulse
        heroBtn.addEventListener('animationend', () => {
          heroBtn.classList.remove('animate__fadeInDown');
          heroBtn.classList.add('animate__infinite', 'animate__pulse');
        }, { once: true }); // Se ejecuta solo una vez
      }
    }, 200);
  }, []);

  return (
    <section id="inicio" className="w-full min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-4xl w-full px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center gap-x-4">
        <div className="md:w-1/2 text-center md:text-center">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800"
          >
            Chicharrón de <span className="text-yellow-600">Queso</span>
          </h1>
          <h2
            id="hero-subtitle"
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-600"
          >
            Una delicia auténtica de Turrialba
          </h2>
          <a
            id="hero-btn"
            href="#ingredientes"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition hover:scale-105"
          >
            Descubre la receta
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg shadow-xl">
            <img
              src="../../assets/chicharron_queso.jpg"
              alt="Cubos de queso recubiertos de panela o tapa de dulce, mayormente conocidos como Chicharrón de queso en Turriaba. Se encuentra sobre un plato rosado"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
