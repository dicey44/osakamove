import { useParams } from "react-router-dom";
import { properties } from "../data/properties";
import { Link } from "react-router-dom";

export default function PropertyDetails() {
    const { id } = useParams();

    const property = properties.find(
        property => property.id === Number(id)
    )

    if (!property) {
        return (
            <div className="container py-5">
                <h1>物件が見つかりません</h1>
            </div>
        );

    }

    return (
        
        <section className="py-5 bg-light">
            <div className="container">
                <Link to="/" className="btn btn-outline-secondary mb-4">
                    <i className="bi bi-arrow-left me-2"></i>
                    ホームに戻る
                </Link>
                <div className="card border-0 shadow-sm overflow-hidden">

                    {/* Title */}
                    <div className="card-body px-4 pt-4 pb-3">
                        <h1 className="display-6 fw-bold mb-0 text-center">
                            {property.title}
                        </h1>
                    </div>

                    {/* Image */}
                    <div className="d-flex justify-content-center">
                        <img
                            src={property.image}
                            className="img-fluid rounded w-75"
                            alt={property.title}
                        />
                    </div>
                    

                    {/* Property information */}
                    <div className="card-body p-4 p-lg-5">

                        {/* Main details */}
                        <div className="row g-4 mb-4">

                            <div className="col-md-6">
                                <div className="border rounded-3 p-3 h-100">
                                    <small className="text-muted d-block mb-1">
                                        間取り・広さ
                                    </small>
                                    <h2 className="h4 mb-0 fw-bold">
                                        {property.layout} ・ {property.size}m²
                                    </h2>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="border rounded-3 p-3 h-100">
                                    <small className="text-muted d-block mb-1">
                                        家賃
                                    </small>
                                    <h2 className="h4 mb-0 fw-bold">
                                        ¥{property.rent.toLocaleString()} / 月
                                    </h2>
                                </div>
                            </div>

                        </div>

                        {/* Location */}
                        <div className="border-bottom pb-4 mb-4">
                            <h3 className="h5 fw-bold mb-2">
                                <i className="bi bi-train-front me-2"></i>
                                アクセス
                            </h3>

                            <p className="mb-0 text-muted">
                                {property.station} 徒歩{property.walkToStation}分
                            </p>
                        </div>

                        {/* Property details */}
                        <div className="mb-4">
                            <h3 className="h5 fw-bold mb-3">
                                物件情報
                            </h3>

                            <div className="row g-3">

                                <div className="col-12 col-sm-6">
                                    <div className="d-flex justify-content-between border-bottom pb-2">
                                        <span className="text-muted">物件タイプ</span>
                                        <span className="fw-semibold">
                                            {property.type}
                                        </span>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6">
                                    <div className="d-flex justify-content-between border-bottom pb-2">
                                        <span className="text-muted">管理費</span>
                                        <span className="fw-semibold">
                                            ¥{property.managementFee.toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6">
                                    <div className="d-flex justify-content-between border-bottom pb-2">
                                        <span className="text-muted">築年数</span>
                                        <span className="fw-semibold">
                                            {property.yearsOld}年
                                        </span>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6">
                                    <div className="d-flex justify-content-between border-bottom pb-2">
                                        <span className="text-muted">ペット</span>
                                        <span className="fw-semibold">
                                            {property.petFriendly ? "可" : "不可"}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Action */}
                        <div className="d-grid d-md-flex justify-content-md-end pt-2">
                            <button className="btn btn-primary btn-lg px-5">
                                この物件にお問い合わせ
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}