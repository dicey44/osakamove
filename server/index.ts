import express from "express";
import cors from "cors";
import "dotenv/config";
import OpenAI from "openai";

const app = express();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

app.use(cors());
app.use(express.json());

app.get("/api/test", (_req, res) => {
    res.json({
        message: "OsakaMove backend is working!",
    });
});

app.post("/api/ai-test", async (req, res) => {
    try {
        const { message } = req.body;

        const response = await openai.responses.create({
            model: "gpt-5.6-luna",
            tools: [
                {
                    type: "web_search",
                },
            ],
            instructions: `
            You are the AI relocation assistant for OsakaMove, an apartment-finding
            website focused specifically on Osaka, Japan.

            Your job is to help users decide which areas of Osaka may be suitable
            for them to live in.
            
            When answering questions about Osaka neighborhoods:
            - Use web search when current or detailed local information would be useful.
            - Consider factors such as rent, transportation, commute access, safety,
            atmosphere, convenience, and suitability for different lifestyles.
            - Do not invent specific apartment listings.
            - Do not claim that an area is suitable without explaining why.
            - Give practical recommendations that would help someone actually choose
            where to live.
            - If someone says they are a foreigner, always add a disclaimer that you cannot give accurate information on whether foreigners are accepted at a property.
            - For each recommended area, provide a lowercase English ID that is
            consistent and suitable for matching against application data.
            - Use simple IDs such as "fukushima", "tennoji", or "naniwa".
            - The ID should be the ward that the neighborhood is in, not the neighborhood itself.
            - The ID should not contain spaces.
            - Extract any property requirements explicitly stated or clearly implied
            by the user's request.
            - Return numerical requirements in the criteria object.
            - maxRent should be the maximum monthly rent in Japanese yen.
            - minSize should be the minimum property size in square meters.
            - petFriendly should be true only when the user wants a pet-friendly property.
            - maxWalkToStation should be the maximum walking time to a station in minutes.
            - buildingType should specify whether it is an apartment or house.
            - buildingType should only be "house" or "apartment".
            - If the user does not specify a criterion, return null.
            - Never invent requirements that the user did not provide.
            - Do not give a score unless you are ranking multiple things.
            - The score you give should always be a whole number out of ten, never exceeding ten.
            
            `,
            input: message,

            text: {
                format: {
                    type: "json_schema",
                    name: "area_recommendations",
                    strict: true,
                    schema: {
                        type: "object",
                        properties: {
                            areas: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string",
                                        },
                                        name: {
                                            type: "string",
                                        },
                                        reason: {
                                            type: "string",
                                        },
                                        score: {
                                            type: ["number", "null"],                
                                        },
                                    },
                                    required: ["id", "name", "reason", "score"],
                                    additionalProperties: false,
                                },
                            },

                            criteria: {
                                type: "object",
                                properties: {
                                    maxRent: {
                                        type: ["number", "null"],
                                    },
                                    minSize: {
                                        type: ["number", "null"]
                                    },
                                    petFriendly: {
                                        type: ["boolean", "null"]
                                    },
                                    maxWalkToStation: {
                                        type: ["number", "null"]
                                    },
                                    buildingType: {
                                        type: ["string", "null"]
                                    },
                                },
                                required: [
                                    "maxRent",
                                    "minSize",
                                    "petFriendly",
                                    "maxWalkToStation",
                                    "buildingType",                                    
                                ],
                                additionalProperties: false,
                            },
                        },
                        required: ["areas", "criteria"],
                        additionalProperties: false,
                    },
                },
            },
        });

        res.json({
            response: JSON.parse(response.output_text),
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to communicate with OpenAI",
        });
    }
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});