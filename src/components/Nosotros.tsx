import React from 'react';
import { Lightbulb } from 'lucide-react';
import fedeImg from '../media/fede.png';
import gonzaImg from '../media/gonza.png';
import salaImg from '../media/sala.png';
import lucioImg from '../media/lucio.png';

interface NosotrosProps {
  darkMode: boolean;
}

export default function Nosotros({ darkMode }: NosotrosProps) {
  const team = [
    {
      name: 'Federico Valle',
      role: 'Investigación I+D',
      image: fedeImg
    },
    {
      name: 'Gonzalo Pérez',
      role: 'Director Ejecutivo',
      image: gonzaImg
    },
    {
      name: 'Lucio Borda',
      role: 'Jefe del Departamento de Ventas',
      image: lucioImg
    }
  ];

  return (
    <section
      id="nosotros"
      className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-slate-950' : 'bg-white'
        }`}
    >
      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3
              className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
                }`}
            >
              Innovación en Cada Luz
            </h3>
            <p
              className={`text-lg mb-6 leading-relaxed transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              En LuxTech, combinamos tecnología LED de vanguardia con diseño
              inteligente para crear soluciones de iluminación que no solo iluminan,
              sino que transforman espacios.
            </p>
            <p
              className={`text-lg leading-relaxed transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              Con años de experiencia en el sector, ayudamos a empresas e instituciones
              a reducir sus costos energéticos mientras mejoran la calidad de sus
              ambientes luminosos.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="text-center">
              <img src={salaImg} alt="" className='fit-cover w-full h-full rounded-2xl border border-amber-500/30' />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
            }`}
        >
          Nuestro Equipo
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 text-center transition-all duration-500 ${darkMode
                ? 'bg-slate-900/50 border border-slate-800 hover:border-amber-500/50'
                : 'bg-gray-50 border border-gray-200 hover:border-amber-500/50'
                }`}
            >
              <div
                className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center transition-colors duration-500 ${darkMode
                  ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 border-amber-500/30'
                  : 'bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300'
                  }`}
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <h4
                className={`text-xl font-bold mb-2 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
                  }`}
              >
                {member.name}
              </h4>
              <p
                className={`transition-colors duration-500 ${darkMode ? 'text-amber-400' : 'text-amber-600'
                  }`}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}