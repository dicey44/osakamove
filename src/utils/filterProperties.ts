import type { Property } from "../types/property";

export type Criteria = {
    maxRent: number | null;
    minSize: number | null;
    petFriendly: boolean | null;
    maxWalkToStation: number | null;
    buildingType: string | null;
}

export function filterProperties(properties: Property[], criteria: Criteria) {

    let isApartment = false;

    if (criteria.buildingType === "apartment") {
        isApartment = true;
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
            (!isApartment && property.type === "アパート") 
            ||
            (!isApartment && property.type === "マンション")
            ||
            (isApartment && property.type === "一戸建て")
        ) {
            return false;
        }
        

        return true;
    })
}