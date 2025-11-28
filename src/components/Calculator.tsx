import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lightbulb, Calculator, TrendingUp, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from 'recharts';
import { useDarkMode } from '@/contexts/DarkModeContext';

// Configuración de funciones lineales y errores
const LIGHTING_CONFIG = {
    led: {
        aula: { slope: 985.2, intercept: 1200.4, error: 0.08 },
        oficina: { slope: 890.6, intercept: 540.1, error: 0.08 },
        'sala-reuniones': { slope: 750.4, intercept: 300.2, error: 0.08 }
    },
    fluorescente: {
        aula: { slope: 985.2, intercept: 1200.4, error: 0.12 },
        oficina: { slope: 890.6, intercept: 540.1, error: 0.12 },
        'sala-reuniones': { slope: 750.4, intercept: 300.2, error: 0.12 }
    }
};

// Productos de ejemplo (para cálculos)
const SAMPLE_PRODUCTS = {
    led: [
        { name: 'Panel LED 40W', lumens: 4000, watts: 40 },
        { name: 'Panel LED 60W', lumens: 6000, watts: 60 },
        { name: 'Tubo LED 18W', lumens: 1800, watts: 18 }
    ],
    fluorescente: [
        { name: 'Tubo T8 36W', lumens: 3000, watts: 36 },
        { name: 'Tubo T8 58W', lumens: 5000, watts: 58 }
    ]
};

const calculateLumens = (surface, roomType, lightType) => {
    const config = LIGHTING_CONFIG[lightType][roomType];
    const lumens = config.slope * surface + config.intercept;
    const lowerBound = lumens * (1 - config.error);
    const upperBound = lumens * (1 + config.error);

    return { lumens, lowerBound, upperBound, error: config.error };
};

const generateChartData = (surface, roomType, lightType) => {
    const data = [];
    const maxSurface = Math.max(surface * 1.5, 50);

    for (let s = 0; s <= maxSurface; s += maxSurface / 20) {
        const result = calculateLumens(s, roomType, lightType);
        data.push({
            surface: s,
            lumens: result.lumens,
            lower: result.lowerBound,
            upper: result.upperBound
        });
    }

    return data;
};

const recommendLuminaires = (requiredLumens, lightType) => {
    const products = SAMPLE_PRODUCTS[lightType];
    let bestOption = null;
    let minDifference = Infinity;

    for (const product of products) {
        for (let qty = 1; qty <= 50; qty++) {
            const totalLumens = product.lumens * qty;
            const difference = Math.abs(totalLumens - requiredLumens);

            if (totalLumens >= requiredLumens && difference < minDifference) {
                minDifference = difference;
                bestOption = {
                    product,
                    quantity: qty,
                    totalLumens,
                    totalWatts: product.watts * qty,
                    compliance: ((totalLumens / requiredLumens) * 100).toFixed(1)
                };
            }
        }
    }

    return bestOption;
};

