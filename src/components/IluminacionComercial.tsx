import React from 'react';
import {
  Lightbulb,
  TrendingUp,
  Eye,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import comercial1 from '../media/comercial1.png';
import comercial2 from '../media/comercial2.png';

interface IluminacionComercialProps {
  darkMode: boolean;
}

export default function IluminacionComercial({ darkMode }: IluminacionComercialProps) {
  const beneficios = [
    {
      icon: TrendingUp,
      title: 'Incremento de la Productividad',
      description: 'Reduce la fatiga visual y mejora el rendimiento del equipo hasta un 15%'
    },
    {
      icon: Sparkles,
      title: 'Mejora del Ambiente de Marca',
      description: 'Iluminación de acento con alto CRI para resaltar productos y crear experiencias'
    },
    {
      icon: Eye,
      title: 'Control de Deslumbramiento (UGR)',
      description: 'Sistemas optimizados para confort visual en espacios de trabajo prolongado'
    }
  ];

  const caracteristicas = [
    'CCT ajustable (3000K-5000K) según ambiente',
    'Efecto Cueva para guiar al cliente',
    'CRI >90 para comercios retail',
    'Iluminación de acento direccional',
    'Cumplimiento normativo CIE/IES',
    'Eficiencia energética clase A++'
  ];

  const aplicaciones = [
    'Oficinas corporativas',
    'Espacios de coworking',
    'Tiendas retail',
    'Showrooms',
    'Restaurantes y cafeterías',
    'Centros comerciales'
  ];

  return (
    <section
      className={`min-h-screen py-20 transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl mb-6">
            <Lightbulb className="w-10 h-10 text-amber-400" />
          </div>

          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Iluminación Comercial
          </h1>

          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-4 transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Sistemas LED para oficinas, comercios y espacios corporativos
          </p>

          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Fomentamos la <span className="text-amber-400 font-semibold">productividad</span> y reducimos
            la fatiga visual. Diseños optimizados para el confort con control de deslumbramiento
            <span className="text-amber-400 font-semibold"> UGR</span> y
            <span className="text-amber-400 font-semibold"> CCT</span> correcto.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Transformación Visual
          </h2>
          <BeforeAfterSlider
            beforeImage={comercial1}
            afterImage={comercial2}
            beforeLabel="Iluminación Tradicional"
            afterLabel="Sistema LED LuxTech"
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
                className={`group rounded-2xl p-8 transition-all duration-300 ${darkMode
                  ? 'bg-slate-900/50 border border-amber-500/20 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10'
                  : 'bg-white border border-amber-500/30 hover:border-amber-500/60 shadow-lg hover:shadow-xl'
                  }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                  {beneficio.title}
                </h3>
                <p className={`transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  {beneficio.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Características Técnicas y Aplicaciones */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Características Técnicas */}
          <div className={`rounded-2xl p-8 ${darkMode
            ? 'bg-slate-900/50 border border-slate-700'
            : 'bg-white border border-gray-200 shadow-lg'
            }`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-slate-900'
              }`}>
              <Zap className="w-7 h-7 text-amber-400" />
              Características Técnicas
            </h3>
            <ul className="space-y-4">
              {caracteristicas.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <span className={`transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aplicaciones */}
          <div className={`rounded-2xl p-8 ${darkMode
            ? 'bg-slate-900/50 border border-slate-700'
            : 'bg-white border border-gray-200 shadow-lg'
            }`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-slate-900'
              }`}>
              <Sparkles className="w-7 h-7 text-amber-400" />
              Aplicaciones Ideales
            </h3>
            <ul className="space-y-4">
              {aplicaciones.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                  <span className={`transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trucos Estratégicos */}
        <div className="mb-12">
          <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-slate-900'
            }`}>
            💡 Trucos Estratégicos de Diseño
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Efecto Cueva */}
            <div className={`rounded-2xl p-6 border-2 ${darkMode
              ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30'
              : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300'
              }`}>
              <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-amber-300' : 'text-amber-700'
                }`}>
                🎯 Efecto Cueva (Cave Effect)
              </h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                Al iluminar las paredes y la mercancía con mayor intensidad que el centro del pasillo,
                <span className="font-semibold text-amber-400"> dirigimos al cliente</span> de forma
                subconsciente hacia los productos. Un error común es iluminar solo el suelo.
              </p>
              <div className={`text-xs mt-3 pt-3 border-t ${darkMode ? 'border-amber-500/20 text-amber-200' : 'border-amber-300 text-amber-800'
                }`}>
                ✓ Aumenta el flujo de clientes y la atención al producto
              </div>
            </div>

            {/* CRI Alto */}
            <div className={`rounded-2xl p-6 border-2 ${darkMode
              ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30'
              : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300'
              }`}>
              <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-amber-300' : 'text-amber-700'
                }`}>
                🎨 CRI Alto (Venta por Color)
              </h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                Nuestros diseños usan LED de <span className="font-semibold text-amber-400">CRI 90+</span>,
                garantizando que los colores se vean reales, vibrantes y deseables.
                Un CRI bajo mata el color; un CRI alto vende.
              </p>
              <div className={`text-xs mt-3 pt-3 border-t ${darkMode ? 'border-amber-500/20 text-amber-200' : 'border-amber-300 text-amber-800'
                }`}>
                ✓ Impacta directamente en la decisión de compra
              </div>
            </div>

            {/* Luz Sintonizable */}
            <div className={`rounded-2xl p-6 border-2 ${darkMode
              ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30'
              : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300'
              }`}>
              <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-amber-300' : 'text-amber-700'
                }`}>
                ⚡ Luz Sintonizable (Tunable White)
              </h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                Sistemas que usan luz <span className="font-semibold text-amber-400">más fría</span> a
                primera hora para maximizar la alerta, y la atenúan a
                <span className="font-semibold text-amber-400"> tonos neutros</span> al final del día.
                LuxTech alinea la luz con el reloj biológico.
              </p>
              <div className={`text-xs mt-3 pt-3 border-t ${darkMode ? 'border-amber-500/20 text-amber-200' : 'border-amber-300 text-amber-800'
                }`}>
                ✓ Optimiza energía y estado de alerta (ritmos circadianos)
              </div>
            </div>

            {/* UGR Bajo */}
            <div className={`rounded-2xl p-6 border-2 ${darkMode
              ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/30'
              : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300'
              }`}>
              <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-amber-300' : 'text-amber-700'
                }`}>
                👁️ UGR Bajo (Control de Deslumbramiento)
              </h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                El simulador LuminaTech garantiza un <span className="font-semibold text-amber-400">UGR inferior a 19</span>,
                el estándar para oficinas, protegiendo a sus empleados de la fatiga visual crónica causada
                por el brillo directo en los ojos o en la pantalla.
              </p>
              <div className={`text-xs mt-3 pt-3 border-t ${darkMode ? 'border-amber-500/20 text-amber-200' : 'border-amber-300 text-amber-800'
                }`}>
                ✓ Reduce fatiga visual y errores en trabajos de oficina
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 inline-flex items-center gap-3">
            Dimensiona tu oficina ahora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Simulador basado en Algoritmo de Mínimos Cuadrados (LS)
          </p>
        </div>

      </div>
    </section>
  );
}