import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import AddInput from "./AddInput";
// import './profile.css';
import ProfileCard from "./ProfileCard";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProfileGroup from './ProfileGroup';
import ProfilePortpolio from './ProfilePortpolio';
import * as API from "../../../api/API"
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";
import MKButton from "component/common/mui-components/MKButton";

const ProfileContainer = () => {
    const params = useParams(); //url로 넘어온 파라미터를 받는 역할 (App.js 의 :id 참고)
    const user = useSelector(selectUser);
    const user_id = params.id; //(params의 :id를 받는 역할)
    const [profile, setProfile] = useState(null);

    const navigate = useNavigate();

    console.log(`user_id : ${user_id}`);

    useEffect(() => {
        getAndSetUserProfile(user_id);
    }, [user_id]);

    const getAndSetUserProfile = async (user_id) => {
        const temp = await API.findOneUserByUserId(user_id)
        setProfile(temp);
    }

    return (
        <>
            {/* 네비게이션 바로 나눌까 */}
            {/* 
            <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">프로필</Nav.Link>
            <Nav.Link href="./ProfileGroup">그룹</Nav.Link>
            <Nav.Link href="#pricing">포트폴리오</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
      */}
            {
                profile ?
                    <>
                        <h3><b>{profile.user_id}</b>의 프로필</h3>
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <div>멋진 프로필을 작성하면 기업이 당신을 스카우트할 수 있습니다.
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                        
                        {
                            // 위치를 상단 프로필이랑 justify-content-between으로 적용하기
                            user?.user_id === profile.user_id
                                ?
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
<MKButton variant="contained" color="info" onClick={()=>navigate(`/user/ProfileUpdate/${profile.user_id}`)} style={{

}}>프로필 수정</MKButton>
                                </div>
                                :
                                <></>
                        }

                        <ProfileCard
                            profile={profile}
                        />
                    
                    </>
                    :
                    <>
                        <div>누구쎄용?</div>
                    </>
            }
        </>
    )
}

export default ProfileContainer;