import Banner from '../components/banner/banner';
import CollapseList from '../components/collapseList/collapseList';
import aboutImg from "../assets/about-banner.png";

function About() {
    return (
        <div>
            <Banner imgSrc={aboutImg} />
            <main>
                <CollapseList />
            </main>
        </div>
    );
}

export default About;
