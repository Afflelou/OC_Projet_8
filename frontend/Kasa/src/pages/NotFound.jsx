import { Link } from "react-router-dom";
import "./notfound.css";

function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound-code">404</p>
      <p className="notfound-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="notfound-link">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;
