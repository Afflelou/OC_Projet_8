import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './rating.css';

function Rating({ rating }) {
    const score = parseInt(rating, 10);
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map(i => (
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`star ${i <= score ? 'filled' : ''}`}
                />
            ))}
        </div>
    );
}

export default Rating;
