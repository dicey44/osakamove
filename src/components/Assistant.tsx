import "./Assistant.css"
import { useState } from "react";
import { findRecommendedProperties } from "../utils/findRecommendedProperties";
import { properties } from "../data/properties";
import type { Property } from "../types/property";
import PropertyCard from "./PropertyCard";
import type { AIResponse } from "../types/ai";

function Assistant() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState<AIResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [matchedProperties, setMatchedProperties] = useState<Property[]>([])

    const askAI = async () => {
        if (!input.trim()) return;

        setLoading(true);
        setResponse(null);
        setError(null);

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

            const goodProperties = findRecommendedProperties(properties, data.response.areas, data.response.criteria);
            setMatchedProperties(goodProperties);
            console.log(goodProperties);
            setResponse(data.response);
        } catch (error) {
            console.error(error);
            setError("AIに接続できませんでした。");
        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="py-5">
            <div className="container">
                <h2>どこへ引っ越して、どんな住まいをお探しですか ?</h2>

                <textarea
                    className="form-control mb-3"
                    rows={4}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="例 : 大阪に引っ越す予定です。家賃は月10万円以下で、都心までの通勤時間は30分以内にしたいです。"
                />

                <button
                    id="ask-ai-btn"
                    className="btn btn-primary"
                    onClick={askAI}
                    disabled={loading}
                >
                    <div className="d-flex align-items-center gap-2 text-muted">
                        <i className="bi bi-robot fs-4"></i>
                        <span>{loading ? "条件を分析しています" : "AIに聞く"}</span>
                        
                            {loading && 
                            <span className="d-flex gap-1">
                                <span className="thinking-dot"></span>
                                <span className="thinking-dot"></span>
                                <span className="thinking-dot"></span>
                            </span>
                            }                           
                        
                    </div>
                </button>

                {response && (
                    <div className="mt-4 ai-response">
                        {response.areas.map((area) => (
                            <div key={area.name} className="mb-4">
                                <h3>{area.name}</h3>
                                <p>{area.reason}</p>
                                {area.score && (<strong>Score: {area.score}/10</strong>)}
                            </div>
                        ))}
                    </div>
                )}

                {
                    (response && matchedProperties.length === 0) ? 
                    <h3>該当する物件が見つかりません</h3> : ""
                }

                {matchedProperties.length > 0 && (
                    <div className="mt-5">
                        <h2>おすすめ物件</h2>

                        <div className="row g-4" id="recommended-properties">
                            
                            {matchedProperties.map((property) => (
                                <div key={property.id} className="col-12 col-md-6 col-lg-4">
                                    <PropertyCard property={property} />
                                </div>
                            ))}
                            
                        </div>
                    </div>
                )}
                {error && (
                    <div className="alert alert-danger mt-4">
                        {error}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Assistant;