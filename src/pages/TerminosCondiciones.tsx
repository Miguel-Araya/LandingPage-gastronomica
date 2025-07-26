import React from 'react';

const TerminosCondiciones = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
      <div className="max-w-3xl bg-white p-10 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Términos y Condiciones</h1>
        <p className="mb-4 text-justify">
          Bienvenido a nuestro sitio. Al utilizar nuestros servicios, aceptás los siguientes términos:
        </p>
        <ul className="list-disc list-inside space-y-2 text-justify">
          <li>El contenido es solo para uso informativo.</li>
          <li>No se permite el uso no autorizado del contenido.</li>
          <li>Nos reservamos el derecho de modificar estos términos en cualquier momento.</li>
        </ul>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
