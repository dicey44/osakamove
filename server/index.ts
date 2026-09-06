import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (_req, res) => {
    res.json({
        message: "OsakaMove backend is working!",
    });
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});