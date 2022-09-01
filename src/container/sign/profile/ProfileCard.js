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

export default (props) => {
    // const onClickEdit = (user) => {
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
                    <div class="col-md-3">
                        <Card style={{ margin: '10px 0' }}>
                            <Card.Body>
                                <div class="itemCenter">
                                    <svg className="img-thumbnail rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                                </div>

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
                    </div>
                    <div class="col-md-9">
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
                                        <div>
                                            {/* 테크스택으로 ? */}
                                        {/* <TechStack tech_stack={user.field} /> */}
                    {user && user.field}
                                        </div>
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
                                        <div>{user && user.keyword}</div>
                                    </div>
                                    <div class="item">
                                        <div class="contentTitle">성향</div>
                                        <div>{user && user.personality}</div>
                                        {/* 성향만 안 나오는 ? */}
                                    </div>
                                    <div class="item">
                                        <div class="contentTitle">소개글</div>
                                        <div>{user && user.intro}</div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>                    
                    <h1>그룹</h1>
                        <Card style={{ margin: '10px 0' }}>
                            <Card.Body>
                                <Card.Title>소속된 그룹</Card.Title>
                                <Card.Text>
                                {
                        groups.length > 0
                            ?
                            <>
                                {
                                    groups.map((group) => (
                                        <GroupCard
                                            key={group._id}
                                            group={group}
                                            setSelectedGroup={setSelectedGroup}
                                        />
                                    ))
                                }
                            </>
                            :
                            <div>프로젝트가 없습니다.</div>
                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ margin: '10px 0' }}>
                            <Card.Body>
                                <Card.Title>과거 소속 그룹</Card.Title>
                                <Card.Text>
                                {
                        groups.length > 0
                            ?
                            // end_project true일 경우에만 보여주기 ??
                            <> 
                                {
                                    groups.map((group) => (
                                        <GroupCard
                                            key={group._id}
                                            group={group}
                                            setSelectedGroup={setSelectedGroup}
                                        />
                                    ))
                                }
                            </>
                            :
                            <div>프로젝트가 없습니다.</div>
                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <h1>포트폴리오</h1>

                                     
                </Row>
            </Container>
        </>
    )
}