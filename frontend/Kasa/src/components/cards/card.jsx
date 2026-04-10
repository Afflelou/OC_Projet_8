import './card.css';

const Card = ({ property }) => {
    return (
        <div className="card">
            <img src={property.cover} alt={property.title} className="card-image" />
            <div className="card-title">{property.title}</div>
        </div>
    );
};

export default Card;