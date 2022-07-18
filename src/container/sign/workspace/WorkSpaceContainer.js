import { useState } from "react";
import GroupCard from "../../../component/group/card/GroupCard";
import ProjectCard from "../../../component/workspace/card/ProjectCard";

export default () => {
    const [projects, setProjects] = useState([
        {
            _id: 0,
            manager:"gabrielyoon7",
            name: "아보카도",
            title: "콘솔",
            intro_text: "우리 같이 개발해요",
            description:"상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        },
        {
            _id: 1,
            manager:"wlstn",
            name: "아보카도",
            title: "리액트 튜토리얼",
            intro_text: "우리 같이 개발해요",
            description:"상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        }
    ]);

    return (
        <>
            <div className="position-sticky">
                <h2>내 워크스페이스</h2>
                <div className="row">
                    <div className="col-sm-6">훌륭한 팀을 구해보아요</div>
                    <div className="col-sm-6 text-end"><a className="mx-2" href="#">정렬▿</a><a className="mx-2" href="#">필터링▿</a></div>
                </div>
            </div>
            <div className="row">
                {
                    projects.length > 0
                        ?
                        projects.map((project) => (
                            <ProjectCard
                                key={project._id}
                                group={project}
                            />
                        ))
                        :
                        <div>프로젝트가 없습니다.</div>
                }
            </div>
        </>
    )
}