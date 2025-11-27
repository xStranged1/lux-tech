import type { EnvironmentType, LightingType, LumensFormula } from "./types";

export const FORMULAS: Record<EnvironmentType, LumensFormula> = {
    aula: { slope: 985.2, intercept: 1200.4 },
    oficina: { slope: 890.6, intercept: 540.1 },
    sala_reuniones: { slope: 750.4, intercept: 300.2 }
};

export const UNCERTAINTY_RATES: Record<LightingType, number> = {
    led: 0.08,
    fluorescente: 0.12
};

export const ENVIRONMENT_LABELS: Record<EnvironmentType, string> = {
    aula: 'Aula',
    oficina: 'Oficina',
    sala_reuniones: 'Sala de Reuniones'
};

export const LIGHTING_LABELS: Record<LightingType, string> = {
    led: 'LED',
    fluorescente: 'Fluorescente'
};

export const COMPANY_INFO = {
    name: 'LuxCalc Solutions',
    tagline: 'Iluminación Inteligente, Cálculo Preciso',
    description: 'Especialistas en diseño y dimensionamiento de sistemas de iluminación profesional'
};