import React from 'react';

const PoliticasPrivacidad = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
      <div className="max-w-3xl bg-white p-10 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Políticas de Privacidad</h1>
        <p className="mb-4 text-justify">
          Tu privacidad es importante para nosotros. Esta política describe cómo recopilamos y usamos tu información:
        </p>
        <ul className="list-disc list-inside space-y-2 text-justify">
          <li>Recopilamos tu nombre y correo para enviarte contenido relevante.</li>
          <li>No compartimos tu información con terceros.</li>
          <li>Podés solicitar la eliminación de tus datos en cualquier momento.</li>
        </ul>
      </div>
    </div>
  );
};

export default PoliticasPrivacidad;
