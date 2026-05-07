import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './slideshow.css';

function Slideshow({ pictures }) {
    const [index, setIndex] = useState(0);

    if (!pictures || pictures.length === 0) return null;

    const prev = () => setIndex((index - 1 + pictures.length) % pictures.length);
    const next = () => setIndex((index + 1) % pictures.length);

    return (
        <div className="slideshow">
            <img id="slideshow-img" src={pictures[index]} alt="logement" className="slideshow-img" />
            {pictures.length > 1 && (
                <>
                    <button id="slideshow-prev" className="slideshow-arrow slideshow-arrow-left" onClick={prev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button id="slideshow-next" className="slideshow-arrow slideshow-arrow-right" onClick={next}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <span id="slideshow-counter" className="slideshow-counter">{index + 1} / {pictures.length}</span>
                </>
            )}
        </div>
    );
}

export default Slideshow;
