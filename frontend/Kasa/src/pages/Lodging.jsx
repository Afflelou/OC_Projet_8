import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slideshow from '../components/slideshow/Slideshow';
import LodgingInfo from '../components/lodgingInfo/LodgingInfo';
import LodgingCollapses from '../components/lodgingCollapses/LodgingCollapses';

function Lodging() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then(response => response.json())
            .then(data => setProperty(data))
            .catch(error => console.error('Error fetching lodging data:', error));
    }, [id]);

    if (!property) return null;

    return (
        <div>
            <Slideshow pictures={property.pictures} />
            <LodgingInfo
                title={property.title}
                location={property.location}
                tags={property.tags}
                host={property.host}
                rating={property.rating}
            />
            <LodgingCollapses
                description={property.description}
                equipments={property.equipments}
            />
        </div>
    );
}

export default Lodging;
