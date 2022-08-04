import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { MultiSelect } from "react-multi-select-component";
import AddInput from "./AddInput";
import './profile.css';


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

    const [inputs, setInputs] = useState({
        nickname: '',
        email: '',
        phoneNum: '',
    });

    const onChange = (e) => { // 입력 함수
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const { nickname, name, email, phoneNum, intro } = inputs;

    const [selectedFields, setSelectedFields] = useState([]);
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [selectedPersonals, setSelectedPersonals] = useState([]);

    const onClickSubmit = (e) => {
        e.preventDefault();

        axios
            .post("/usersRouter/profileUpdate", {
                user_id: user_id,
                user_name: name,
                user_nickname: nickname,
                user_email: email,
                user_phoneNum: phoneNum,
                user_intro: intro,
                user_field: selectedFields.map((s) => s.value),
                user_keyword: selectedKeywords.map((s) => s.value),
                user_personal: selectedPersonals.map((s) => s.value)
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

    const imgChange = (e) => {
        axios
            .post("/usersRouter/profileUpdate", {
                // user_img: img
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
    }

    const fields = [
        { label: "프론트", value: "front-end" },
        { label: "백엔드", value: "back-end" },
        { label: "서버", value: "server" },
        { label: "기획", value: "enterprise", disabled: true },
        { label: "개발", value: "coding", disabled: true },
    ];

    const keywords = [
        { label: "#리액트", value: "react" },
        { label: "#자바", value: "java" },
        { label: "#html", value: "html" },
    ];

    const personals = [
        { label: "호기심많은", value: "curious" },
    ];

    const [countList, setCountList] = useState([0]);

    const [countLink, setCountLink] = useState([0]);

    const onAddDetailDiv = () => {
        let countArr = [...countList]
        let counter = countArr.slice(-1)[0]
        counter += 1
        countArr.push(counter)	// index 사용 X
        // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
        setCountList(countArr)
    }

    const onAddLink = () => {
        let countArr = [...countLink]
        let counter = countArr.slice(-1)[0]
        counter += 1
        countArr.push(counter)	// index 사용 X
        // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
        setCountLink(countArr)
    }


    // const onAddLink = () => {
    //     let countLink = [...countList];
    //     let counter = countLink.slice(-1)[0];
    //     counter += 1;
    //     countLink.push(counter);
    //     setCountList(countLink);
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
                                    <Card style={{ margin: '10px 0' }}>
                                        <Card.Body>
                                            <div class="itemCenter">
                                                <svg className="img-thumbnail rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                                <div class="itemCenter"><Button onClick={imgChange}>변경</Button></div>
                                            </div>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>닉네임</Form.Label>
                                                <Form.Control type="text" name="nickname" placeholder="" onChange={onChange}
                                                    value={nickname} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>이름</Form.Label>
                                                <Form.Control type="text" name="name" placeholder="" onChange={onChange}
                                                    value={name} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>이메일</Form.Label>
                                                <Form.Control type="text" name="email" placeholder="" onChange={onChange}
                                                    value={email} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>전화번호</Form.Label>
                                                <Form.Control type="text" name="phoneNum" placeholder="" onChange={onChange}
                                                    value={phoneNum} />
                                            </Form.Group>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-md-9">
                                    <Card style={{ margin: '10px 0' }}>
                                        <Card.Body>
                                            <Card.Title>기본 정보</Card.Title>
                                            <Card.Text>
                                                <div class="item"><div class="contentTitle">소속</div>
                                                    <AddInput countList={countList} />
                                                    <Button onClick={onAddDetailDiv}>+</Button>
                                                </div>
                                                <div class="item"><div class="contentTitle">분야</div>
                                                    <MultiSelect
                                                        options={fields}
                                                        value={selectedFields}
                                                        onChange={setSelectedFields}
                                                        // value={selected}
                                                        // onChange={setSelected}
                                                        label="dd"
                                                    />
                                                </div>

                                                <div class="item"><div class="contentTitle">링크</div>
                                                    <AddInput countList={countLink} />
                                                    <Button onClick={onAddLink}>+</Button>
                                                </div>

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ margin: '10px 0' }}>
                                        <Card.Body>
                                            <Card.Title>세부 정보</Card.Title>
                                            <Card.Text>
                                                <div class="item"><div class="contentTitle">키워드</div>
                                                    <MultiSelect
                                                        options={keywords}
                                                        value={selectedKeywords}
                                                        onChange={setSelectedKeywords}
                                                        // value={selected}
                                                        // onChange={setSelected}
                                                        label="dd"
                                                    />
                                                </div>
                                                <div class="item"><div class="contentTitle">성향</div>
                                                    <MultiSelect
                                                        options={personals}
                                                        value={selectedPersonals}
                                                        onChange={setSelectedPersonals}
                                                        // value={selected}
                                                        // onChange={setSelected}
                                                        label="dd"
                                                    />
                                                </div>
                                                <div class="item">
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>소개글</Form.Label>
                                                        <Form.Control as="textarea" name="content" placeholder="" rows={3} onChange={onChange}
                                                            value={intro} />
                                                    </Form.Group>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <Button onClick={(e) => onClickSubmit(e)}>수정 완료</Button>
                            </Row>
                        </Container>
                    </>

                ) :
                    <>
                        <h1>프로필</h1>
                        <Container>
                            <Row>
                                <div class="col-md-3">
                                    <Card style={{ height: '30rem', margin: '10px 0' }}>
                                        <Card.Body>
                                            <div class="itemCenter">
                                                <svg className="img-thumbnail rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                            </div>
                                            {
                                                user
                                                    ?
                                                    (
                                                        <>
                                                            <div class="itemCenter">
                                                                <h4>닉네임{user.user_nickname}</h4>
                                                            </div>
                                                            <div class="itemCenter">
                                                                <div>{user.user_name}</div>
                                                            </div>
                                                            <div class="itemCenter">
                                                                <div>avocado@naver.com{user.user_email}</div>
                                                            </div>
                                                            <div class="itemCenter">
                                                                <div>010-xxxx-xxxx{user.user_phoneNum}</div>
                                                            </div>
                                                        </>

                                                    )
                                                    :
                                                    <div>
                                                        존재하지 않는 계정입니다.
                                                    </div>
                                            }
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-md-9">
                                    <Card style={{ margin: '10px 0' }}>
                                        <Card.Body>
                                            <Card.Title>기본 정보</Card.Title>
                                            <Card.Text>
                                                <div class="item">
                                                    <div class="contentTitle">소속</div>
                                                    <div>아보카도 | {user.user_belong}</div>
                                                </div>
                                                <div class="item">
                                                    <div class="contentTitle">분야</div>
                                                    <div>프론트 | {user.user_field}</div>
                                                </div>

                                                <div class="item">
                                                    <div class="contentTitle">링크</div>
                                                    <div><a href="https://github.com/KGU-Team-Avocado">링크1</a>{user.user_link}</div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ margin: '10px 0' }}>
                                        <Card.Body>
                                            <Card.Title>세부 정보</Card.Title>
                                            <Card.Text>

                                                <div class="item">
                                                    <div class="contentTitle">키워드</div>
                                                    <div>#리액트 | {user.user_keyword}</div>
                                                </div>
                                                <div class="item">
                                                    <div class="contentTitle">성향</div>
                                                    <div>호기심많은 | {user.user_personal}</div>
                                                </div>
                                                <div class="item">
                                                    <div class="contentTitle">소개글</div>
                                                    <div>소개글 {user.user_intro}</div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <Button onClick={(e) => onClickSubmit(e)}>프로필 수정</Button>
                            </Row>
                        </Container>
                    </>

            }

        </>
    )
}

export default ProfileContainer;