import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-5"> 
                        <h2 className="h4 fw-bold"> 
                            <i className="bi bi-house-heart-fill me-2"></i> 
                            OsakaMove 
                        </h2> 
                        <p className="text-secondary mb-0"> あなたにぴったりの住まい探しをサポートします。</p>
                    </div>
                    
                    <div className="col-6 col-md-3">
                        <h3 className="h6 fw-bold mb-3">メニュー</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-secondary text-decoration-none">
                                    ホーム
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/search" className="text-secondary text-decoration-none">
                                    物件を探す
                                </Link>
                            </li>
                        </ul>
                    </div>

                    
                    <div className="col-6 col-md-4">
                        <h3 className="h6 fw-bold mb-3">OsakaMoveについて</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    サービスについて
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">
                                    お問い合わせ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-secondary text-decoration-none">
                                    プライバシーポリシー
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-secondary my-4" />

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                    <small className="text-secondary">
                        © 2026 OsakaMove. All rights reserved.
                    </small>

                    <div className="d-flex gap-3">
                        <a href="https://x.com/" target="_blank" className="text-secondary fs-5" aria-label="X">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="text-secondary fs-5" aria-label="Instagram">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://github.com/" target="_blank" className="text-secondary fs-5" aria-label="GitHub">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
