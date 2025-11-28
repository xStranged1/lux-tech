import React from 'react';
import { Phone } from 'lucide-react';

interface ContactoProps {
  darkMode: boolean;
}

export default function Contacto({ darkMode }: ContactoProps) {
  return (
    <section
      id="contacto"
      className={`py-24 border-t transition-colors duration-500 ${
        darkMode ? 'bg-slate-900 border-amber-500/20' : 'bg-gray-50 border-amber-500/30'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Phone className="w-16 h-16 text-amber-400 mx-auto mb-6" />
        <h3
          className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          ¿Listo para Iluminar tu Proyecto?
        </h3>
        <p
          className={`text-xl mb-10 leading-relaxed transition-colors duration-500 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Contáctanos y descubre cómo nuestras soluciones pueden transformar tus espacios
        </p>
        <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-10 py-4 rounded-lg text-lg font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-amber-500/30">
          Solicitar Cotización
        </button>
      </div>
    </section>
  );
}
