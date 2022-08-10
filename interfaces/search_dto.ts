export default interface SearchDto {
    possible_filters: SearchFilters;
    results: FactorSource[];
    current_page: number;
    last_page: number;
    total_results: number;
}

export interface FactorSource {
    id: string;
    name: string;
    category: string;
    sector: string;
    source: string;
    source_link: string;
    uncertainty: any;
    year: string;
    region: string;
    region_name: string;
    description: string;
    unit_type: string[];
    unit: string;
    lca_activity: string;
    supported_calculation_methods: string[];
    factor: number;
    factor_calculation_method: string;
    factor_calculation_origin: string;
    constituent_gases: ConstituentGases;
}

export interface ConstituentGases {
    co2e_total: number | null;
    co2e_other: number | null
    co2: number | null
    ch4: number | null
    n2o: number | null
}

export interface SearchFilters {
    category: string[];
    region: SearchRegion[];
    sector: string[];
    source: string[];
    unit_type: string[];
    year: string[];
}

export interface SearchRegion {
    id: string;
    name: string;
}