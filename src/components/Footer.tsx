import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

//*******************NOTA***************

// Como tal la libreria que estoy utilizando no admite "alt" para los logos de facebook, instagram y twitter (Ahora X), pero
// utilice un aria-label para lectores de pantalla para describir los iconos de las redes sociales

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="/terminos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 hover:underline transition-all"
            >
              Términos y condiciones
            </a>
          </div>

          <div className="mb-6 md:mb-0">
            <a
              href="/privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 hover:underline transition-all"
            >
              Políticas de privacidad
            </a>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <div className="text-center md:text-left">
              <img
                src="../../assets/logo_don_pepe.png"
                alt="Logotipo de un oso o un animal similar. Es una cabeza circular de color marrón claro. Tiene dos orejas circulares más pequeñas del mismo color que la cabeza. Los ojos son dos círculos pequeños de color negro. La boca es un cuadrado de color negro"
                className="mx-auto md:mx-0 mb-2 h-12 w-auto object-contain"
              />
              <p className="font-medium text-gray-800 mb-2">Don Pepe</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Logo de Facebook: una letra 'f' minúscula blanca"
                  className="text-gray-600 hover:text-yellow-500 transition-all"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Logo de Instagram: un ícono cuadrado con bordes redondeados que representa una cámara simplificada"
                  className="text-gray-600 hover:text-yellow-500 transition-all"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Logo de Twitter: un pájaro blanco volando hacia arriba."
                  className="text-gray-600 hover:text-yellow-500 transition-all"
                >
                  <TwitterIcon size={20} />
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <img
                src="../../assets/logo_el_guche.png"
                alt="Es un trozo de queso con estilo de caricatura. Tiene una forma irregular. El color es un verde claro. Dentro de la forma verde, hay orificios de forma ovalada, con un contorno negro."
                className="mx-auto md:mx-0 mb-2 h-12 w-auto object-contain"
              />
              <p className="font-medium text-gray-800 mb-2">elguche.com</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Logo de Facebook: una letra 'f' minúscula blanca"
                  className="text-gray-600 hover:text-yellow-500 transition-all"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Logo de Instagram: un ícono cuadrado con bordes redondeados que representa una cámara simplificada"
                  className="text-gray-600 hover:text-yellow-500 transition-all"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Logo de Twitter: un pájaro blanco volando hacia arriba."
                  className="text-gray-600 hover:text-yellow-500 transition-all"
                >
                  <TwitterIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sensación Aventurri. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
