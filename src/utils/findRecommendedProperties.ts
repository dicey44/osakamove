import type { Property } from "../types/property";
import type { Criteria } from "./filterProperties";
import { matchProperties } from "./matchProperties";
import { filterProperties } from "./filterProperties";

type RecommendedArea = {
    id: string;
};

export function findRecommendedProperties(
    properties: Property[],
    areas: RecommendedArea[],
    criteria: Criteria
) {
    const areaMatches = matchProperties(properties, areas);

    console.log("this is areaMatches");
    console.log(areaMatches)

    const filteredProperties = filterProperties(
        areaMatches,
        criteria
    );

    return filteredProperties;
}