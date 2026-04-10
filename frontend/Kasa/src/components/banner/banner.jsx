import React from 'react';
import './banner.css';

const Banner = ({ imgSrc, title }) => {
    return (
        <section className="banner">
            <img src={imgSrc} alt="Kasa Main" />
            {title && <h1>{title}</h1>}
        </section>
    );
};

export default Banner;