import type { Property } from "../types/property";

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
                    <button className="btn btn-primary mt-auto">
                                        詳細を見る
                    </button>
                </div>
            </div>
    );
}

export default PropertyCard;