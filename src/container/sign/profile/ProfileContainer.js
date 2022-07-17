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

    const [isEdit, setIsEdit] = useState(false);
    const onClickEdit = () => {
        setIsEdit(!isEdit);
    };

    const [name, setName] = useState('');

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }

    const onClickSubmit = (e) => {
        e.preventDefault();

        console.log(name);
        axios
            .post("/usersRouter/profileUpdate", {
                user_name: name,
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
                isEdit ? (
                    <h1>프로필 수정</h1>
                ) : (
                    <h1>프로필</h1>
                )
            }
            <Container>
                <Row>
                    <div className="col-md-3" >
                        <Card style={{ height: '30rem', margin: '10px 0' }}>
                            <Card.Body>
                                <div>
                                    <div><img
                                        src={Image} style={{ height: '150px' }} /></div>
                                    {
                                        isEdit ? (
                                            <div><Button>변경</Button></div>
                                        ) : (
                                            <></>
                                        )
                                    }
                                </div>
                                <div>
                                    이름:
                                    {
                                        isEdit ? (
                                            <Form.Control type="text"
                                                value={name}
                                                onChange={onNameHandler}
                                            />
                                        ) : (
                                            <h1>
                                                {
                                                    user
                                                        ?
                                                        JSON.stringify(user.user_name)
                                                        :
                                                        <div></div>
                                                }
                                            </h1>
                                        )
                                    }

                                </div>
                                <div>id:
                                    {
                                        user
                                            ?
                                            JSON.stringify(user.user_id)
                                            :
                                            <div></div>
                                    }
                                </div>
                                <div>email:
                                    {
                                        user
                                            ?
                                            JSON.stringify(user.user_email)
                                            :
                                            <div></div>
                                    }
                                    {/* <Button>변경</Button>          */}
                                </div>
                                <div>전화번호:

                                </div>
                                <div>생년월일:

                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-9">
                        <Card style={{ height: '30rem', margin: '10px 0' }}>
                            <Card.Body>
                                <Card.Title>기본 정보</Card.Title>
                                <Card.Text>
                                    <div>
                                        이름:
                                        {
                                            user
                                                ?
                                                JSON.stringify(user.user_name)
                                                :
                                                <div></div>
                                        }
                                    </div>

                                    <div>소속 </div>
                                    <div>분야 </div>
                                    <div>학력 </div>
                                    <div>SNS </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                        <Card style={{ height: '50rem', margin: '10px 0' }}>
                            <Card.Body>
                                <Card.Title>추가 정보</Card.Title>
                                <Card.Text>
                                    <div>소개글</div>
                                    <div>키워드</div>
                                    <div>성향</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                {
                    isEdit ? (
                        <Button variant="primary"
                        // onClick={onClickSubmit}
                        >수정 완료</Button>
                    ) : (
                        <Button variant="primary" onClick={onClickEdit}>프로필 수정</Button>
                    )
                }

            </Container>
        </>
    )
}

export default ProfileContainer;

