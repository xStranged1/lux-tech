import React from 'react';
import { Sparkles } from 'lucide-react';

interface SimuladorProps {
  darkMode: boolean;
}

export default function Simulador({ darkMode }: SimuladorProps) {
  return (
    <section
      id="simulador"
      className={`py-24 border-y transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 border-amber-500/20'
          : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 border-amber-500/30'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-6" />
        <h3
          className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Simulador de Iluminación
        </h3>
        <p
          className={`text-xl mb-8 leading-relaxed transition-colors duration-500 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Próximamente podrás visualizar cómo se verán nuestras soluciones en tu espacio, calcular ahorros energéticos y obtener una cotización personalizada en tiempo real.
        </p>
        <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 px-6 py-3 rounded-full text-lg font-medium">
          Disponible pronto
        </div>
      </div>
    </section>
  );
}
