import { Link } from "react-router-dom";
import CenteredHero from "../../component/home/heroes/CenteredHero";
import CenteredScreenshotHero from "../../component/home/heroes/CenteredScreenshotHero";
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
            <div>
                <Link to='example'>DB 예제 페이지</Link>
            </div>
            <div>
                <Link to='zz'>존재하지 않는 페이지</Link>
            </div>
            <div>
                <Link to='bestworker'>포인트 계산기</Link>
            </div>
            <div className="bg-green-dark">ㅇㅇ</div>
            <div className="bg-green">ㅇㅇ</div>
            <div className="bg-green-light">ㅇㅇ</div>
            <div className="bg-yellow">ㅇㅇ</div>
            <div className="bg-yellow-light">ㅇㅇ</div>
            <div className="bg-orange-dark">ㅇㅇ</div>
            <div className="bg-orange">ㅇㅇ</div>
        </div>
    )
}

export default HomeContainer;