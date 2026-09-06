import "./Assistant.css"
import { useState } from "react";
import { matchApartments } from "../utils/matchApartments";

function Assistant() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const askAI = async () => {
        if (!input.trim()) return;

        setLoading(true);
        setResponse("");

        try {
            const result = await fetch("http://localhost:3001/api/ai-test", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: input,
                }),
            });

            if (!result.ok) {
                throw new Error("Request failed");
            }

            const data = await result.json();

            setResponse(data.response);
        } catch (error) {
            console.error(error);
            setResponse("AIに接続できませんでした。");
        } finally {
            setLoading(false);
        }
    };

    const testApartments = [
    {
        id: 1,
        ward: "北区",
    },
    {
        id: 2,
        ward: "福島区",
    },
    {
        id: 3,
        ward: "天王寺区",
    },
];

const testAreas = [
    {
        id: "kita",
    },
    {
        id: "fukushima",
    },
];

const matchedApartments = matchApartments(
    testApartments,
    testAreas
);

console.log(matchedApartments);

    return (
        <section className="py-5">
            <div className="container">
                <h2>AIアシスタント</h2>

                <textarea
                    className="form-control mb-3"
                    rows={4}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="メッセージを入力してください"
                />

                <button
                    className="btn btn-primary"
                    onClick={askAI}
                    disabled={loading}
                >
                    {loading ? "考え中..." : "AIに聞く"}
                </button>

                {response && (
                    <div className="mt-4">
                        {response.areas.map((area: any) => (
                            <div key={area.name} className="mb-4">
                                <h3>{area.name}</h3>
                                <p>{area.reason}</p>
                                <strong>Score: {area.score}/10</strong>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Assistant;