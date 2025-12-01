import React, { useState } from 'react';
import { Lightbulb, ChevronRight, X } from 'lucide-react';
import IluminacionComercial from '../components/IluminacionComercial';
import IluminacionIndustrial from '../components/IluminacionIndustrial';
import IluminacionExterior from '../components/IluminacionExterior';

interface ProductosProps {
  darkMode: boolean;
}

type SeccionActiva = 'comercial' | 'industrial' | 'exterior' | null;

export default function Productos({ darkMode }: ProductosProps) {
  const [seccionActiva, setSeccionActiva] = useState<SeccionActiva>(null);

  const productos = [
    { 
      id: 'comercial' as const,
      name: 'Iluminación Comercial', 
      desc: 'Sistemas LED para oficinas, comercios y espacios corporativos',
      color: 'amber'
    },
    { 
      id: 'industrial' as const,
      name: 'Iluminación Industrial', 
      desc: 'Soluciones robustas para fábricas, almacenes y naves',
      color: 'blue'
    },
    { 
      id: 'exterior' as const,
      name: 'Iluminación Exterior', 
      desc: 'Luminarias para espacios públicos, calles y fachadas',
      color: 'purple'
    },
  ];

  const getColorClasses = (color: string, darkMode: boolean) => {
    const colors = {
      amber: {
        border: darkMode ? 'border-amber-500/20 hover:border-amber-500/50' : 'border-amber-500/30 hover:border-amber-500/60',
        shadow: darkMode ? 'hover:shadow-amber-500/10' : '',
        text: 'text-amber-400',
        bg: 'from-amber-500/20 to-orange-500/20'
      },
      blue: {
        border: darkMode ? 'border-blue-500/20 hover:border-blue-500/50' : 'border-blue-500/30 hover:border-blue-500/60',
        shadow: darkMode ? 'hover:shadow-blue-500/10' : '',
        text: 'text-blue-400',
        bg: 'from-blue-500/20 to-cyan-500/20'
      },
      purple: {
        border: darkMode ? 'border-purple-500/20 hover:border-purple-500/50' : 'border-purple-500/30 hover:border-purple-500/60',
        shadow: darkMode ? 'hover:shadow-purple-500/10' : '',
        text: 'text-purple-400',
        bg: 'from-purple-500/20 to-pink-500/20'
      }
    };
    return colors[color as keyof typeof colors];
  };

  // Si hay una sección activa, mostrar el componente correspondiente
  if (seccionActiva === 'comercial') {
    return (
      <div className="relative">
        <button
          onClick={() => setSeccionActiva(null)}
          className={`fixed top-24 right-8 z-50 p-3 rounded-full transition-all duration-300 ${
            darkMode 
              ? 'bg-slate-800 hover:bg-slate-700 text-white' 
              : 'bg-white hover:bg-gray-100 text-slate-900 shadow-lg'
          }`}
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>
        <IluminacionComercial darkMode={darkMode} />
      </div>
    );
  }

  if (seccionActiva === 'industrial') {
    return (
      <div className="relative">
        <button
          onClick={() => setSeccionActiva(null)}
          className={`fixed top-24 right-8 z-50 p-3 rounded-full transition-all duration-300 ${
            darkMode 
              ? 'bg-slate-800 hover:bg-slate-700 text-white' 
              : 'bg-white hover:bg-gray-100 text-slate-900 shadow-lg'
          }`}
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>
        <IluminacionIndustrial darkMode={darkMode} />
      </div>
    );
  }

  if (seccionActiva === 'exterior') {
    return (
      <div className="relative">
        <button
          onClick={() => setSeccionActiva(null)}
          className={`fixed top-24 right-8 z-50 p-3 rounded-full transition-all duration-300 ${
            darkMode 
              ? 'bg-slate-800 hover:bg-slate-700 text-white' 
              : 'bg-white hover:bg-gray-100 text-slate-900 shadow-lg'
          }`}
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>
        <IluminacionExterior darkMode={darkMode} />
      </div>
    );
  }

  // Vista principal con las 3 tarjetas
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
          {productos.map((item) => {
            const colorClasses = getColorClasses(item.color, darkMode);
            
            return (
              <div
                key={item.id}
                className={`group rounded-2xl p-8 transition-all duration-300 ${
                  darkMode
                    ? `bg-slate-900 border ${colorClasses.border} hover:shadow-xl ${colorClasses.shadow}`
                    : `bg-white border ${colorClasses.border} shadow-lg hover:shadow-xl`
                }`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${colorClasses.bg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Lightbulb className={`w-7 h-7 ${colorClasses.text}`} />
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
                <button 
                  onClick={() => setSeccionActiva(item.id)}
                  className={`${colorClasses.text} font-semibold flex items-center group-hover:gap-2 transition-all`}
                >
                  Ver más
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}