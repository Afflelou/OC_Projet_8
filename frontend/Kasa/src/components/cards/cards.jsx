import './cards.css';
import React from 'react';
import Card from './card';

const Cards = ({ properties }) => {
    return (
        <section className="properties">
            {properties.map((property) => (
                <Card key={property.id} property={property} />
            ))}
        </section>
    );
};

export default Cards;