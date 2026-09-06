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
            `,
            input: message,
        });

        res.json({
            response: response.output_text,
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