import React from 'react';
import { Zap, Award, Users } from 'lucide-react';

interface CaracteristicasProps {
  darkMode: boolean;
}

export default function Caracteristicas({ darkMode }: CaracteristicasProps) {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: 'Eficiencia',
      desc: 'Ahorro energético de hasta 70%',
    },
    {
      icon: <Award className="w-8 h-8 text-amber-400" />,
      title: 'Calidad',
      desc: 'Productos certificados y garantizados',
    },
    {
      icon: <Users className="w-8 h-8 text-amber-400" />,
      title: 'Soporte',
      desc: 'Asesoramiento personalizado',
    },
  ];

  return (
    <section
      className={`py-20 border-y transition-colors duration-500 ${
        darkMode ? 'bg-slate-900 border-amber-500/20' : 'bg-white border-amber-500/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-2xl mb-4">
                {feature.icon}
              </div>
              <h3
                className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`transition-colors duration-500 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
