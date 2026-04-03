import { useEffect, useState } from "react";
import axios from "axios";
import './card.css';

const Card = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/properties");
                setProperties(response.data);
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };
        fetchProperties();
    }, []);
    return (
        <section className="properties">
            {properties.map((property) => (
                <div key={property.id}>
                    <h2>{property.title}</h2>
                    <img src={property.cover} alt={property.title} width="300" />
                </div>
            ))}
        </section>
    );
};

export default Card;