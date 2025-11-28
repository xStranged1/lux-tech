import React from 'react';
import { Lightbulb, ChevronRight } from 'lucide-react';

interface ProductosProps {
  darkMode: boolean;
}

export default function Productos({ darkMode }: ProductosProps) {
  const productos = [
    { name: 'Iluminación Comercial', desc: 'Sistemas LED para oficinas, comercios y espacios corporativos' },
    { name: 'Iluminación Industrial', desc: 'Soluciones robustas para fábricas, almacenes y naves' },
    { name: 'Iluminación Exterior', desc: 'Luminarias para espacios públicos, calles y fachadas' },
  ];

  return (
    <section
      id="productos"
      className={`py-24 transition-colors duration-500 ${
        darkMode ? 'bg-slate-950' : 'bg-gray-50'
      }`}
    >
      {/* Productos Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Nuestros Productos
          </h3>
          <p
            className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Soluciones de iluminación LED de última generación para cada necesidad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {productos.map((item, i) => (
            <div
              key={i}
              className={`group rounded-2xl p-8 transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900 border border-amber-500/20 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10'
                  : 'bg-white border border-amber-500/30 hover:border-amber-500/60 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-7 h-7 text-amber-400" />
              </div>
              <h4
                className={`text-2xl font-semibold mb-3 transition-colors duration-500 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {item.name}
              </h4>
              <p
                className={`leading-relaxed mb-6 transition-colors duration-500 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {item.desc}
              </p>
              <button className="text-amber-400 font-semibold flex items-center group-hover:gap-2 transition-all">
                Ver más
                <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
