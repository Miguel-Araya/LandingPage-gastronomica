import React, { useState } from 'react';

export const FormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setError(null);

    if (!name || !email) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setSubmitted(true);
    setName('');
    setEmail('');
  };

  return (
    <section id="unete" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          ¿Quieres conocer más recetas?
        </h1>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-semibold mb-2">¡Gracias por registrarte!</h3>
              <p className="text-gray-600">
                Pronto recibirás nuestras deliciosas recetas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
              </div>
              {error && (
                <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition hover:scale-105 hvr-grow"
                >
                  Registrarme
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
