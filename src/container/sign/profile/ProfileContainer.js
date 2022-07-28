import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { MultiSelect } from "react-multi-select-component";



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
        belong: '',
      });

      const onChange =(e) => { // 입력 함수
        const { value, name } = e.target;
        setInputs({
          ...inputs, 
          [name]: value
        });
      };

      const { nickname, email, phoneNum, birth, belong } = inputs;

    const onClickSubmit = (e) => { 
        e.preventDefault();

        axios
            .post("/usersRouter/profileUpdate", {
                user_id: user_id,
                user_nickname: nickname,
                user_email: email,
                user_phoneNum: phoneNum,
                user_birth: birth,
                user_belong: belong,
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

    const options = [
        { label: "React", value: "react" },
        { label: "Node.js", value: "nodejs" },
        { label: "Mongo DB", value: "mongodb" },
        { label: "??", value: "??", disabled: true },
    
    ];

    // const [countList, setCountList] = useState([0])

    // const onAddDetailDiv = () => {
    //   let countArr = [...countList]
    //   let counter = countArr.slice(-1)[0]
    //   counter += 1
    //   countArr.push(counter)	// index 사용 X
    //   // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용	
    //   setCountList(countArr)
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
                                <Form.Control type="text" name="nickname" value={nickname} placeholder="닉네임" onChange={onChange} />
                                <Form.Control type="text" name="email" value={email} placeholder="이메일" onChange={onChange} />
                                <Form.Control type="text" name="phoneNum" value={phoneNum} placeholder="전화번호" onChange={onChange} />
                                <Form.Control type="text" name="birth" value={birth} placeholder="생년월일" onChange={onChange} /> 
                                {/* date형으로 바꿔야 함 */}
                            </Card.Body>
                            </Card>
                            </div>
                            <div class="col-md-9">
                            <Card style={{ height: '30rem', margin: '10px 0' }}>
                            <Card.Body>
                                <Card.Title>기본 정보</Card.Title>
                                <Card.Text>
                                <MultiSelect
                                options={options}
                                // value={selected}
                                // onChange={setSelected}
                                labelledBy="Select"
                            />    


      {/* <DetailList countList={countList} /> */}
      {/* <Button onClick={onAddDetailDiv}>
        추가
      </Button> */}
                                    
                                    {/* <Form.Control type="text" name="belong" value={belong} placeholder="소속" onChange={onChange} /> 
                                    <Button onClick={onAddText}>+</Button> */}
                                
                                    </Card.Text>
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