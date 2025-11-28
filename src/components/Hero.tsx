import React from 'react';
import { ChevronRight, Sparkles, Lightbulb } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className={`relative text-white py-24 md:py-32 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-br from-gray-100 via-amber-50 to-gray-100'
      }`}
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
                Tecnología de Iluminación LED
              </span>
            </div>
            <h2
              className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-colors duration-500 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Ilumina tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Futuro
              </span>
            </h2>
            <p
              className={`text-xl md:text-2xl mb-8 leading-relaxed transition-colors duration-500 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Soluciones de iluminación inteligente que transforman espacios y reducen costos hasta un 70%
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-amber-500/30 flex items-center justify-center">
                Ver Productos
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-amber-500/50 text-amber-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-500/10 transition-all duration-300 flex items-center justify-center">
                <Sparkles className="mr-2 w-5 h-5" />
                Simulador (Próximamente)
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl backdrop-blur-sm border border-amber-500/30 flex items-center justify-center">
              <Lightbulb className="w-48 h-48 text-amber-400" strokeWidth={1} />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/0 via-amber-500/10 to-orange-500/20 rounded-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
