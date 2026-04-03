import React from 'react';
import mainImg from "../../assets/kasa-main.png";
import './banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <img src={mainImg} alt="Kasa Main" />
            <h1>Chez vous, partout ailleurs</h1>
        </section>
    );
};

export default Banner;