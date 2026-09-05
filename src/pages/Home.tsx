import "./Home.css"
import Assistant from "./Assistant";
import { useRef } from "react";

function Home() {
    const searchRef = useRef<HTMLElement>(null);

    const handleScroll = () => {
        searchRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
        });
    };

    return (
        <main>
                <section className="hero py-5 d-flex align-items-center">
                    <div className="hero-container text-center mx-5">
                        <i className="bi bi-house-heart-fill banner-icon"></i>
                        <h1 className="display-4 fw-bold">
                            ぴったりの住まいを探す
                        </h1>
                        <p className="lead">
                            エリアや家賃などの希望条件を教えてください。
                        </p>
                        <button onClick={handleScroll} className="btn btn-lg">はじめる <i className="bi bi-arrow-down"></i></button>
                    </div>
                </section>
                <section id="features-section"  className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 border-end">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-robot fs-2"></i>
                                    <div>
                                        <h3 className="h5 mb-1">AI-Powered Search</h3>
                                        <p className="mb-0">
                                            Tell us what you want in natural language.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 border-end">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-train-front fs-2"></i>
                                    <div>
                                        <h3 className="h5 mb-1">Smart Recommendations</h3>
                                        <p className="mb-0">
                                            Get area and apartment suggestions that fit your needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 border-end">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-map fs-2"></i>

                                    <div>
                                        <h3 className="h5 mb-1">Detailed Area Insights</h3>
                                        <p className="mb-0">
                                            See commute times, rent trends, and neighborhood details.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-heart fs-2"></i>
                                    <div>
                                        <h3 className="h5 mb-1">Save & Compare</h3>
                                        <p className="mb-0">
                                            Save your favorite places and compare options easily.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={searchRef}>
                    <Assistant />
                </section>
                <section id="featured-apartments">
                    
                </section>
            
        </main>
        

    );
}

export default Home;