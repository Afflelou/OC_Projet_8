import './lodgingCollapses.css';
import Collapse from '../collapse/collapse';

function LodgingCollapses({ description, equipments }) {
    return (
        <div className="lodging-collapses">
            <Collapse title="Description" content={description} />
            <Collapse title="Équipements" content={equipments} />
        </div>
    );
}

export default LodgingCollapses;
