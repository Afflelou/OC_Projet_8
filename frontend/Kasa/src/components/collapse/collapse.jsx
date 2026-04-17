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
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Collapse;
