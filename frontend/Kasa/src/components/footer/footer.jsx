import KasaFooter from "../../assets/kasa-footer.png";
import KasaFooterMobile from "../../assets/kasa-footer-m.png";
import './footer.css';

function Footer() {
    return (
        <footer>
            <picture>
                <source srcSet={KasaFooterMobile} media="(max-width: 768px)" />
                <img src={KasaFooter} alt="Kasa Footer" />
            </picture>
        </footer>
    );
}

export default Footer;