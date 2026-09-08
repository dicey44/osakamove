import type { Property } from "../types/property";
import { Link } from "react-router-dom";

type PropertyCardProps = {
    property: Property;
};

function PropertyCard({ property }: PropertyCardProps) {
    return (
            <div className="card h-100 shadow-sm">
                <img
                    src={property.image}
                    className="card-img-top"
                    alt={property.title}
                />

                <div className="card-body d-flex flex-column">
                    <h3 className="card-title h5">
                        {property.title}
                    </h3>

                    <p className="card-text mb-2">
                        {property.layout} ・ {property.size}m²
                    </p>

                    <p className="card-text mb-2">
                        ¥{property.rent.toLocaleString()} / 月
                    </p>

                    <p className="card-text mb-2">
                        {property.station} 徒歩{property.walkToStation}分
                    </p>

                    <p className="card-text">
                        {property.ward}
                    </p>
                    <Link className="btn btn-primary mt-auto" to={`/osakamove/properties/${property.id}`} target="_blank">
                                        詳細を見る
                    </Link>
                </div>
            </div>
    );
}

export default PropertyCard;