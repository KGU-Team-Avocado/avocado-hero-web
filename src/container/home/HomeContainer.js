import { Link } from "react-router-dom";
import BorderHero from "../../component/home/heroes/BorderHero";
import CenteredHero from "../../component/home/heroes/CenteredHero";
import CenteredScreenshotHero from "../../component/home/heroes/CenteredScreenshotHero";
import ResponsiveLeftAlignedHero from "../../component/home/heroes/ResponsiveLeftAlignedHero";
import VerticallyCenteredHero from "../../component/home/heroes/VerticallyCenteredHero";
import MainTitle from "../../component/home/title/MainTitle";
import './home.css'

const HomeContainer = () => {
    return (
        <div>
            <MainTitle/>
            {/* divider 조만간 삭제 예정. 경계명 보여주기 위해 넣음 */}
            {/* <div className="b-example-divider"></div> */}
            <CenteredHero/>
            {/* <div className="b-example-divider"></div> */}
            <CenteredScreenshotHero/>
            {/* <div className="b-example-divider"></div> */}
            <ResponsiveLeftAlignedHero/>
            <VerticallyCenteredHero/>
            <BorderHero/>
        </div>
    )
}

export default HomeContainer;