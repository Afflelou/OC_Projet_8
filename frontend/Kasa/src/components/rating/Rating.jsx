import './rating.css';

function Rating({ rating }) {
    const score = parseInt(rating, 10);
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map(i => (
                <span key={i} className={`star ${i <= score ? 'filled' : ''}`}>★</span>
            ))}
        </div>
    );
}

export default Rating;
