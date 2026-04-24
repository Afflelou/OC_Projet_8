import './host.css';

function Host({ host }) {
    if (!host) return null;
    return (
        <div className="host">
            <p className="host-name">{host.name}</p>
            <img src={host.picture} alt={host.name} className="host-picture" />
        </div>
    );
}

export default Host;
