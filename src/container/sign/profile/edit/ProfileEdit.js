import axios from "axios";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { MultiSelect } from "react-multi-select-component";
import AddInput from "./AddInput";
import '../profile.css';
import InputGroup from 'react-bootstrap/InputGroup';
import ModifyOption from "./ModifyOption";
import Avatar from "../avatar/Avatar";

const ProfileEdit = (props) => {
    const [edit, setEdit] = useState(false);
    const [selected, setSelected] = useState([]);
    const [profile, setProfile] = useState();

    // const [selectedFields, setSelectedFields] = useState([
    //     // Object.entries(profile.user_field)
    // ]); // 여기에 현재 저장된 거를 넣어야 함 ? ? ?
    const [selectedFields, setSelectedFields] = useState([]);
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [selectedPersonals, setSelectedPersonals] = useState([]);

    useEffect(() => {
        if (props.profile === null) {
            return;
        }
        setProfile(props.profile);
        console.log('profileEdit 출력' + props.profile);

        // setSelected(props.profile.fields.map((field) => { return findProfile(field) }))
        setSelectedFields(props.profile.fields && props.profile.fields.map((field) => { return findField(field); }));
        setSelectedKeywords(props.profile.keywords && props.profile.keywords.map((keyword) => { return findKeyword(keyword); }));
        setSelectedPersonals(props.profile.personalities && props.profile.personalities.map((personal) => { return findPersonal(personal); }));
    }, [props.profile]);

    const modifyOption = () => {
        setSelected([]);
        // const selectedFields = selected.map((s) => { return s.value })

        axios.post("/usersRouter/profileUpdate", {
            user_id: profile.user_id,
            // user_field: selectedFields,
            // user_keyword: selectedKeywords.map((s) => s.value),
            // user_personality: selectedPersonals.map((s) => s.value)
        }).then((response) => {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
        setEdit(false);
    };

    // const editWho = () => {
    //     setEdit(true);
    //     console.log(profile);

    //     // const select = profile.fields.map((field) => {return findProfile(field)});
    //     // setSelected(select)

    //     setSelectedFields(profile.fields.map((field) => { return findField(field); }));
    //     setSelectedKeywords(profile.keywords.map((keyword) => { return findKeyword(keyword); }));
    //     setSelectedPersonals(profile.personalities.map((personal) => { return findPersonal(personal); }));
    // };

    const findField = (r) => {
        const idx = fields.findIndex((field) => field.value === r);
        return fields[idx];
    };

    const findKeyword = (p) => {
        const idx = keywords.findIndex((keyword) => keyword.value === p);
        return keywords[idx];
    };

    const findPersonal = (q) => {
        const idx = personals.findIndex((personal) => personal.value === q);
        return personals[idx];
    };

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
        { label: "#파이썬", value: "python" },
        { label: "#자바스크립트", value: "javascript" },
        { label: "#C언어", value: "c" },
        { label: "#C++", value: "cplpl" },
        { label: "#SQL", value: "sql" },
        { label: "#MongoDB", value: "mongo-db" },
        { label: "#스프링", value: "spring" },
        { label: "#Node.js", value: "node-js" },
        { label: "#jQuery", value: "jquery" },
    ];

    const personals = [
        { label: "창의적인", value: "creative" },
        { label: "외향적인", value: "extroverted" },
        { label: "신중한", value: "cautious" },
        { label: "성실한", value: "hardworking" },
        { label: "주도적인", value: "leading" },
        { label: "성장하는", value: "growing" },
        { label: "도전적인", value: "challenging" },
        { label: "밝은", value: "bright" },
        { label: "적극적인", value: "active" },
        { label: "야망있는", value: "ambitious" },
        { label: "긍정적인", value: "positive" },
        { label: "책임감있는", value: "responsible" },
        { label: "노력하는", value: "trying" },
        { label: "주도적인", value: "leading" },
    ];


    // props.profile.fields.map(())

    // setSelectedFields = [
    //     { label: ,
    //     value: }
    // ]

    // profile.fields.length > 0 
    // ? 
    // (
    //     profile.fields.map((profile.fields) => 
    //     setSelectedFields(profile.fields))
    // )
    // :
    // (

    // )

    // useEffect(() => {
    //     setSelectedFields(props.profile.fields)
    // }, [props.profile.fields]);

    const handleInput = (e) => {
        console.log(e);
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    const onClickSubmit = () => {
        axios
            .post("/usersRouter/profileUpdate", {
                user_id: profile.user_id,
                name: profile.name,
                nickname: profile.nickname,
                email: profile.email,
                phoneNumber: profile.phoneNumber,
                introduceOne: profile.introduceOne,
                introduce: profile.introduce,
                belongs: profile.belongs,
                links: profile.links,
                fields: selectedFields.map((s) => s.value),
                keywords: selectedKeywords.map((s) => s.value),
                personalities: selectedPersonals.map((s) => s.value)
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
        let countArr = [...countList];
        let counter = countArr.slice(-1)[0];
        counter += 1;
        countArr.push(counter);	// index 사용 X
        // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
        setCountList(countArr);
    };

    const onAddLink = () => {
        let countArr = [...countLink];
        let counter = countArr.slice(-1)[0];
        counter += 1;
        countArr.push(counter);	// index 사용 X
        // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
        setCountLink(countArr);
    };


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
//     //     fields: selectedFields.map((s) => s.value),
//     //     // keywords: selectedKeywords.map((s) => s.value),
//     //     // personalities: selectedPersonals.map((s) => s.value)
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
                            <div className="col-xl-3" >
                                <Card style={{ margin: '10px 0' }}>
                                    <Card.Body>
                                        {/* <div class="itemCenter">
                                            <svg className="img-thumbnail rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                            <div class="itemCenter"><Button >변경</Button></div>
                                        </div> */}
                                        <Avatar edit={true} user_id={profile?.user_id} imgURL={profile?.imgURL}/>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>닉네임</Form.Label>
                                            <Form.Control type="text" name="nickname" placeholder=""
                                                value={profile.nickname}
                                                onChange={handleInput}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" contro lId="exampleForm.ControlInput1">
                                            <Form.Label>이름</Form.Label>
                                            <Form.Control type="text" name="name" placeholder="" onChange={handleInput}
                                                value={profile.name} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>이메일</Form.Label>
                                            <Form.Control type="text" name="email" placeholder="" onChange={handleInput}
                                                value={profile.email} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>전화번호</Form.Label>
                                            <Form.Control type="text" name="phoneNumber" placeholder="" onChange={handleInput}
                                                value={profile.phoneNumber} />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                <Card style={{ margin: '10px 0' }}>
                            <Card.Body>
                            <Card.Title>한줄 소개</Card.Title>
                                <Card.Text>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="text" name="introduceOne" placeholder=""
                                                value={profile.introduceOne}
                                                onChange={handleInput}
                                            />
                                        </Form.Group>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                            </div>
                            <div className="col-xl-9">
                                <Card style={{ margin: '10px 0' }}>
                                    <Card.Body>
                                        <Card.Title>기본 정보</Card.Title>
                                        <Card.Text>
                                            <div className="item"><div className="contentTitle">소속</div>
                                                {/* <AddInput countList={countList} /> */}


                                                <InputGroup className="mb-3">
                                                    <Form.Control
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                        type="text" name="belongs" placeholder=""
                                                        value={profile.belongs}
                                                        onChange={handleInput}
                                                    />
                                                    <Button onClick={onAddDetailDiv} variant="outline-secondary" id="button-addon2">
                                                       추가
                                                    </Button>
                                                </InputGroup>
                                                <AddInput countList={countList} onAddDetailDiv={onAddDetailDiv}/>
                                    {/* <Form.Control type="text" name="belongs" placeholder=""
                                                value={profile.belongs}
                                                onChange={handleInput}
                                            /> */}
                                     
                                            </div>
                                            <div className="item"><div className="contentTitle">분야</div>
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

                                            <div className="item">
                                                {/* <AddInput countList={countLink} />
                                    <Button onClick={onAddLink}>+</Button>
                                     <Form.Control type="text" name="links" placeholder=""
                                                value={profile.links}
                                                onChange={handleInput}
                                            /> */}
                                                <Form.Label htmlFor="basic-url">링크</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text id="basic-addon3">
                                                        https://example.com/users/
                                                    </InputGroup.Text>
                                                    <Form.Control id="basic-url" aria-describedby="basic-addon3"
                                                        type="text" name="links" placeholder=""
                                                        value={profile.links}
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
                                            <div className="item"><div className="contentTitle">키워드</div>
                                                <MultiSelect
                                                    options={keywords}
                                                    value={selectedKeywords}
                                                    onChange={setSelectedKeywords}
                                                />
                                            </div>
                                            <div className="item"><div className="contentTitle">성향</div>
                                                <MultiSelect
                                                    options={personals}
                                                    value={selectedPersonals}
                                                    onChange={setSelectedPersonals}
                                                />
                                            </div>
                                            <div className="item">
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>소개글</Form.Label>
                                                    <Form.Control as="textarea" name="introduce" placeholder="" rows={3} onChange={handleInput}
                                                        value={profile.introduce} />
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
    );
};

export default ProfileEdit;