export default function LightingSimulator() {
    const [surface, setSurface] = useState('');
    const [roomType, setRoomType] = useState('');
    const [lightType, setLightType] = useState('');
    const [results, setResults] = useState(null);
    const { darkMode } = useDarkMode();

    const handleCalculate = () => {
        if (!surface || !roomType || !lightType) {
            return;
        }

        const surfaceNum = parseFloat(surface);
        if (surfaceNum <= 0) return;

        const lumensData = calculateLumens(surfaceNum, roomType, lightType);
        const recommendation = recommendLuminaires(lumensData.lumens, lightType);
        const chartData = generateChartData(surfaceNum, roomType, lightType);

        setResults({
            ...lumensData,
            recommendation,
            chartData,
            surface: surfaceNum
        });
    };

    const getRoomTypeName = (type) => {
        const names = {
            'aula': 'Aula',
            'oficina': 'Oficina',
            'sala-reuniones': 'Sala de Reuniones'
        };
        return names[type] || type;
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-blue-50 via-white to-amber-50'
            }`}>

            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Simulador de Dimensionamiento Lumínico
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Calcula la iluminación perfecta para tu espacio con precisión profesional
                    </p>
                </div>

                {/* Input Card */}
                <Card className={`mb-8 shadow-lg ${darkMode
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                    }`}>
                    <CardHeader>
                        <CardTitle className={`flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                            <Calculator className="w-5 h-5" />
                            Datos del Proyecto
                        </CardTitle>
                        <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                            Ingresa las características de tu espacio para obtener un dimensionamiento preciso
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="surface" className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Superficie (m²)
                                </Label>
                                <Input
                                    id="surface"
                                    type="number"
                                    placeholder="Ej: 50"
                                    value={surface}
                                    onChange={(e) => setSurface(e.target.value)}
                                    min="0"
                                    step="0.1"
                                    className={darkMode
                                        ? 'bg-gray-700 border-gray-600 text-white placeholder:text-gray-400'
                                        : 'bg-white border-gray-300 text-gray-900'
                                    }
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="roomType" className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Tipo de Ambiente
                                </Label>
                                <Select value={roomType} onValueChange={setRoomType}>
                                    <SelectTrigger
                                        id="roomType"
                                        className={darkMode
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                        }
                                    >
                                        <SelectValue placeholder="Selecciona..." />
                                    </SelectTrigger>
                                    <SelectContent className={darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'}>
                                        <SelectItem value="aula" className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
                                            Aula
                                        </SelectItem>
                                        <SelectItem value="oficina" className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
                                            Oficina
                                        </SelectItem>
                                        <SelectItem value="sala-reuniones" className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
                                            Sala de Reuniones
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lightType" className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Tipo de Tecnología
                                </Label>
                                <Select value={lightType} onValueChange={setLightType}>
                                    <SelectTrigger
                                        id="lightType"
                                        className={darkMode
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                        }
                                    >
                                        <SelectValue placeholder="Selecciona..." />
                                    </SelectTrigger>
                                    <SelectContent className={darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white'}>
                                        <SelectItem value="led" className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
                                            LED
                                        </SelectItem>
                                        <SelectItem value="fluorescente" className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
                                            Fluorescente
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Button
                            onClick={handleCalculate}
                            className={`w-full mt-6 text-white transition-colors ${darkMode
                                ? 'bg-amber-600 hover:bg-amber-700'
                                : 'bg-amber-500 hover:bg-amber-600'
                                }`}
                            disabled={!surface || !roomType || !lightType}
                        >
                            <Calculator className="w-4 h-4 mr-2" />
                            Calcular Dimensionamiento
                        </Button>
                    </CardContent>
                </Card>

                {/* Results */}
                {results && (
                    <>
                        {/* Alert with Summary */}
                        <Alert className={`mb-8 ${darkMode
                            ? 'border-amber-700 bg-amber-900/20 text-amber-200'
                            : 'border-amber-200 bg-amber-50'
                            }`}>
                            <AlertCircle className={`h-4 w-4 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                            <AlertDescription className={darkMode ? 'text-amber-100' : 'text-amber-900'}>
                                <strong>Requerimiento calculado:</strong> {Math.round(results.lumens).toLocaleString()} lúmenes
                                (rango: {Math.round(results.lowerBound).toLocaleString()} - {Math.round(results.upperBound).toLocaleString()} lm)
                                con una incertidumbre de ±{(results.error * 100).toFixed(0)}%
                            </AlertDescription>
                        </Alert>

                        {/* Chart */}
                        <Card className={`mb-8 shadow-lg ${darkMode
                            ? 'bg-gray-800 border-gray-700'
                            : 'bg-white border-gray-200'
                            }`}>
                            <CardHeader>
                                <CardTitle className={`flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    <TrendingUp className="w-5 h-5" />
                                    Curva de Dimensionamiento con Bandas de Incertidumbre
                                </CardTitle>
                                <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                    Relación entre superficie y lúmenes requeridos para {getRoomTypeName(roomType)} con tecnología {lightType.toUpperCase()}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={400}>
                                    <ComposedChart data={results.chartData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                                        <XAxis
                                            dataKey="surface"
                                            label={{
                                                value: 'Superficie (m²)',
                                                position: 'insideBottom',
                                                offset: -5,
                                                fill: darkMode ? '#9ca3af' : '#6b7280'
                                            }}
                                            tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }}
                                        />
                                        <YAxis
                                            label={{
                                                value: 'Lúmenes (lm)',
                                                angle: -90,
                                                position: 'insideLeft',
                                                fill: darkMode ? '#9ca3af' : '#6b7280'
                                            }}
                                            tick={{ fill: darkMode ? '#9ca3af' : '#6b7280' }}
                                        />
                                        <Tooltip
                                            formatter={(value) => `${Math.round(value).toLocaleString()} lm`}
                                            labelFormatter={(value) => `${value.toFixed(1)} m²`}
                                            contentStyle={{
                                                backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                                                border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                                                color: darkMode ? '#f3f4f6' : '#1f2937'
                                            }}
                                        />
                                        <Legend wrapperStyle={{ color: darkMode ? '#9ca3af' : '#6b7280' }} />
                                        <Area
                                            type="monotone"
                                            dataKey="upper"
                                            fill="#fbbf24"
                                            stroke="none"
                                            fillOpacity={darkMode ? 0.15 : 0.2}
                                            name="Banda superior"
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="lower"
                                            fill={darkMode ? '#1f2937' : '#ffffff'}
                                            stroke="none"
                                            fillOpacity={1}
                                            name="Banda inferior"
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="lumens"
                                            stroke="#f59e0b"
                                            strokeWidth={3}
                                            dot={{ fill: '#f59e0b', r: 4 }}
                                            activeDot={{ r: 6 }}
                                            name="Lúmenes requeridos"
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="lower"
                                            stroke="#d97706"
                                            strokeWidth={1}
                                            strokeDasharray="5 5"
                                            dot={false}
                                            name={`Límite inferior (-${(results.error * 100).toFixed(0)}%)`}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="upper"
                                            stroke="#d97706"
                                            strokeWidth={1}
                                            strokeDasharray="5 5"
                                            dot={false}
                                            name={`Límite superior (+${(results.error * 100).toFixed(0)}%)`}
                                        />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Recommendation Card */}
                        {results.recommendation && (
                            <Card className={`shadow-lg border-2 ${darkMode
                                ? 'bg-gray-800 border-amber-700'
                                : 'bg-white border-amber-200'
                                }`}>
                                <CardHeader className={
                                    darkMode
                                        ? 'bg-gradient-to-r from-gray-700 to-gray-800'
                                        : 'bg-gradient-to-r from-amber-50 to-white'
                                }>
                                    <CardTitle className={`flex items-center gap-2 ${darkMode ? 'text-amber-400' : 'text-amber-900'
                                        }`}>
                                        <Lightbulb className="w-5 h-5" />
                                        Recomendación de Luminarias
                                    </CardTitle>
                                    <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                        Solución óptima para tu proyecto
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'
                                                }`}>
                                                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>Producto recomendado</p>
                                                <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                                                    }`}>
                                                    {results.recommendation.product.name}
                                                </p>
                                            </div>

                                            <div className={`p-4 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-50'
                                                }`}>
                                                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>Cantidad necesaria</p>
                                                <p className={`text-3xl font-bold ${darkMode ? 'text-green-400' : 'text-green-700'
                                                    }`}>
                                                    {results.recommendation.quantity} unidades
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className={`p-4 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'
                                                }`}>
                                                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>Potencia instalada total</p>
                                                <p className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'
                                                    }`}>
                                                    {results.recommendation.totalWatts} W
                                                </p>
                                            </div>

                                            <div className={`p-4 rounded-lg ${darkMode ? 'bg-amber-900/30' : 'bg-amber-50'
                                                }`}>
                                                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>Lúmenes totales</p>
                                                <p className={`text-2xl font-bold ${darkMode ? 'text-amber-400' : 'text-amber-700'
                                                    }`}>
                                                    {results.recommendation.totalLumens.toLocaleString()} lm
                                                </p>
                                            </div>

                                            <div className={`p-4 rounded-lg border-2 ${darkMode
                                                ? 'bg-green-900/20 border-green-700'
                                                : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
                                                }`}>
                                                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>Cumplimiento normativo</p>
                                                <p className={`text-3xl font-bold ${darkMode ? 'text-green-400' : 'text-green-700'
                                                    }`}>
                                                    {results.recommendation.compliance}%
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                                        }`}>
                                        <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>Resumen técnico</h4>
                                        <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                            <li>• Superficie iluminada: {results.surface} m²</li>
                                            <li>• Tipo de ambiente: {getRoomTypeName(roomType)}</li>
                                            <li>• Tecnología: {lightType.toUpperCase()}</li>
                                            <li>• Incertidumbre del cálculo: ±{(results.error * 100).toFixed(0)}%</li>
                                            <li>• Rango de lúmenes: {Math.round(results.lowerBound).toLocaleString()} - {Math.round(results.upperBound).toLocaleString()} lm</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </>
                )}

            </div>
        </div>
    );
}