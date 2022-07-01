import { Link } from "react-router-dom";

const HomeContainer = () => {
    return (
        <div>
            홈홈
            <div>
                <Link to='signin'>로그인 페이지</Link>
            </div>
            <div>
                <Link to='signup'>회원가입 페이지</Link>
            </div>
        </div>
    )
}

export default HomeContainer;