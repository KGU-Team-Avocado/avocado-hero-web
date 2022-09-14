import { useEffect, useState, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfileUpdate from "./ProfileUpdate";
import { useResolvedPath } from "react-router-dom";
import TechStack from "../../../component/common/TechStack";
import { Link } from 'react-router-dom';
import GroupCard from "../../../component/group/card/GroupCard";
import Avatar from "./avatar/Avatar";

export default (props) => {
    // const onClickEdit = (user) => {ㅇㅇ
    //     window.location.href="./ProfileUpdate"
    //     return (
    //         <ProfileUpdate />
    //     )
    // }

    const [groups, setGroups] = useState([]);
    // const [selectedGroup, setSelectedGroup] = useState(null);
    const setSelectedGroup = (group) => {
        // alert(JSON.stringify(group))
        if (window.confirm(group.project_name + '으로 이동하시겠습니까?')) {
            window.location.href = "/project/" + group._id;
        }
    }

    const user = props.profile;
    console.log(user);

    // const belongs = user.belong;
    // const fields = user.field;
    // const links = user.link;
    // const keywords = user.keyword;
    // const personals = user.personal;

    // const Map = (mapper) => {
    //     return (
    //         <div>{mapper}</div>
    //     )
    // }

    return (
        <>

            <Container>
                <Row>
                    <div class="col-xl-3">
                        <Card style={{ margin: '10px 0' }}>
                            <Card.Body>
                                <Avatar user_id={user?.user_id}/>
                                <div class="itemCenter">
                                    <h4>{user && user.nickname}</h4>
                                </div>
                                <div class="itemCenter">
                                    <div>{user && user.name}</div>
                                </div>
                                <div class="itemCenter">
                                    <div>{user && user.email}</div>
                                </div>
                                <div class="itemCenter">
                                    <div>{user && user.phoneNum}</div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ margin: '10px 0' }}>
                            <Card.Body>
                            <Card.Title>한줄 소개</Card.Title>
                                <Card.Text>
                                    
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-xl-9">
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                {/* <div><strong>알림!</strong></div> */}
                                <div>멋진 프로필을 작성하면 기업이 당신을 스카우트할 수 있습니다.
                                    {/* <a href={url}>{url}</a> 으로 접속하세요. </div> */}
                                {/* <button className="btn btn-outline-success" onClick={() => copyURL()}>주소를 클립보드로 복사하기</button> */}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            </div>
                            <Card style={{ margin: '10px 0' }}>
                        <Card.Body>
                                <Card.Title>기본 정보</Card.Title>
                                <Card.Text>
                                    <div class="item">
                                        <div class="contentTitle">소속</div>
                                        <div>
                                            {/* {
                                                belongs.map(belong => (<Map mapper={belong} />))
                                            } */}
                                            {user && user.belong}
                                            </div>
                                    </div>
                                    <div class="item">
                                        <div class="contentTitle">분야</div>
                                        <div>{user && <TechStack tech_stack={user.field}/>}</div>
                                    </div>

                                    <div class="item">
                                        <div class="contentTitle">링크</div>
                                        <div><a href="https://github.com/KGU-Team-Avocado">{user && user.link}</a></div>
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
                                        <div>{user && <TechStack tech_stack={user.keyword}/>}</div>
                                    </div>
                                    <div class="item">
                                        <div class="contentTitle">성향
                                        <br />
                                        (성향만 보기가 안 뜸 .. 수정은 가능)</div>
                                        {/* <div>{user && <TechStack tech_stack={user.personality
}/>}</div> */}
<div>{user && user.personality}</div>
                                    </div>
                                    <div class="item">
                                        <div class="contentTitle">소개글</div>
                <Card>
                    <Card.Body>
                    <div>{user && user.intro}</div>
                    </Card.Body>
                    </Card>                        
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>












                            </div>
                    <div class="col-xl-9">
                       
                    </div>
                </Row>
            </Container>
        </>
    )
}