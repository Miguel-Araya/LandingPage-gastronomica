import React, { useEffect, useRef } from 'react';

export const IngredientsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ingredientRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        
        titleRef.current?.classList.add('animate__animated', 'animate__fadeInDown');

        
        ingredientRefs.current.forEach((item) => {
          item?.classList.add('animate__animated', 'animate__fadeInUp');

          const text = item?.querySelector('.ingredient-text');
          text?.classList.add('animate__animated', 'animate__fadeInUp');
        });

        observer.unobserve(sectionRef.current!);
      }
    }, {
      threshold: 0.2
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const ingredients = [
    {
      name: 'Queso Turrialba',
      amount: '300g',
      image: '../../assets/queso_turrialba.jpg',
      description: 'Queso fresco artesanal con denominación de origen de Turrialba.',
      alt: 'Plato blanco lleno de varias rebanadas de queso blanco, rectangulares y de tamaño similar. El queso tiene pequeños orificios.'
    },
    {
      name: 'Tapa de dulce o panela',
      amount: '200g',
      image: '../../assets/tapa_dulce.jpeg',
      description: 'Endulzante natural tradicional de caña de azúcar.',
      alt: '2 tapas de dulce o panela colocadas una encima de otra. Ambas piezas están colocadas sobre una superficie de madera oscura'
    },
    {
      name: 'Agua',
      amount: '2 cucharadas',
      image: '../../assets/cuchara_agua.jpg',
      description: 'Para disolver la tapa de dulce.',
      alt: 'Cuchara de metal brillante y pulido que está inclinada hacia abajo. Desde el borde de la cuchara sale un chorro fino y continuo de agua.'
    },
    {
      name: 'Clavos de olor',
      amount: '2 unidades',
      image: '../../assets/clavos_olor.jpg',
      description: 'Especia aromática que aporta un sabor característico.',
      alt: 'Grupo de clavos de olor secos sobre un fondo blanco liso. Son de color marrón oscuro, con la parte superior bulbosa y la parte inferior más delgada.'
    }
  ];

  return (
    <section id="ingredientes" ref={sectionRef} className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-xl">
        <h1
          ref={titleRef}
          className="font-serif text-4xl font-bold text-center mb-16 text-gray-800 opacity-0"
        >
          Ingredientes
        </h1>
        <div className="flex flex-col space-y-16">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              ref={el => ingredientRefs.current[index] = el}
              className="flex flex-col items-center opacity-0"
            >
              <div className="w-56 h-56 rounded-full overflow-hidden mb-6 shadow-lg">
                <img src={ingredient.image} alt={ingredient.alt} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{ingredient.name}</h3>
              <p className="text-yellow-600 font-bold mb-4">{ingredient.amount}</p>
              <p className="ingredient-text text-center text-gray-600 opacity-0 leading-relaxed max-w-md">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
