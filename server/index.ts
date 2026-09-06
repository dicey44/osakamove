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