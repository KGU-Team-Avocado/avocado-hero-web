import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";

import React, { useState } from "react";

const SignUpContainer = () => {
  const [userID, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

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

  const onClick = (e) => {
    e.preventDefault();
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
    <div
      style={{
        width: "50%",
      }}
    >
      <>회원가입 관련 메뉴</>
      <div className="sign_up">
        <Container className="panel">
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
                  placeholder="UserID"
                  value={userID}
                  onChange={onUserIdHandler}
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
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
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
                  placeholder="Confirm Password"
                  value={confirmPassword}
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
                  placeholder="Username"
                  value={userName}
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
                  onChange={onEmailHandler}
                />
              </Col>
            </Form.Group>
            <br />

            <div className="d-grid gap-1">
              <Button variant="secondary" type="submit" onClick={onClick}>
                Sign Up
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default SignUpContainer;
