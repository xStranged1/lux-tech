import React from 'react';
import { Lightbulb } from 'lucide-react';

interface NosotrosProps {
  darkMode: boolean;
}

export default function Nosotros({ darkMode }: NosotrosProps) {
  return (
    <section
      id="nosotros"
      className={`py-24 transition-colors duration-500 ${
        darkMode ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      {/* Nosotros Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3
              className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Innovación en Cada Luz
            </h3>
            <p
              className={`text-lg mb-6 leading-relaxed transition-colors duration-500 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              En LuminaTech, combinamos tecnología LED de vanguardia con diseño
              inteligente para crear soluciones de iluminación que no solo iluminan,
              sino que transforman espacios.
            </p>
            <p
              className={`text-lg leading-relaxed transition-colors duration-500 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Con años de experiencia en el sector, ayudamos a empresas e instituciones
              a reducir sus costos energéticos mientras mejoran la calidad de sus
              ambientes luminosos.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-video bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border border-amber-500/30 flex items-center justify-center">
              <div className="text-center">
                <Lightbulb className="w-24 h-24 text-amber-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Experiencia que Ilumina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
