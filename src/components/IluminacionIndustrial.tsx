import React from 'react';
import { 
  Factory, 
  Shield, 
  Wrench, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Package
} from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

interface IluminacionIndustrialProps {
  darkMode: boolean;
}

export default function IluminacionIndustrial({ darkMode }: IluminacionIndustrialProps) {
  const beneficios = [
    {
      icon: Shield,
      title: 'Reducción del Riesgo de Accidentes',
      description: 'Iluminación uniforme y sin parpadeo (Flicker Free) para máxima seguridad operativa'
    },
    {
      icon: Package,
      title: 'Visibilidad de Etiquetas',
      description: 'Iluminación vertical optimizada para lectura de códigos y etiquetas en estanterías'
    },
    {
      icon: Wrench,
      title: 'Mínimo Mantenimiento',
      description: 'Luminarias robustas con IP65+ y vida útil de +50,000 horas'
    }
  ];

  const caracteristicas = [
    'Resistencia a ambientes severos (polvo, humedad)',
    'Tecnología Flicker Free (<5% de ondulación)',
    'Iluminación vertical para estanterías',
    'Contraste de CCT para zonas de precisión',
    'Protección IP65/IP66',
    'Alta eficiencia luminosa (>130 lm/W)'
  ];

  const aplicaciones = [
    'Naves industriales',
    'Almacenes y centros logísticos',
    'Fábricas de manufactura',
    'Plantas de producción',
    'Talleres mecánicos',
    'Centros de distribución'
  ];

  const normasSeguridad = [
    'Iluminancia mínima según EN 12464-1',
    'Uniformidad luminosa >0.7',
    'UGR <22 para zonas de trabajo',
    'Iluminación vertical >150 lux'
  ];

  return (
    <section 
      className={`min-h-screen py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950' : 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl mb-6">
            <Factory className="w-10 h-10 text-blue-400" />
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Iluminación Industrial
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-4 transition-colors duration-500 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Soluciones robustas para fábricas, almacenes y naves
          </p>
          
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Maximizamos la <span className="text-blue-400 font-semibold">seguridad operativa</span> y 
            minimizamos el mantenimiento. Soluciones <span className="text-blue-400 font-semibold">Flicker Free</span> y 
            resistentes a ambientes severos.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Transformación Industrial
          </h2>
          <BeforeAfterSlider
            beforeImage="./media/industrial1.png"
            afterImage="./media/industrial2.png"
            beforeLabel="Iluminación Convencional"
            afterLabel="Sistema Pro-Efficiency"
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
                    ? 'bg-slate-900/50 border border-blue-500/20 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10'
                    : 'bg-white border border-blue-500/30 hover:border-blue-500/60 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-blue-400" />
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
              <Zap className="w-7 h-7 text-blue-400" />
              Características Técnicas
            </h3>
            <ul className="space-y-4">
              {caracteristicas.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
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
              <Factory className="w-7 h-7 text-blue-400" />
              Aplicaciones Ideales
            </h3>
            <ul className="space-y-4">
              {aplicaciones.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
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

        {/* Normativas de Seguridad */}
        <div className={`rounded-2xl p-8 mb-12 ${
          darkMode 
            ? 'bg-slate-900/50 border border-slate-700' 
            : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            <AlertTriangle className="w-7 h-7 text-orange-400" />
            Cumplimiento Normativo
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {normasSeguridad.map((norma, index) => (
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
            {/* Iluminación Vertical */}
            <div className={`rounded-2xl p-6 border-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30' 
                : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300'
            }`}>
              <h3 className={`text-lg font-bold mb-3 ${
                darkMode ? 'text-blue-300' : 'text-blue-700'
              }`}>
                📦 Iluminación Vertical (V-Lux)
              </h3>
              <p className={`text-sm mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Nuestro diseño garantiza que la luz llegue <span className="font-semibold text-blue-400">a las caras de las estanterías</span>, 
                no solo al suelo. Crítico para leer etiquetas, códigos de barras y detectar riesgos.
              </p>
              <div className={`text-xs mt-3 pt-3 border-t ${
                darkMode ? 'border-blue-500/20 text-blue-200' : 'border-blue-300 text-blue-800'
              }`}>
                ✓ Minimiza errores de inventario (picking)
              </div>
            </div>

            {/* Flicker Free */}
            <div className={`rounded-2xl p-6 border-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30' 
                : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300'
            }`}>
              <h3 className={`text-lg font-bold mb-3 ${
                darkMode ? 'text-blue-300' : 'text-blue-700'
              }`}>
                ⚡ Tecnología Anti-Parpadeo
              </h3>
              <p className={`text-sm mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                El parpadeo causa fatiga, migrañas y el <span className="font-semibold text-blue-400">efecto estroboscópico</span> cerca 
                de maquinaria. Nuestros sistemas son <span className="font-semibold text-blue-400">certificados Flicker Free</span>.
              </p>
              <div className={`text-xs mt-3 pt-3 border-t ${
                darkMode ? 'border-blue-500/20 text-blue-200' : 'border-blue-300 text-blue-800'
              }`}>
                ✓ Inversión directa en seguridad y bienestar
              </div>
            </div>

            {/* IP/IK */}
            <div className={`rounded-2xl p-6 border-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30' 
                : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300'
            }`}>
              <h3 className={`text-lg font-bold mb-3 ${
                darkMode ? 'text-blue-300' : 'text-blue-700'
              }`}>
                🛡️ Clasificación IP/IK
              </h3>
              <p className={`text-sm mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Clasificaciones altas de protección <span className="font-semibold text-blue-400">(IP y IK)</span> que 
                garantizan resistencia al agua, polvo y vandalismo/impacto. Comprar robusto es comprar <span className="font-semibold text-blue-400">menos mantenimiento</span>.
              </p>
              <div className={`text-xs mt-3 pt-3 border-t ${
                darkMode ? 'border-blue-500/20 text-blue-200' : 'border-blue-300 text-blue-800'
              }`}>
                ✓ Reduce tiempo de inactividad de la fábrica
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 inline-flex items-center gap-3">
            Calcula la potencia de tu nave
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className={`mt-4 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Precisión certificada mediante algoritmo LS - Cumplimiento CIE/IES
          </p>
        </div>

      </div>
    </section>
  );
}