import React from 'react';
import { Lightbulb } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`border-t py-16 transition-colors duration-500 ${
        darkMode
          ? 'bg-slate-950 border-amber-500/20 text-white'
          : 'bg-white border-amber-500/30 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Columna 1 - Logo */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Lightbulb className="w-8 h-8 text-amber-400" />
              <div>
                <h4 className="text-xl font-bold">LuminaTech</h4>
                <p className="text-xs text-amber-400/80">Iluminación Inteligente</p>
              </div>
            </div>
            <p
              className={`text-sm leading-relaxed transition-colors duration-500 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Transformando espacios con tecnología LED de última generación.
            </p>
          </div>

          {/* Columna 2 - Productos */}
          <div>
            <h5 className="font-semibold mb-4 text-amber-400">Productos</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Iluminación Comercial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Iluminación Industrial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Iluminación Exterior
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Empresa */}
          <div>
            <h5 className="font-semibold mb-4 text-amber-400">Empresa</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#nosotros"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Legal */}
          <div>
            <h5 className="font-semibold mb-4 text-amber-400">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Garantías
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t mt-12 pt-8 text-center transition-colors duration-500 ${
            darkMode ? 'border-amber-500/20' : 'border-amber-500/30'
          }`}
        >
          <p
            className={`text-sm transition-colors duration-500 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            &copy; 2024 LuminaTech. Todos los derechos reservados. | Iluminando el futuro
            con tecnología
          </p>
        </div>
      </div>
    </footer>
  );
}
