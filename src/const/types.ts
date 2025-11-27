export type EnvironmentType = 'aula' | 'oficina' | 'sala_reuniones';
export type LightingType = 'led' | 'fluorescente';

export interface CalculationParams {
    surface: number;
    environment: EnvironmentType;
    lightingType: LightingType;
}

export interface LumensFormula {
    slope: number;
    intercept: number;
}

export interface CalculationResult {
    requiredLumens: number;
    minLumens: number;
    maxLumens: number;
    uncertainty: number;
}

export interface LuminaireRecommendation {
    quantity: number;
    installedPower: number;
    totalLumens: number;
    compliance: boolean;
    compliancePercentage: number;
}