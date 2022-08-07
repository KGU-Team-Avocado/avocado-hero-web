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

export default (props) => {
    const [selectedFields, setSelectedFields] = useState([]);
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [selectedPersonals, setSelectedPersonals] = useState([]);

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

    const [profile, setProfile] = useState()

    useEffect(() => {
        setProfile(props.profile);
    }, [props.profile]);

    
    const handleInput = (e) => {
        console.log(e);
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }

    const nicknameInput = useRef();
    const newContentInput = useRef();

    const onClickSubmit = (e) => {
        e.preventDefault();

        axios
            .post("/usersRouter/profileUpdate", {
                user_id: profile.user_id,
                user_name: profile.user_name,
                user_nickname: profile.user_nickname,
                user_email: profile.user_email,
                user_phoneNum: profile.user_phoneNum,
                user_intro: profile.user_intro,
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
    };



    return (
        <>
            {
                profile &&
                <>
                    <h1>프로필 수정</h1>
                    <Container>
                        <Row>
                            <div class="col-md-3" >
                                <Card style={{ margin: '10px 0' }}>
                                    <Card.Body>
                                        <div class="itemCenter">
                                            <svg className="img-thumbnail rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                            <div class="itemCenter"><Button >변경</Button></div>
                                        </div>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>닉네임</Form.Label>
                                            <Form.Control type="text" name="nickname" placeholder=""
                                                value={profile.user_nickname}
                                                onChange={handleInput}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" contro lId="exampleForm.ControlInput1">
                                <Form.Label>이름</Form.Label>
                                <Form.Control type="text" name="name" placeholder="" onChange={handleInput}
                                    value={profile.user_name} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>이메일</Form.Label>
                                <Form.Control type="text" name="email" placeholder="" onChange={handleInput}
                                    value={profile.user_email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>전화번호</Form.Label>
                                <Form.Control type="text" name="phoneNum" placeholder="" onChange={handleInput}
                                    value={profile.user_phoneNum} />
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
                                    {/* <AddInput countList={countList} />
                                    <Button onClick={onAddDetailDiv}>+</Button> */}
                                </div>
                                <div class="item"><div class="contentTitle">분야</div>
                                    <MultiSelect
                                        options={fields}
                                        value={selectedFields}
                                        handleInput={setSelectedFields}
                                        label="dd"
                                    />
                                </div>

                                <div class="item"><div class="contentTitle">링크</div>
                                    {/* <AddInput countList={countLink} />
                                    <Button onClick={onAddLink}>+</Button> */}
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
                                        handleInput={setSelectedKeywords}
                                        label="dd"
                                    />
                                </div>
                                <div class="item"><div class="contentTitle">성향</div>
                                    <MultiSelect
                                        options={personals}
                                        value={selectedPersonals}
                                        handleInput={setSelectedPersonals}
                                        label="dd"
                                    />
                                </div>
                                <div class="item">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>소개글</Form.Label>
                                        <Form.Control as="textarea" name="content" placeholder="" rows={3} handleInput={handleInput}
                                            value={profile.user_intro} />
                                    </Form.Group>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                            <Button onClick={() => console.log(profile)}>수정 완료</Button>
                        </Row>
                    </Container>
                </>
            }
        </>
    )
}