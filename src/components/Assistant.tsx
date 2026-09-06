import "./Assistant.css"
import { useState } from "react";
import { findRecommendedProperties } from "../utils/findRecommendedProperties";
import { properties } from "../data/properties";
import type { Property } from "../types/property";

function Assistant() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [matchedProperties, setMatchedProperties] = useState<Property[]>([])

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
            console.log("AI response:", data.response);

            const matchedProperties = findRecommendedProperties(properties, data.response.areas, data.response.criteria);
            setMatchedProperties(matchedProperties);

            setResponse(data.response);
        } catch (error) {
            console.error(error);
            setResponse("AIに接続できませんでした。");
        } finally {
            setLoading(false);
        }
    };


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
                                {area.score && (<strong>Score: {area.score}/10</strong>)}
                            </div>
                        ))}
                    </div>
                )}
                {matchedProperties.length > 0 && (
                    <div className="mt-5">
                        <h2>Recommended Properties</h2>

                        {matchedProperties.map((property) => (
                            <div key={property.id} className="mb-4">
                                <h3>{property.title}</h3>
                                <p>{property.ward}</p>
                                <p>¥{property.rent.toLocaleString()} / month</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Assistant;