import type { Property } from "../types/property";

export type Criteria = {
    maxRent: number | null;
    minSize: number | null;
    petFriendly: boolean | null;
    maxWalkToStation: number | null;
    buildingType: string | null;
}

export function filterProperties(properties: Property[], criteria: Criteria) {

    let apartmentOrHouse = null;

    if (criteria.buildingType === "apartment") {
        apartmentOrHouse = "apartment";
    } else if (criteria.buildingType === "house") {
        apartmentOrHouse = "house";
    }


    return properties.filter(property => {
        if (
            criteria.maxRent !== null &&
            property.rent > criteria.maxRent
        ) {
            return false;
        }

        if (
            criteria.minSize !== null &&
            property.size < criteria.minSize
        ) {
            return false;
        }

        if (
            criteria.petFriendly === true &&
            property.petFriendly !== true
        ) {
            return false;
        }

        if (
            criteria.maxWalkToStation !== null &&
            property.walkToStation > criteria.maxWalkToStation
        ) {
            return false;
        }

        
        if (
            apartmentOrHouse === "house" && property.type !== "一戸建て"
        ) {
            return false;
        }

        if (
            apartmentOrHouse === "apartment" && property.type === "一戸建て"
        ) {
            return false;
        }
        

        return true;
    })
}