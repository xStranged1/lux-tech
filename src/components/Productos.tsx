import React from 'react';
import { Lightbulb } from 'lucide-react';
import CatalogoProductos from '../components/CatalogoProductos';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useLocation } from 'wouter';

const opciones = [
  { id: 'comercial', name: 'Iluminación Comercial', color: 'amber', path: '/lux-tech/productos/comercial' },
  { id: 'industrial', name: 'Iluminación Industrial', color: 'blue', path: '/lux-tech/productos/industrial' },
  { id: 'exterior', name: 'Iluminación Exterior', color: 'purple', path: '/lux-tech/productos/exterior' },
];

export default function Productos() {
  const { darkMode } = useDarkMode();
  const [, navigate] = useLocation();
  // Destaca la pestaña solo si ya está en esa ruta: no necesario, sólo navegación

  const getColorClasses = (color: string, darkMode: boolean) => {
    const base = 'border';
    const colorTheme: Record<string, any> = {
      amber: {
        border: darkMode ? 'border-amber-400' : 'border-amber-300',
        bg: darkMode ? 'bg-slate-900' : 'bg-white',
        text: darkMode ? 'text-amber-400' : 'text-amber-700'
      },
      blue: {
        border: darkMode ? 'border-blue-400' : 'border-blue-300',
        bg: darkMode ? 'bg-slate-900' : 'bg-white',
        text: darkMode ? 'text-blue-400' : 'text-blue-700'
      },
      purple: {
        border: darkMode ? 'border-purple-400' : 'border-purple-300',
        bg: darkMode ? 'bg-slate-900' : 'bg-white',
        text: darkMode ? 'text-purple-400' : 'text-purple-700'
      }
    };
    const c = colorTheme[color] || colorTheme['amber'];
    return `${base} ${c.border} ${c.bg} ${c.text}`;
  };

  return (
    <section
      id="productos"
      className={`py-8 transition-colors duration-500 ${darkMode ? 'bg-slate-950' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Productos & Catálogo
          </h3>
          <p
            className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Explora cada solución arriba y navega el catálogo completo debajo.
          </p>
        </div>
        {/* Tabs de opciones arriba */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {opciones.map((op) => (
            <button
              key={op.id}
              onClick={() => navigate(op.path)}
              className={`group rounded-2xl p-8 focus:outline-none transition-all duration-300 cursor-pointer ${getColorClasses(op.color, darkMode)}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl mb-6">
                <Lightbulb className="w-7 h-7 text-amber-400" />
              </div>
              <h4 className={`text-2xl font-semibold mb-3 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{op.name}</h4>
            </button>
          ))}
        </div>
        {/* Catálogo siempre visible, independiente */}
        <CatalogoProductos darkMode={darkMode} />
      </div>
    </section>
  );
}