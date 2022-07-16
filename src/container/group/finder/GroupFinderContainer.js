import { useState } from "react"
import GroupCard from "../../../component/group/card/GroupCard"
import GroupCeateModal from "./GroupCeateModal";

export default () => {

    const [groups, setGroups] = useState([
        {
            _id: 0,
            name: "아보카도",
            title: "콘솔",
            description: "우리 같이 개발해요",
        },
        {
            _id: 1,
            name: "아보카도",
            title: "리액트 튜토리얼",
            description: "우리 같이 개발해요",
        },
        {
            _id: 2,
            name: "아보카도",
            title: "히어로",
            description: "우리 같이 개발해요",
        },
        {
            _id: 3,
            name: "팀 명",
            title: "프로젝트명",
            description: "우리 같이 개발해요 우리 같이 개발해요 ",
        },
    ]);

    return (
        <>
            <div className="position-sticky">
                <h2>프로젝트 찾기</h2>
                <div className="row">
                    <div className="col-sm-6">훌륭한 팀을 구해보아요</div>
                    <div className="col-sm-6 text-end"><a className="mx-2" href="#">정렬▿</a><a className="mx-2" href="#">필터링▿</a><a href="#" className="mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">프로젝트 등록하기</a></div>
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
                            />
                        ))
                        :
                        <div>그룹이 없습니다.</div>
                }
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <GroupCeateModal />
            </div>
        </>
    )
}