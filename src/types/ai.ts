export interface AIResponse {
    areas: {
        id: string;
        name: string;
        reason: string;
        score: number;
    }[];

    criteria: {
        maxRent: number | null;
        minSize: number | null;
        petFriendly: boolean | null;
        maxWalkToStation: number | null;
    };
}