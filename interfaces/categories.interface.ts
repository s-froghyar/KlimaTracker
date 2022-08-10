export enum Category {
    ACCOMODATION,
    AIR,
    ELECTRICITY,
    FUEL,
    RAIL,
    ROAD,
    SEA,
    TREATMENT,
    VEHICLE,
    PC,
    WASTE,
    CLOTHING,
    GENERIC
}

export interface ICategory {
    name: string;
    categoryType: Category,
    iconUrl: string,
}
