import { areaMapping } from "../data/areaMapping";

type Apartment = {
    id: number;
    ward: string;
};

type RecommendedArea = {
    id: string;
};

export function matchApartments(
    apartments: Apartment[],
    areas: RecommendedArea[]
) {
    return apartments.filter((apartment) =>
        areas.some(
            (area) => areaMapping[area.id] === apartment.ward
        )
    );
}