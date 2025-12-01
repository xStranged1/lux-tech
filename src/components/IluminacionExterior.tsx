import React from 'react';
import { 
  Lamp, 
  Shield, 
  Building2, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  Moon,
  TreePine,
  Sparkles
} from 'lucide-react';
import { useLocation } from 'wouter';
import BeforeAfterSlider from './BeforeAfterSlider';
import exterior1 from '../media/exterior1.png';
import exterior2 from '../media/exterior2.png';

interface IluminacionExteriorProps {
  darkMode: boolean;
}

export default function IluminacionExterior({ darkMode }: IluminacionExteriorProps) {
  const [, navigate] = useLocation();
  const beneficios = [
    {
      icon: Zap,
      title: 'Ahorro Energético en Gran Escala',
      description: 'Reducción del consumo energético hasta 70% vs. tecnologías tradicionales'
    },
    {
      icon: Building2,
      title: 'Realce de la Arquitectura',
      description: 'Técnicas de Graze Lighting ywall washing para destacar fachadas y crear branding nocturno'
    },
    {
      icon: Shield,
      title: 'Seguridad Ciudadana',
      description: 'Iluminación uniforme que reduce puntos ciegos y mejora la percepción de seguridad'
    }
  ];

  const caracteristicas = [
    'Control de contaminación lumínica (ULOR <3%)',
    'Graze Lighting para fachadas arquitectónicas',
    'UGR controlado para evitar deslumbramiento',
    'CCT adaptable (2700K-4000K)',
    'Protección IP66/IP67',
    'Eficiencia energética >140 lm/W'
  ];

  const aplicaciones = [
    'Alumbrado público urbano',
    'Iluminación de fachadas',
    'Parques y espacios recreativos',
    'Estacionamientos',
    'Monumentos históricos',
    'Zonas peatonales'
  ];

  const normasAmbientales = [
    'Control de contaminación lumínica',
    'Protección de fauna nocturna',
    'Temperatura de color adecuada (<3000K)',
    'Direccionamiento preciso de la luz'
  ];

  const tiposProyectos = [
    {
      title: 'Alumbrado Público',
      desc: 'Calles, avenidas y vías urbanas con máxima eficiencia'
    },
    {
      title: 'Iluminación Arquitectónica',
      desc: 'Realce de edificios emblemáticos y patrimonio histórico'
    },
    {
      title: 'Espacios Recreativos',
      desc: 'Parques, plazas y áreas deportivas al aire libre'
    }
  ];

  return (
    <section 
      className={`min-h-screen py-20 transition-colors duration-500 ${
        darkMode ? 'bg-slate-950' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
            <Lamp className="w-10 h-10 text-purple-400" />
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Iluminación Exterior
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-4 transition-colors duration-500 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Luminarias para espacios públicos, calles y fachadas
          </p>
          
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Garantizamos la <span className="text-purple-400 font-semibold">seguridad ciudadana</span> y 
            la estética nocturna, cumpliendo normativas de control de 
            <span className="text-purple-400 font-semibold"> contaminación lumínica</span>.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Impacto Urbano
          </h2>
          <BeforeAfterSlider
            beforeImage={exterior1}
            afterImage={exterior2}
            beforeLabel="Alumbrado Tradicional"
            afterLabel="Iluminación Inteligente LED"
            darkMode={darkMode}
          />
        </div>

        {/* Beneficios Principales */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {beneficios.map((beneficio, index) => {
            const IconComponent = beneficio.icon;
            return (
              <div
                key={index}
                className={`group rounded-2xl p-8 transition-all duration-300 ${
                  darkMode
                    ? 'bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10'
                    : 'bg-white border border-purple-500/30 hover:border-purple-500/60 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {beneficio.title}
                </h3>
                <p className={`transition-colors duration-500 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {beneficio.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tipos de Proyectos */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Tipos de Proyectos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiposProyectos.map((proyecto, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 ${
                  darkMode
                    ? 'bg-slate-900/30 border border-purple-500/20'
                    : 'bg-white/80 border border-purple-200 shadow-md'
                }`}
              >
                <h4 className={`text-lg font-bold mb-2 ${
                  darkMode ? 'text-purple-300' : 'text-purple-700'
                }`}>
                  {proyecto.title}
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {proyecto.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Características Técnicas y Aplicaciones */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Características Técnicas */}
          <div className={`rounded-2xl p-8 ${
            darkMode 
              ? 'bg-slate-900/50 border border-slate-700' 
              : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <Sparkles className="w-7 h-7 text-purple-400" />
              Características Técnicas
            </h3>
            <ul className="space-y-4">
              {caracteristicas.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className={`transition-colors duration-500 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aplicaciones */}
          <div className={`rounded-2xl p-8 ${
            darkMode 
              ? 'bg-slate-900/50 border border-slate-700' 
              : 'bg-white border border-gray-200 shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <Lamp className="w-7 h-7 text-purple-400" />
              Aplicaciones Ideales
            </h3>
            <ul className="space-y-4">
              {aplicaciones.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span className={`transition-colors duration-500 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Normativas Ambientales */}
        <div className={`rounded-2xl p-8 mb-12 ${
          darkMode 
            ? 'bg-slate-900/50 border border-slate-700' 
            : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            <TreePine className="w-7 h-7 text-green-400" />
            Protección Ambiental
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {normasAmbientales.map((norma, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className={`transition-colors duration-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {norma}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trucos Estratégicos */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            💡 Trucos Estratégicos de Diseño
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* ULOR */}
            <div className={`rounded-2xl p-6 border-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30' 
                : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300'
            }`}>
              <h3 className={`text-lg font-bold mb-3 ${
                darkMode ? 'text-purple-300' : 'text-purple-700'
              }`}>
                🌙 Control de Contaminación (ULOR)
              </h3>
              <p className={`text-sm mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Diseñamos con un <span className="font-semibold text-purple-400">ULOR cercano a cero</span>, 
                dirigiendo el 100% de la luz hacia el suelo y el objetivo. Maximiza el uso de cada lumen y 
                garantiza el cumplimiento normativo.
              </p>
              <div className={`text-xs mt-3 pt-3 border-t ${
                darkMode ? 'border-purple-500/20 text-purple-200' : 'border-purple-300 text-purple-800'
              }`}>
                ✓ Cumplimiento normativo y respeto ambiental
              </div>
            </div>

            {/* Graze Lighting */}
            <div className={`rounded-2xl p-6 border-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30' 
                : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300'
            }`}>
              <h3 className={`text-lg font-bold mb-3 ${
                darkMode ? 'text-purple-300' : 'text-purple-700'
              }`}>
                🏛️ Iluminación de Realce (Graze)
              </h3>
              <p className={`text-sm mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Usamos <span className="font-semibold text-purple-400">luz rasante (Graze Lighting)</span> para 
                acentuar texturas en fachadas, creando sombras y profundidad. Su fachada 'cobra vida' con luz, 
                elevando la percepción de calidad.
              </p>
              <div className={`text-xs mt-3 pt-3 border-t ${
                darkMode ? 'border-purple-500/20 text-purple-200' : 'border-purple-300 text-purple-800'
              }`}>
                ✓ Potencia imagen de marca y valor inmobiliario
              </div>
            </div>

            {/* Dimming Inteligente */}
            <div className={`rounded-2xl p-6 border-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30' 
                : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300'
            }`}>
              <h3 className={`text-lg font-bold mb-3 ${
                darkMode ? 'text-purple-300' : 'text-purple-700'
              }`}>
                💡 Dimming Inteligente
              </h3>
              <p className={`text-sm mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Sistemas con <span className="font-semibold text-purple-400">atenuación programada</span> al 50% 
                cuando no hay movimiento, activándose al 100% con sensor de presencia. 
                Genera un <span className="font-semibold text-purple-400">ahorro adicional del 30-50%</span>.
              </p>
              <div className={`text-xs mt-3 pt-3 border-t ${
                darkMode ? 'border-purple-500/20 text-purple-200' : 'border-purple-300 text-purple-800'
              }`}>
                ✓ Máximo ahorro en calles con bajo tráfico
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/lux-tech/simulador')}
            className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 inline-flex items-center gap-3 cursor-pointer"
          >
            Diseña tu proyecto urbano
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className={`mt-4 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Simulación profesional con cumplimiento normativo CIE/IES
          </p>
        </div>

      </div>
    </section>
  );
}