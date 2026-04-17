import KasaFooter from "../../assets/kasa-footer.png";
import './footer.css';

function Footer() {
    return (
        <footer>
            <img src={KasaFooter} alt="Kasa logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
