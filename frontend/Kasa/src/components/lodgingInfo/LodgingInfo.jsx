import './lodgingInfo.css';
import TitleLocation from '../titleLocation/TitleLocation';
import Tags from '../tags/Tags';
import Host from '../host/Host';
import Rating from '../rating/Rating';

function LodgingInfo({ title, location, tags, host, rating }) {
    return (
        <div className="lodging-info">
            <div className="lodging-info-left">
                <TitleLocation title={title} location={location} />
                <Tags tags={tags} />
            </div>
            <div className="lodging-info-right">
                <Host host={host} />
                <Rating rating={rating} />
            </div>
        </div>
    );
}

export default LodgingInfo;
