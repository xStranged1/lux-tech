import type { CalculationParams, CalculationResult } from '@/const/types';
import { FORMULAS, UNCERTAINTY_RATES } from '@/const/const';

export function calculateLumensWithUncertainty(params: CalculationParams): CalculationResult {
    const { surface, environment, lightingType } = params;
    const formula = FORMULAS[environment];
    const uncertaintyRate = UNCERTAINTY_RATES[lightingType];

    // Calculate required lumens using the formula: lumens = slope * surface + intercept
    const requiredLumens = formula.slope * surface + formula.intercept;

    // Calculate uncertainty
    const uncertainty = requiredLumens * uncertaintyRate;

    // Calculate min and max lumens
    const minLumens = requiredLumens - uncertainty;
    const maxLumens = requiredLumens + uncertainty;

    return {
        requiredLumens: Math.round(requiredLumens),
        minLumens: Math.round(minLumens),
        maxLumens: Math.round(maxLumens),
        uncertainty: Math.round(uncertainty)
    };
}

