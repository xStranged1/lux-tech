import React, { useState } from 'react';
import { Menu, X, Lightbulb } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LuminaTechHome({ darkMode, setDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`backdrop-blur-md border-b sticky top-0 z-50 transition-colors duration-500 ${darkMode ? 'bg-slate-900/80 border-amber-500/20' : 'bg-white/80 border-amber-500/30'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
            title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <div className="relative">
              <Lightbulb className={`w-8 h-8 transition-colors duration-500 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
              <div className={`absolute inset-0 blur-md transition-colors duration-500 ${darkMode ? 'bg-amber-400/50' : 'bg-amber-600/30'}`}></div>
            </div>
            <div>
              <h1 className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'}`}>LuminaTech</h1>
              <p className={`text-xs transition-colors duration-500 ${darkMode ? 'text-amber-400/80' : 'text-amber-600/80'}`}>Iluminación Inteligente</p>
            </div>
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className={`transition-colors duration-300 font-medium ${darkMode ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700 hover:text-amber-600'}`}>Inicio</a>
            <a href="#productos" className={`transition-colors duration-300 font-medium ${darkMode ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700 hover:text-amber-600'}`}>Productos</a>
            <a href="#simulador" className={`transition-colors duration-300 font-medium flex items-center ${darkMode ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700 hover:text-amber-600'}`}>
              Simulador
              <span className={`ml-1 text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-200 text-amber-700'}`}>Próximamente</span>
            </a>
            <a href="#nosotros" className={`transition-colors duration-300 font-medium ${darkMode ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700 hover:text-amber-600'}`}>Nosotros</a>
            <a href="#contacto" className={`transition-colors duration-300 font-medium ${darkMode ? 'text-gray-300 hover:text-amber-400' : 'text-gray-700 hover:text-amber-600'}`}>Contacto</a>
          </div>

          {/* Botón CTA Desktop */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-2.5 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 font-semibold shadow-lg shadow-amber-500/30">
              Cotizar Ahora
            </button>
          </div>

          {/* Hamburger Menu Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 hover:text-amber-400">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-amber-500/20 mt-2 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-300 hover:text-amber-400 py-2 transition-colors">Inicio</a>
              <a href="#productos" className="text-gray-300 hover:text-amber-400 py-2 transition-colors">Productos</a>
              <a href="#simulador" className="text-gray-300 hover:text-amber-400 py-2 transition-colors flex items-center">
                Simulador
                <span className="ml-2 text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">Próximamente</span>
              </a>
              <a href="#nosotros" className="text-gray-300 hover:text-amber-400 py-2 transition-colors">Nosotros</a>
              <a href="#contacto" className="text-gray-300 hover:text-amber-400 py-2 transition-colors">Contacto</a>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-2.5 rounded-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 font-semibold w-full mt-2">
                Cotizar Ahora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
