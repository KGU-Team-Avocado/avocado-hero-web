import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

const ProfileContainer = () => {

    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const fileInput = useRef(null)

    const params = useParams(); //url로 넘어온 파라미터를 받는 역할 (App.js 의 :id 참고)
    const user_id = params.id; //(params의 :id를 받는 역할)
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios.post('/usersRouter/findUser', {
            user_id: user_id
        }).then((response) => { //서버로부터 받아온 id
            // console.log(response.data);
            if (response.data.status === "success") {
                // console.log(JSON.stringify(response.data.user));
                setUser(response.data.user);
            }
            else {
              return alert("조회된 아이디가 없습니다.")
            }
        }).catch(function (error) {
            console.log(error);
        });
    }, []);
    console.log(user);

    const [isEdit, setIsEdit] = useState(true);

    const[inputs, setInputs] = useState({
        nickname: '',
        email: '',
        phoneNum: '',
        birth: '',
      });

      const onChange =(e) => { // 입력 함수
        const { value, name } = e.target;
        setInputs({
          ...inputs, 
          [name]: value
        });
      };

      const { nickname, email, phoneNum, birth } = inputs;

    const onClickSubmit = (e) => { 
        e.preventDefault();

        axios
            .post("/usersRouter/profileUpdate", {
                user_id: user_id,
                user_nickname: nickname,
            })
            .then((response) => {
                console.log(response);
                if (response.data.success === true) {
                    window.location.href = "/";
                }
            })
            .catch(function (error) {
                console.log(error);
            });

            setIsEdit(!isEdit);
    };

    // const [newNickname, setNewNickname] = useState(profile.name);

    // const nicknameInput = (e) => {
    //     setNewNickname(e.target.value);
    // };

    // const onClickSubmit = () => {
    //     const profile = profile.map((item) => {
    //         ...item,
    //     })
    // }

    return (
        <>
        {
            isEdit ? ( // isEdit 모드 on/off로 한 번에 나타내게 변경
                <>
                <h1>프로필 수정</h1>
                <Container>
                                <Row>
                                <div class="col-md-3" >
                    <Card style={{ height: '30rem', margin: '10px 0' }}>
                        <Card.Body>
                            <div>
                            <div><img
                                    src={Image} style={{ height: '150px' }} /></div>
                                    <div><Button>변경</Button></div>
                                    </div>
                                    테스트로 닉네임만 수정 중인데 안 됨
                                <Form.Control type="text" name="nickname" value={nickname} placeholder="닉네임" onChange={onChange} />
                            </Card.Body>
                            </Card>
                            </div>
                            <Button onClick={onClickSubmit}>프로필 수정</Button>
                                </Row>
                </Container>
                </>

            ) : 
            <div></div>
        }

</>
    )
}

export default ProfileContainer;