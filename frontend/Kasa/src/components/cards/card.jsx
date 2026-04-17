import './card.css';
import { Link } from 'react-router-dom';

const Card = ({ property }) => {
    return (
        <div className="card">
            <Link to={`/lodging/${property.id}`}>
                <img src={property.cover} alt={property.title} className="card-image" />
                <div className="card-title">{property.title}</div>
            </Link>
        </div>
    );
};

export default Card;