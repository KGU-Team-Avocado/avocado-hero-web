import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { MultiSelect } from "react-multi-select-component";
import AddInput from "./AddInput";
import './profile.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Avatar from "./avatar/Avatar";
import AvatarEditButton from "./avatar/AvatarEditButton";
import ModifyOption from "./ModifyOption";

const ProfileEdit = (props) => {
    const [edit, setEdit] = useState(false);
    const [selected, setSelected] = useState([]);

    const [profile, setProfile] = useState();

    // const [selectedFields, setSelectedFields] = useState([
    //     // Object.entries(profile.user_field)
    // ]); // 여기에 현재 저장된 거를 넣어야 함 ?

    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [selectedPersonals, setSelectedPersonals] = useState([]);

    useEffect(() => {
        if (props.profile === null) {
            return;
        }
        setProfile(props.profile);
        console.log('profileEdit 출력' + props.profile);
        // setSelectedFields(props.profile.user_field)

        setSelected(props.profile.user_field.map((field) => { return findProfile(field) }))
        setSelectedKeywords(props.profile.user_keyword && props.profile.user_keyword.map((keyword) => { return findKeyword(keyword) }))
        setSelectedPersonals(props.profile.user_personality && props.profile.user_personality.map((personal) => { return findPersonal(personal) }))
    }, [props.profile]);

    const modifyOption = () => {
        setSelected([]);
        const selectedFields = selected.map((s) => { return s.value })

        axios.post("/usersRouter/profileUpdate", {
            user_id: profile.user_id,
            user_field: selectedFields,
            // user_keyword: selectedKeywords.map((s) => s.value),
            // user_personality: selectedPersonals.map((s) => s.value)
        }).then((response) => {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
        setEdit(false);
    }

    const editWho = () => {
        setEdit(true);
        console.log(profile)

        // const select = profile.user_field.map((field) => {return findProfile(field)});
        // setSelected(select)

        setSelected(profile.user_field.map((field) => { return findProfile(field) }))
        setSelectedKeywords(profile.user_keyword.map((keyword) => { return findKeyword(keyword) }))
        setSelectedPersonals(profile.user_personality.map((personal) => { return findPersonal(personal) }))
    }

    const findProfile = (r) => {
        const idx = fields.findIndex((field) => field.value === r)
        return fields[idx]
    }

    const findKeyword = (p) => {
        const idx = keywords.findIndex((keyword) => keyword.value === p)
        return keywords[idx]
    }

    const findPersonal = (q) => {
        const idx = personals.findIndex((personal) => personal.value === q)
        return personals[idx]
    }

    const fields = [
        { label: "프론트", value: "front-end" },
        { label: "백엔드", value: "back-end" },
        { label: "서버", value: "server" },
        { label: "기획", value: "enterprise" },
        { label: "개발", value: "coding" },
    ];

    const keywords = [
        { label: "#리액트", value: "react" },
        { label: "#자바", value: "java" },
        { label: "#html", value: "html" },
    ];

    const personals = [
        { label: "호기심많은", value: "curious" },
        { label: "외향적인", value: "extroverted" },
        { label: "신중한", value: "cautious" },
    ];


    // props.profile.user_field.map(())

    // setSelectedFields = [
    //     { label: ,
    //     value: }
    // ]

    // profile.user_field.length > 0 
    // ? 
    // (
    //     profile.user_field.map((profile.user_field) => 
    //     setSelectedFields(profile.user_field))
    // )
    // :
    // (

    // )

    // useEffect(() => {
    //     setSelectedFields(props.profile.user_field)
    // }, [props.profile.user_field]);

    const handleInput = (e) => {
        console.log(e);
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }

    const onClickSubmit = () => {
        axios
            .post("/usersRouter/profileUpdate", {
                user_id: profile.user_id,
                user_name: profile.user_name,
                user_nickname: profile.user_nickname,
                user_email: profile.user_email,
                user_phoneNum: profile.user_phoneNum,
                user_one_intro: profile.user_one_intro,
                user_intro: profile.user_intro,
                user_belong: profile.user_belong,
                user_link: profile.user_link,
                // user_field: selectedFields.map((s) => s.value),
                user_keyword: selectedKeywords.map((s) => s.value),
                user_personality: selectedPersonals.map((s) => s.value)
            })
            .then((response) => {
                console.log(response);
                if (response.data.success === true) {
                    window.location.href = "/";
                } // 여기 안 됨
            })
            .catch(function (error) {
                console.log(error);
            });

        window.location.href = "../../user/" + profile.user_id;
    };

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


//     const onClickBelong = () => {
//         // 현재 input의 내용을 배열에 저장하고 input을 하나 더 만드는 함수

//         let countArr = [...countList]
//         let counter = countArr.slice(-1)[0]
//         counter += 1
//         countArr.push(counter)	// index 사용 X
//         // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
//         setCountList(countArr)
//     }

//     // 입력창 추가 삭제 기능

// const onAddDetailDiv = () => {
//     let countArr = [...countList]
//     let counter = countArr.slice(-1)[0]
//     counter += 1
//     countArr.push(counter)	// index 사용 X
//     // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
//     setCountList(countArr)
//     // axios
//     // .post("usersRouter/profileUpdate", {
//     //     user_field: selectedFields.map((s) => s.value),
//     //     // user_keyword: selectedKeywords.map((s) => s.value),
//     //     // user_personality: selectedPersonals.map((s) => s.value)
//     // })
//     // .then((response) => {
//     //     console.log(response);
//     //     if (response.data.success === true) {
//     //         window.location.href = "/";
//     //     } // 여기 안 됨
//     // })
//     // .catch(function (error) {
//     //     console.log(error);
//     // });
// };

// const onAddLink = () => {
//     let countArr = [...countLink]
//     let counter = countArr.slice(-1)[0]
//     counter += 1
//     countArr.push(counter)	// index 사용 X
//     // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
//     setCountLink(countArr)
// }

    return (
        <>
            {
                profile &&
                <>
                    <h3>프로필 수정</h3>
                    <Container>
                        <Row>
                            <div class="col-xl-3" >
                                <Card style={{ margin: '10px 0' }}>
                                    <Card.Body>
                                        {/* <div class="itemCenter">
                                            <svg className="img-thumbnail rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                            <div class="itemCenter"><Button >변경</Button></div>
                                        </div> */}
                                        <Avatar user_id={profile?.user_id} />
                                        <AvatarEditButton user_id={profile?.user_id} />

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>닉네임</Form.Label>
                                            <Form.Control type="text" name="user_nickname" placeholder=""
                                                value={profile.user_nickname}
                                                onChange={handleInput}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" contro lId="exampleForm.ControlInput1">
                                            <Form.Label>이름</Form.Label>
                                            <Form.Control type="text" name="user_name" placeholder="" onChange={handleInput}
                                                value={profile.user_name} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>이메일</Form.Label>
                                            <Form.Control type="text" name="user_email" placeholder="" onChange={handleInput}
                                                value={profile.user_email} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>전화번호</Form.Label>
                                            <Form.Control type="text" name="user_phoneNum" placeholder="" onChange={handleInput}
                                                value={profile.user_phoneNum} />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                <Card style={{ margin: '10px 0' }}>
                            <Card.Body>
                            <Card.Title>한줄 소개</Card.Title>
                                <Card.Text>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="text" name="user_one_intro" placeholder=""
                                                value={profile.user_one_intro}
                                                onChange={handleInput}
                                            />
                                        </Form.Group>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                            </div>
                            <div class="col-xl-9">
                                <Card style={{ margin: '10px 0' }}>
                                    <Card.Body>
                                        <Card.Title>기본 정보</Card.Title>
                                        <Card.Text>
                                            <div class="item"><div class="contentTitle">소속</div>
                                                {/* <AddInput countList={countList} /> */}


                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                        type="text" name="user_belong" placeholder=""
                                                        value={profile.user_belong}
                                                        onChange={handleInput}
                                                    />
                                                    <Button onClick={onAddDetailDiv} variant="outline-secondary" id="button-addon2">
                                                       추가
                                                    </Button>
                                                </InputGroup>
                                                <AddInput countList={countList} onAddDetailDiv={onAddDetailDiv}/>
                                    {/* <Form.Control type="text" name="user_belong" placeholder=""
                                                value={profile.user_belong}
                                                onChange={handleInput}
                                            /> */}
                                     
                                            </div>
                                            <div class="item"><div class="contentTitle">분야</div>
                                                {/* 여기부터 수정 버튼까 삭제해도됨 */}
                                                {edit == true ?
                                                    <>
                                                        <ModifyOption
                                                            option={fields}
                                                            selected={selected}
                                                            setSelected={setSelected}
                                                            modifyOption={modifyOption}
                                                        />
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                                }
                                                {/* <button type="button" className="btn btn-secondary me-2" onClick={() => editWho()} >수정</button> */}

                                                <ModifyOption
                                                    option={fields}
                                                    selected={selected}
                                                    setSelected={setSelected}
                                                    modifyOption={modifyOption}
                                                />

                                                {/* <MultiSelect
                                        options={fields}
                                        value={selectedFields}
                                        onChange={setSelectedFields}
                                    /> */}
                                            </div>

                                            <div class="item">
                                                {/* <AddInput countList={countLink} />
                                    <Button onClick={onAddLink}>+</Button>
                                     <Form.Control type="text" name="user_link" placeholder=""
                                                value={profile.user_link}
                                                onChange={handleInput}
                                            /> */}
                                                <Form.Label htmlFor="basic-url">링크</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="basic-addon3">
                                                        https://example.com/users/
                                                    </InputGroup.Text>
                                                    <Form.Control id="basic-url" aria-describedby="basic-addon3"
                                                        type="text" name="user_link" placeholder=""
                                                        value={profile.user_link}
                                                        onChange={handleInput} />
                                                        <Button onClick={onAddLink} variant="outline-secondary" id="button-addon2">
                                                       추가
                                                    </Button>
                                                </InputGroup>
                                                <AddInput countList={countLink} onAddLink={onAddLink}/>

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
                                                />
                                            </div>
                                            <div class="item"><div class="contentTitle">성향</div>
                                                <MultiSelect
                                                    options={personals}
                                                    value={selectedPersonals}
                                                    onChange={setSelectedPersonals}
                                                />
                                            </div>
                                            <div class="item">
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>소개글</Form.Label>
                                                    <Form.Control as="textarea" name="user_intro" placeholder="" rows={3} onChange={handleInput}
                                                        value={profile.user_intro} />
                                                </Form.Group>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <Button onClick={onClickSubmit}>수정 완료</Button>
                        </Row>
                    </Container>
                </>
            }
        </>
    )
}

export default ProfileEdit;
