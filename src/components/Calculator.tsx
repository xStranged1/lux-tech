import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SurfaceInput } from './Calculator/SurfaceInput';
import { EnvironmentSelector } from './Calculator/EnvironmentSelector';
import { LightingTypeSelector } from './Calculator/LightingTypeSelector';
import { ResultsDisplay } from './Calculator/ResultsDisplay';
import { CalculationParams, EnvironmentType, LightingType } from '@/types';
import { calculateLumensWithUncertainty } from '@/lib/calculations';
import { ENVIRONMENT_LABELS } from '@/lib/constants';

export function Calculator() {
    const [surface, setSurface] = useState<number>(0);
    const [environment, setEnvironment] = useState<EnvironmentType>('oficina');
    const [lightingType, setLightingType] = useState<LightingType>('led');
    const [result, setResult] = useState<ReturnType<typeof calculateLumensWithUncertainty> | null>(null);

    const handleCalculate = () => {
        if (surface <= 0) {
            alert('Por favor ingrese una superficie válida mayor a 0');
            return;
        }

        const params: CalculationParams = {
            surface,
            environment,
            lightingType
        };

        const calculationResult = calculateLumensWithUncertainty(params);
        setResult(calculationResult);
    };

    const handleReset = () => {
        setSurface(0);
        setEnvironment('oficina');
        setLightingType('led');
        setResult(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Parámetros del Cálculo</CardTitle>
                        <CardDescription>
                            Complete los datos de su proyecto de iluminación
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <SurfaceInput value={surface} onChange={setSurface} />
                        <EnvironmentSelector value={environment} onChange={setEnvironment} />
                        <LightingTypeSelector value={lightingType} onChange={setLightingType} />

                        <div className="flex gap-3 pt-4">
                            <Button
                                onClick={handleCalculate}
                                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold"
                                size="lg"
                            >
                                Calcular
                            </Button>
                            {result && (
                                <Button
                                    onClick={handleReset}
                                    variant="outline"
                                    size="lg"
                                >
                                    Limpiar
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {result && (
                    <ResultsDisplay
                        result={result}
                        environment={ENVIRONMENT_LABELS[environment]}
                        surface={surface}
                    />
                )}
            </div>
        </div>
    );
}