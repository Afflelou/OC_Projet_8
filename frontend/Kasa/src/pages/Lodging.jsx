import { useParams } from 'react-router-dom';

function Lodging() {
    const { id } = useParams();

    return (
        <h1>Logement : {id}</h1>
    );
}

export default Lodging;
