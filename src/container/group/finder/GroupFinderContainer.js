import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import GroupCard from "../../../component/group/card/GroupCard"
import GroupCeateModal from "./modal/GroupCeateModal";
import GroupJoinModal from "./modal/GroupJoinModal";

export default () => {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios.get("/groupsRouter/getGroup").then((response) => {
            console.log(JSON.stringify(response.data))
            setGroups(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, [])
    
    const [userInfo, setUserInfo] = useState(null);
  
    useEffect(() => {
      if (sessionStorage.getItem("user")) {
        setUserInfo(JSON.parse(sessionStorage.getItem("user")));
      }
    }, []);

    const [selectedGroup, setSelectedGroup] = useState(null);

    return (
        <>
            <div className="">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2>프로젝트 찾기</h2>
                    </div>
                    {
                        userInfo&&
                        <div>
                            <Link className="btn btn-outline-success" to='/myWorkspace/'>내 워크스페이스 보기</Link>
                            <a className="btn btn-primary mx-2" href="#" data-bs-toggle="modal" data-bs-target="#group_create">프로젝트 등록하기</a>
                        </div>
                    }
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