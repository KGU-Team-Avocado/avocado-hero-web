import { useState } from "react"
import { Link } from "react-router-dom";
import GroupCard from "../../../component/group/card/GroupCard"
import GroupCeateModal from "./modal/GroupCeateModal";
import GroupJoinModal from "./modal/GroupJoinModal";

export default () => {

    const [groups, setGroups] = useState([
        {
            _id: 0,
            manager: "gabrielyoon7",
            name: "아보카도",
            title: "콘솔",
            intro_text: "우리 같이 개발해요",
            description: "상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        },
        {
            _id: 1,
            manager: "wlstn",
            name: "아보카도",
            title: "리액트 튜토리얼",
            intro_text: "우리 같이 개발해요",
            description: "상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        },
        {
            _id: 2,
            manager: "yeonsu",
            name: "아보카도",
            title: "히어로",
            intro_text: "우리 같이 개발해요",
            description: "상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        },
        {
            _id: 3,
            manager: "seeun",
            name: "팀 명",
            title: "프로젝트명",
            intro_text: "우리 같이 개발해요 우리 같이 개발해요 ",
            description: "상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        },
    ]);

    const [selectedGroup, setSelectedGroup] = useState(null);

    return (
        <>
            <div className="">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2>프로젝트 찾기</h2>
                    </div>
                    <div>
                        <Link className="btn btn-outline-success" to='/myWorkspace/'>내 워크스페이스 보기</Link>
                        <a className="btn btn-primary mx-2" href="#" data-bs-toggle="modal" data-bs-target="#group_create">프로젝트 등록하기</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">훌륭한 팀을 구해보아요</div>
                    <div className="col-sm-6 text-end"><a className="mx-2" href="#">정렬▿</a><a className="mx-2" href="#">필터링▿</a></div>
                </div>
            </div>
            <div className="row">
                {
                    groups.length > 0
                        ?
                        groups.map((group) => (
                            <GroupCard
                                key={group._id}
                                group={group}
                                setSelectedGroup={setSelectedGroup}
                            />
                        ))
                        :
                        <div>그룹이 없습니다.</div>
                }
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="group_create" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <GroupCeateModal />
            </div>
            <div className="modal fade" id="group_join" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <GroupJoinModal
                    selectedGroup={selectedGroup}
                />
            </div>
        </>
    )
}