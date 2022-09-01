import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { MultiSelect } from "react-multi-select-component";
import AddInput from "./AddInput";
import './profile.css';
import ProfileCard from "./ProfileCard";

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
                    personal: foundUser.user_personal,
                    intro: foundUser.user_intro,
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

    const [groups, setGroups] = useState([]);
    // const [selectedGroup, setSelectedGroup] = useState(null);
    const setSelectedGroup = (group) => {
        // alert(JSON.stringify(group))
        if (window.confirm(group.project_name + '으로 이동하시겠습니까?')) {
            window.location.href = "/project/" + group._id;
        }
    }

    const [appliedGroups, setAppliedGroups] = useState([]);
    const sessionStorage = window.sessionStorage;

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            const userInfo = JSON.parse(sessionStorage.getItem("user"))
            axios.post("/groupsRouter/getAppliedGroup", {
                user_id: userInfo.user_id,
            }).then((response) => {
                setAppliedGroups(response.data);
            }).catch(function (error) {
                console.log(error);
            });
            axios.post("/groupsRouter/getMyGroup", {
                user_id: userInfo.user_id,
            }).then((response) => {
                setGroups(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, []);

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
            <ProfileCard
                profile={profile}
            />

        </>
    )
}

export default ProfileContainer;