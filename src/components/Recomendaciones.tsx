import React from 'react';
import { Building2, School, Store, TrendingUp, Zap, DollarSign, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

interface CasosExitoProps {
    darkMode: boolean;
}

export default function CasosExito({ darkMode }: CasosExitoProps) {
    const casos = [
        {
            icon: Building2,
            company: 'Edificio Corporativo Central',
            industry: 'Oficinas Corporativas',
            location: 'Buenos Aires',
            challenge: 'Alto consumo energético en iluminación de 15 pisos con costos operativos elevados y sistemas obsoletos.',
            solution: 'Implementamos un sistema completo de iluminación LED con sensores de movimiento y control automatizado en todas las áreas comunes y oficinas.',
            results: [
                { label: 'Reducción de consumo', value: '68%', icon: TrendingUp },
                { label: 'Ahorro anual', value: '$45,000', icon: DollarSign },
                { label: 'Ahorro en watts', value: '125,000W', icon: Zap }
            ],
            testimonial: 'La inversión se pagó sola en menos de dos años. Ahora tenemos una iluminación superior con costos mucho menores.',
            author: 'María González, Gerente de Facilities'
        },
        {
            icon: School,
            company: 'Instituto Educativo San Martín',
            industry: 'Educación',
            location: 'La Plata',
            challenge: 'Construcción de nuevo edificio educativo que requería un sistema de iluminación eficiente y moderno desde cero para 45 aulas y espacios comunes.',
            solution: 'Instalación integral desde la planificación inicial con tecnología LED de temperatura de color ajustable, diseñada específicamente para optimizar el ambiente de aprendizaje en todas las aulas y áreas comunes.',
            results: [
                { label: 'Reducción vs tradicional', value: '72%', icon: TrendingUp },
                { label: 'Ahorro anual proyectado', value: '$32,000', icon: DollarSign },
                { label: 'Ahorro en watts', value: '95,000W', icon: Zap }
            ],
            testimonial: 'Elegimos LED desde el inicio y fue la mejor decisión. Los estudiantes reportan mejor concentración y evitamos años de costos elevados.',
            author: 'Dr. Roberto Fernández, Director'
        },
        {
            icon: Store,
            company: 'Cadena de Retail ModaPlus',
            industry: 'Comercio Minorista',
            location: 'Múltiples ubicaciones',
            challenge: 'Necesidad de iluminación que realzara productos y redujera costos en 12 sucursales simultáneamente.',
            solution: 'Sistema LED especializado para retail con control de intensidad y temperatura de color, optimizado para exhibición de productos.',
            results: [
                { label: 'Reducción de consumo', value: '65%', icon: TrendingUp },
                { label: 'Ahorro anual', value: '$78,000', icon: DollarSign },
                { label: 'Ahorro en watts', value: '185,000W', icon: Zap }
            ],
            testimonial: 'La iluminación transformó nuestras tiendas. Los productos lucen mejor y nuestros costos bajaron significativamente.',
            author: 'Ana Martínez, Directora de Operaciones'
        }
    ];

    return (
        <div
            className={`min-h-screen pt-20 pb-16 transition-colors duration-500 ${darkMode ? 'bg-slate-950' : 'bg-gray-50'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                {/* Header */}
                <div className="text-center mb-16">
                    <h1
                        className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
                            }`}
                    >
                        Casos de Éxito
                    </h1>
                    <p
                        className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                    >
                        Descubre cómo nuestras soluciones de iluminación LED han transformado
                        espacios y reducido costos en diferentes industrias.
                    </p>
                </div>

                {/* Cases */}
                <div className="space-y-16">
                    {casos.map((caso, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 md:p-12 transition-all duration-500 ${darkMode
                                ? 'bg-slate-900/50 border border-slate-800'
                                : 'bg-white border border-gray-200'
                                }`}
                        >
                            {/* Header */}
                            <div className="flex items-start gap-6 mb-8">
                                <div
                                    className={`p-4 rounded-2xl transition-colors duration-500 ${darkMode
                                        ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20'
                                        : 'bg-gradient-to-br from-amber-100 to-orange-100'
                                        }`}
                                >
                                    <caso.icon
                                        className={`w-12 h-12 ${darkMode ? 'text-amber-400' : 'text-amber-600'
                                            }`}
                                    />
                                </div>
                                <div>
                                    <h2
                                        className={`text-3xl font-bold mb-2 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
                                            }`}
                                    >
                                        {caso.company}
                                    </h2>
                                    <p
                                        className={`text-lg transition-colors duration-500 ${darkMode ? 'text-amber-400' : 'text-amber-600'
                                            }`}
                                    >
                                        {caso.industry} • {caso.location}
                                    </p>
                                </div>
                            </div>

                            {/* Challenge & Solution */}
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3
                                        className={`text-xl font-bold mb-3 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
                                            }`}
                                    >
                                        Desafío
                                    </h3>
                                    <p
                                        className={`leading-relaxed transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}
                                    >
                                        {caso.challenge}
                                    </p>
                                </div>
                                <div>
                                    <h3
                                        className={`text-xl font-bold mb-3 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
                                            }`}
                                    >
                                        Solución
                                    </h3>
                                    <p
                                        className={`leading-relaxed transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}
                                    >
                                        {caso.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="mb-8">
                                <h3
                                    className={`text-xl font-bold mb-6 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
                                        }`}
                                >
                                    Resultados
                                </h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {caso.results.map((result, idx) => (
                                        <div
                                            key={idx}
                                            className={`p-6 rounded-2xl transition-all duration-500 ${darkMode
                                                ? 'bg-slate-800/50 border border-slate-700'
                                                : 'bg-gray-50 border border-gray-200'
                                                }`}
                                        >
                                            <result.icon
                                                className={`w-8 h-8 mb-3 ${darkMode ? 'text-amber-400' : 'text-amber-600'
                                                    }`}
                                            />
                                            <div
                                                className={`text-3xl font-bold mb-2 transition-colors duration-500 ${darkMode ? 'text-amber-400' : 'text-amber-600'
                                                    }`}
                                            >
                                                {result.value}
                                            </div>
                                            <div
                                                className={`text-sm transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                    }`}
                                            >
                                                {result.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial */}
                            <div
                                className={`p-6 rounded-2xl border-l-4 transition-all duration-500 ${darkMode
                                    ? 'bg-slate-800/30 border-amber-500'
                                    : 'bg-amber-50 border-amber-500'
                                    }`}
                            >
                                <p
                                    className={`text-lg italic mb-3 transition-colors duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}
                                >
                                    "{caso.testimonial}"
                                </p>
                                <p
                                    className={`font-semibold transition-colors duration-500 ${darkMode ? 'text-amber-400' : 'text-amber-600'
                                        }`}
                                >
                                    — {caso.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div
                    className={`mt-16 p-12 rounded-3xl text-center transition-all duration-500 ${darkMode
                        ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30'
                        : 'bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200'
                        }`}
                >
                    <h2
                        className={`text-3xl font-bold mb-4 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'
                            }`}
                    >
                        ¿Listo para tu propio caso de éxito?
                    </h2>
                    <p
                        className={`text-lg mb-8 transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}
                    >
                        Contactanos hoy y descubre cómo podemos transformar tu espacio
                    </p>
                    <Link
                        to="/#contacto"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Solicitar Consulta Gratuita
                    </Link>
                </div>
            </div>
        </div>
    );
}