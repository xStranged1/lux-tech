import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Lightbulb, Calculator, TrendingUp, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from 'recharts';

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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <Lightbulb className="w-8 h-8 text-amber-500" />
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">LuxTech</h1>
                            <p className="text-sm text-gray-600">Soluciones Profesionales de Iluminación</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Simulador de Dimensionamiento Lumínico
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Calcula la iluminación perfecta para tu espacio con precisión profesional
                    </p>
                </div>

                {/* Input Card */}
                <Card className="mb-8 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calculator className="w-5 h-5" />
                            Datos del Proyecto
                        </CardTitle>
                        <CardDescription>
                            Ingresa las características de tu espacio para obtener un dimensionamiento preciso
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="surface">Superficie (m²)</Label>
                                <Input
                                    id="surface"
                                    type="number"
                                    placeholder="Ej: 50"
                                    value={surface}
                                    onChange={(e) => setSurface(e.target.value)}
                                    min="0"
                                    step="0.1"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="roomType">Tipo de Ambiente</Label>
                                <Select value={roomType} onValueChange={setRoomType}>
                                    <SelectTrigger id="roomType">
                                        <SelectValue placeholder="Selecciona..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="aula">Aula</SelectItem>
                                        <SelectItem value="oficina">Oficina</SelectItem>
                                        <SelectItem value="sala-reuniones">Sala de Reuniones</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lightType">Tipo de Tecnología</Label>
                                <Select value={lightType} onValueChange={setLightType}>
                                    <SelectTrigger id="lightType">
                                        <SelectValue placeholder="Selecciona..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="led">LED</SelectItem>
                                        <SelectItem value="fluorescente">Fluorescente</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Button
                            onClick={handleCalculate}
                            className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white"
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
                        <Alert className="mb-8 border-amber-200 bg-amber-50">
                            <AlertCircle className="h-4 w-4 text-amber-600" />
                            <AlertDescription className="text-amber-900">
                                <strong>Requerimiento calculado:</strong> {Math.round(results.lumens).toLocaleString()} lúmenes
                                (rango: {Math.round(results.lowerBound).toLocaleString()} - {Math.round(results.upperBound).toLocaleString()} lm)
                                con una incertidumbre de ±{(results.error * 100).toFixed(0)}%
                            </AlertDescription>
                        </Alert>

                        {/* Chart */}
                        <Card className="mb-8 shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    Curva de Dimensionamiento con Bandas de Incertidumbre
                                </CardTitle>
                                <CardDescription>
                                    Relación entre superficie y lúmenes requeridos para {getRoomTypeName(roomType)} con tecnología {lightType.toUpperCase()}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={400}>
                                    <ComposedChart data={results.chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis
                                            dataKey="surface"
                                            label={{ value: 'Superficie (m²)', position: 'insideBottom', offset: -5 }}
                                        />
                                        <YAxis
                                            label={{ value: 'Lúmenes (lm)', angle: -90, position: 'insideLeft' }}
                                        />
                                        <Tooltip
                                            formatter={(value) => `${Math.round(value).toLocaleString()} lm`}
                                            labelFormatter={(value) => `${value.toFixed(1)} m²`}
                                        />
                                        <Legend />
                                        <Area
                                            type="monotone"
                                            dataKey="upper"
                                            fill="#fbbf24"
                                            stroke="none"
                                            fillOpacity={0.2}
                                            name="Banda superior"
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="lower"
                                            fill="#ffffff"
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
                            <Card className="shadow-lg border-2 border-amber-200">
                                <CardHeader className="bg-gradient-to-r from-amber-50 to-white">
                                    <CardTitle className="flex items-center gap-2 text-amber-900">
                                        <Lightbulb className="w-5 h-5" />
                                        Recomendación de Luminarias
                                    </CardTitle>
                                    <CardDescription>
                                        Solución óptima para tu proyecto
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="p-4 bg-blue-50 rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">Producto recomendado</p>
                                                <p className="text-xl font-bold text-gray-900">
                                                    {results.recommendation.product.name}
                                                </p>
                                            </div>

                                            <div className="p-4 bg-green-50 rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">Cantidad necesaria</p>
                                                <p className="text-3xl font-bold text-green-700">
                                                    {results.recommendation.quantity} unidades
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="p-4 bg-purple-50 rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">Potencia instalada total</p>
                                                <p className="text-2xl font-bold text-purple-700">
                                                    {results.recommendation.totalWatts} W
                                                </p>
                                            </div>

                                            <div className="p-4 bg-amber-50 rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">Lúmenes totales</p>
                                                <p className="text-2xl font-bold text-amber-700">
                                                    {results.recommendation.totalLumens.toLocaleString()} lm
                                                </p>
                                            </div>

                                            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                                                <p className="text-sm text-gray-600 mb-1">Cumplimiento normativo</p>
                                                <p className="text-3xl font-bold text-green-700">
                                                    {results.recommendation.compliance}%
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Resumen técnico</h4>
                                        <ul className="space-y-2 text-sm text-gray-700">
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

                {/* Footer */}
                <footer className="mt-16 text-center text-sm text-gray-600 pb-8">
                    <p>© 2024 LuxTech - Soluciones Profesionales de Iluminación</p>
                    <p className="mt-2">Cálculos basados en normativas internacionales de iluminación</p>
                </footer>
            </div>
        </div>
    );
}