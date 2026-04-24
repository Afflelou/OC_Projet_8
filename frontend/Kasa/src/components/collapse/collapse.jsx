import { useState } from 'react';
import './collapse.css';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <button
                className="collapse-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span className={`collapse-chevron ${isOpen ? 'open' : ''}`}>⌃</span>
            </button>
            <div className={`collapse-body ${isOpen ? 'open' : ''}`}>
                {Array.isArray(content) ? (
                    <ul className="collapse-list">
                        {content.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
}

export default Collapse;
