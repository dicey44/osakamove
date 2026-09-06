import { areaMapping } from "../data/areaMapping";
import type { Property } from "../types/property";

type RecommendedArea = {
    id: string;
};

export function matchProperties(
    properties: Property[],
    areas: RecommendedArea[]
) {
    return properties.filter((property) =>
        areas.some(
            (area) => areaMapping[area.id] === property.ward
        )
    );
}