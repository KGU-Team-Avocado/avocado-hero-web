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

const ProfileContainer = () => {
    const params = useParams(); //url로 넘어온 파라미터를 받는 역할 (App.js 의 :id 참고)
    const user_id = params.id; //(params의 :id를 받는 역할)
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.post('/usersRouter/findUser', {
            user_id: user_id
        }).then((response) => { //서버로부터 받아온 id
            // console.log(response.data);
            if (response.data.status === "success") {
                // console.log(JSON.stringify(response.data.user));
                const foundUser = response.data.user;
                setUser(foundUser);
                setProfile({
                    user_id:foundUser.user_id,
                    name: foundUser.user_name,
                    nickname: foundUser.user_nickname,
                    email: foundUser.user_email,
                    phoneNum: foundUser.user_phoneNum,
                    belong: foundUser.user_belong,
                    field: foundUser.user_field,
                    link: foundUser.user_link,
                    keyword: foundUser.user_keyword,
                    personality: foundUser.user_personality,
                    intro: foundUser.user_intro,
                    one_intro: foundUser.user_one_intro,
                })
            }
            else {
                return alert("조회된 아이디가 없습니다.")
            }
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    
    console.log(user);

    // const handleInput = (state) => {
    //     console.log(state)
    //     setProfile({
    //         ...profile,
    //         [state.target.name]: state.target.value
    //     })
    // }

    // const onClickSubmit = (e) => { // 수정완료 함수
    //     const newProfile = {
    //         ...profile,

    //     }
    //     console.log(newProfile);
    //     e.preventDefault();

    //     axios
    //         .post("/usersRouter/profileUpdate", newProfile)
    //         .then((response) => {
    //             console.log(response);
    //             if (response.data.success === true) {
    //                 window.location.href = "/";
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

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
      <h3><b>{user && user.user_id}</b>의 프로필</h3>
            <ProfileCard
                profile={profile}
            />
            <Button href={"./ProfileUpdate/" + (user && user.user_id)}>프로필 수정</Button>
            

            <ProfileGroup></ProfileGroup> 
            <ProfilePortpolio></ProfilePortpolio>
        </>
    )
}

export default ProfileContainer;