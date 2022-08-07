import { useEffect, useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default (props) => {
    const [isEdit, setIsEdit] = useState(false);

    const onClickSubmit = (e) => { // 수정모드 함수
        setIsEdit(!isEdit);
    };

    return (
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

                                                <div class="itemCenter">
                                                    <h4>닉네임{props.profile && props.profile.nickname}</h4>
                                                </div>
                                                <div class="itemCenter">
                                                    <div>이름{props.profile && props.profile.name}</div>
                                                </div>
                                                <div class="itemCenter">
                                                    <div>이메일{props.profile && props.profile.email}</div>
                                                </div>
                                                <div class="itemCenter">
                                                    <div>전화번호{props.profile && props.profile.phoneNum}</div>
                                                </div>
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
                                        <div>{props.profile && props.profile.belong}</div>
                                    </div>
                                    <div class="item">
                                        <div class="contentTitle">분야</div>
                                        <div>{props.profile && props.profile.field}</div>
                                    </div>

                                    <div class="item">
                                        <div class="contentTitle">링크</div>
                                        <div><a href="https://github.com/KGU-Team-Avocado">{props.profile && props.profile.link}</a></div>
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
                                        <div>{props.profile && props.profile.keyword}</div>
                                    </div>
                                    <div class="item">
                                        <div class="contentTitle">성향</div>
                                        <div>{props.profile && props.profile.personal}</div>
                                    </div>
                                    <div class="item">
                                        <div class="contentTitle">소개글</div>
                                        <div>{props.profile && props.profile.intro}</div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <Button onClick={(e) => onClickSubmit(e)}>프로필 수정</Button>
                </Row>
            </Container>
        </>
    )
}