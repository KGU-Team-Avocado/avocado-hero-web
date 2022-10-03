import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import AddInput from "./AddInput";
// import './profile.css';
import ProfileCard from "./ProfileCard";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProfileGroup from './ProfileGroup';
import ProfilePortpolio from './ProfilePortpolio';
import * as API from "../../../api/API"

const ProfileContainer = () => {
    const params = useParams(); //url로 넘어온 파라미터를 받는 역할 (App.js 의 :id 참고)
    const user_id = params.id; //(params의 :id를 받는 역할)
    const [profile, setProfile] = useState(null);

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
            {/* <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">프로필</Nav.Link>
            <Nav.Link href="./ProfileGroup">그룹</Nav.Link>
            <Nav.Link href="#pricing">포트폴리오</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
            {
                profile ?
                    <>
                        <h3><b>{profile.user_id}</b>의 프로필</h3>
                        <ProfileCard
                            profile={profile}
                        />
                        <Button href={"./ProfileUpdate/" + (profile.user_id)}>프로필 수정</Button>

                        <ProfileGroup></ProfileGroup>
                        <ProfilePortpolio></ProfilePortpolio>
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