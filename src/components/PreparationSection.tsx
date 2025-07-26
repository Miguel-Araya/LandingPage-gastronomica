import React, { useEffect } from 'react';

const steps = [
  {
    step: 'Paso 1',
    description: 'Colocar tapa de dulce y agua en olla a fuego medio hasta formar miel espesa'
  },
  {
    step: 'Paso 2',
    description: 'Incorporar queso y clavos de olor a la miel caliente'
  },
  {
    step: 'Paso 3',
    description: 'Cocinar a fuego medio hasta consistencia firme'
  },
  {
    step: 'Paso 4',
    description: 'Continuar hasta que el queso se transforme en chicharrones'
  },
  {
    step: 'Paso 5',
    description: 'Dejar enfriar antes de servir'
  }
];

export const PreparationSection = () => {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    steps.forEach((_, index) => {
      const element = document.getElementById(`preparation-step-${index}`);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              element.classList.add('animate__animated');
              if (index % 2 === 0) {
                element.classList.add('animate__fadeInRight');
              } else {
                element.classList.add('animate__fadeInLeft');
              }
              element.classList.remove('opacity-0');
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section
      id="preparacion"
      className="py-24 md:py-36 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="container mx-auto px-4">
        <h1 className="font-[Lora] text-3xl md:text-4xl font-bold text-center mb-20 text-black">
          Preparación
        </h1>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              id={`preparation-step-${index}`}
              key={index}
              className="mb-32 flex items-start opacity-0"
            >
              <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="font-[Lora] text-xl font-semibold mb-3">{step.step}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
