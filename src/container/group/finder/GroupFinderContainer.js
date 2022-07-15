import { useState } from "react"
import GroupCard from "../../../component/group/card/GroupCard"

export default () => {

    const [groups, setGroups] = useState([
        {
            _id: 0,
            name:"아보카도",
            title: "콘솔",
            description: "우리 같이 개발해요",
        },
        {
            _id: 1,
            name:"아보카도",
            title: "리액트 튜토리얼",
            description: "우리 같이 개발해요",
        },
        {
            _id: 2,
            name:"아보카도",
            title: "히어로",
            description: "우리 같이 개발해요",
        },
        {
            _id: 3,
            name:"팀 명",
            title: "프로젝트명",
            description: "우리 같이 개발해요 우리 같이 개발해요 ",
        },
    ]);

    return (
        <>
            <div>
                <h3>그룹찾기</h3>
                <p>훌륭한 팀을 구해보아요</p>
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
        </>
    )
}