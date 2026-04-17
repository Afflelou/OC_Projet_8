import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Lodging() {
    const { id } = useParams();
    const [property, setProperty] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then(response => response.json())
            .then(data => {
                setProperty(data);
            })
            .catch(error => {
                console.error('Error fetching lodging data:', error);
            });
    }, [id]);

    return (
        <div>
            <h1>Logement : {id}</h1>
            <img src={property.cover} alt={property.title} />
        </div>
    );
}

export default Lodging;
