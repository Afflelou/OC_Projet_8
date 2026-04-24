import './tags.css';

function Tags({ tags }) {
    if (!tags) return null;
    return (
        <div className="tags">
            {tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
            ))}
        </div>
    );
}

export default Tags;
