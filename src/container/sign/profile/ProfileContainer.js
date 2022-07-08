import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileContainer = () => {
    const params = useParams(); //url로 넘어온 파라미터를 받는 역할 (App.js 의 :id 참고)
    const user_id = params.id; //(params의 :id를 받는 역할)
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios.post('/usersRouter/findUser', {
            user_id: user_id
        }).then((response) => { //서버로부터 받아온 id
            // console.log(response.data);
            if (response.data.status === "success") {
                console.log(JSON.stringify(response.data.user))
                setUser(response.data.user);
            }
            // else {
            //   return alert("조회된 아이디가 없습니다.")
            // }
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <h1>프로필</h1>
            {/* 프로필이 올 곳
            일단 계정 연동하지 말고 컴포넌트부터 대충 잡아놓고 시작하기 */}
            {
                user
                    ?
                    JSON.stringify(user)
                    :
                    <div>
                        존재하지 않는 계정입니다.
                    </div>
            }
        </div>
    )
}

export default ProfileContainer;