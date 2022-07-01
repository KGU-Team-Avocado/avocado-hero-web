import { Link } from "react-router-dom";

const HomeContainer = () => {
    return (
        <div>
            홈홈홈
            <div>
                <Link to='signin'>로그인 페이지</Link>
            </div>
            <div>
                <Link to='signup'>회원가입 페이지</Link>
            </div>
            <div>
                <Link to='example'>DB 예제 페이지</Link>
            </div>
            <div>
                <Link to='zz'>존재하지 않는 페이지</Link>
            </div>
        </div>
    )
}

export default HomeContainer;