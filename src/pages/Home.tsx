import "./Home.css"
import Assistant from "../components/Assistant";
import { useRef, useEffect } from "react";


function Home() {
    const searchRef = useRef<HTMLElement>(null);

    const handleScroll = () => {
        searchRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
        });
    };

    useEffect(() => {
        if (window.location.hash === "#search") {
            document.getElementById("search")?.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll(".scroll-animation");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
                <section className="container-fluid hero py-5 d-flex align-items-center">
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
                <section id="features-section" className="py-5 scroll-animation">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 border-end">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-robot fs-2"></i>
                                    <div>
                                        <h3 className="h5 mb-1">AI搭載の物件検索</h3>
                                        <p className="mb-0">
                                            希望条件を自然な言葉で入力するだけで、ぴったりの物件を探せます。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 border-end">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-train-front fs-2"></i>
                                    <div>
                                        <h3 className="h5 mb-1">おすすめ物件・エリア</h3>
                                        <p className="mb-0">
                                            あなたの希望やライフスタイルに合ったエリアや物件をご提案します。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3 border-end">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-map fs-2"></i>
                                    <div>
                                        <h3 className="h5 mb-1">エリア情報を詳しくチェック</h3>
                                        <p className="mb-0">
                                            通勤時間や家賃相場、周辺環境など、暮らしに役立つ情報を確認できます。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="bi bi-heart fs-2"></i>
                                    <div>
                                        <h3 className="h5 mb-1">お気に入り・比較</h3>
                                        <p className="mb-0">
                                            気になる物件を保存して、複数の候補を簡単に比較できます。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section ref={searchRef} id="search" className="scroll-animation">
                    <Assistant />
                </section>
                
            
        </main>
        

    );
}

export default Home;