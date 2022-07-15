import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import div from "react-bootstrap/Container";
import axios from "axios";

import { useRef, useState } from "react";

const SignUpContainer = () => {
  const UserIDInput = useRef();
  const PasswordInput = useRef();
  const ConfirmPasswordInput = useRef();
  const UserNameInput = useRef();
  const EmailInput = useRef();

  const [userID, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("개인");

  //const [checkError, setCheckError] = useState("");

  const onUserIdHandler = (e) => {
    setUserId(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onUserNameHandler = (e) => {
    setUserName(e.currentTarget.value);
  };

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleRadiobutton = (e) => {
    setType(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();

    if (userID.length < 1) {
      UserIDInput.current.focus();
      return;
    } else if (password.length < 1) {
      PasswordInput.current.focus();
      return;
    } else if (confirmPassword.length < 1) {
      ConfirmPasswordInput.current.focus();
      return;
    } else if (userName.length < 1) {
      UserNameInput.current.focus();
      return;
    } else if (email.length < 1) {
      EmailInput.current.focus();
      return;
    } else {
      if (password !== confirmPassword) {
        return alert("비밀번호 확인이 일치하지 않습니다.");
      }

      console.log(userID + password + confirmPassword + userName + email);
      axios
        .post("/usersRouter/register", {
          user_id: userID,
          user_password: password,
          user_name: userName,
          user_email: email,
          user_type: type,
        })
        .then((response) => {
          console.log(response);
          if (response.data.idCheck === false) {
            alert("이미 사용중인 아이디입니다.");
            //setCheckError("이미 사용중인 아이디입니다");
          }
          if (response.data.success === true) {
            window.location.href = "/";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="d-flex justify-content-center pt-5">
      <div
        className="card p-5 w-100"
        style={{ maxWidth: "500px", minWidth: "300px" }}
      >
        <h1>회원가입</h1>
        <div className="py-3">
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Col sm>
                <Form.Control
                  name="userID"
                  type="text"
                  placeholder="아이디"
                  value={userID}
                  ref={UserIDInput}
                  onChange={onUserIdHandler}
                />
              </Col>
              {/* <span id="checkMess">{checkError}</span> */}
              {/* <Form.Text className="text-muted">{checkError}</Form.Text> */}
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Col sm>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  ref={PasswordInput}
                  onChange={onPasswordHandler}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Col sm>
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  ref={ConfirmPasswordInput}
                  onChange={onConfirmPasswordHandler}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Col sm>
                <Form.Control
                  name="userName"
                  type="text"
                  placeholder="이름"
                  value={userName}
                  ref={UserNameInput}
                  onChange={onUserNameHandler}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Col sm>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  ref={EmailInput}
                  onChange={onEmailHandler}
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <label>
                <input
                  type="radio"
                  value="개인"
                  checked={type === "개인"}
                  onClick={handleRadiobutton}
                />
                개인
              </label>
              <label class="form-check form-check-inline">
                <input
                  type="radio"
                  value="기업"
                  checked={type === "기업"}
                  onClick={handleRadiobutton}
                />
                기업
              </label>
            </Form.Group>
            <br />
            <div className="d-grid gap-1">
              <Button variant="secondary" type="submit" onClick={onClick}>
                회원가입
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpContainer;
