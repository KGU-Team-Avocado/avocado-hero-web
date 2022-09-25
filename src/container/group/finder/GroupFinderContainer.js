import { Button } from "@mui/material";
import axios from "axios";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import GroupCardV2 from "component/group/card/GroupCardV2";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import GroupCeateModal from "./modal/GroupCeateModal";
import GroupJoinModalV2 from "./modal/GroupJoinModalV2";

export default () => {

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setUserInfo(JSON.parse(sessionStorage.getItem("user")));
        }
    }, []);

    
    const [groupCreateModalOpen, setGroupCreateModalOpen] = useState(false);
    const [groupJoinModalOpen, setGroupJoinModalOpen] = useState(false);

    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);

    useEffect(() => {
        axios.get("/groupsRouter/getGroups").then((response) => {
            // console.log(JSON.stringify(response.data))
            setGroups(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, [])

    const handleGroupCard = (group) => {
        setSelectedGroup(group)
        setGroupJoinModalOpen(true)
    }

    return (
        <>

            <div className="">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2>프로젝트 찾기</h2>
                    </div>
                    {
                        userInfo &&
                        <div>
                            <Link className="btn btn-outline-success" to='/myWorkspace/'>내 워크스페이스 보기</Link>
                            {/* <a className="btn btn-primary mx-2" href="#" data-bs-toggle="modal" data-bs-target="#group_create">프로젝트 등록하기</a> */}
                            <Button variant="contained" onClick={() => setGroupCreateModalOpen(true)}>프로젝트 등록하기(New)</Button>
                        </div>
                    }
                </div>
                <div className="row">
                    <div className="col-sm-6">훌륭한 팀을 구해보아요</div>
                    <div className="col-sm-6 text-end"><a className="mx-2" href="#">정렬▿</a><a className="mx-2" href="#">필터링▿</a></div>
                </div>
            </div>
            <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
                {
                    groups.length > 0
                        ?
                        groups.map((group) => (
                            <GroupCardV2
                                key={group._id}
                                group={group}
                                handleGroupCard={handleGroupCard}
                            />
                        ))
                        :
                        <div>그룹이 없습니다.</div>
                }
            </div>
            <ModalStaticBackdrop
                keepMounted
                width="md"
                open={groupJoinModalOpen}
                component={<GroupJoinModalV2 selectedGroup={selectedGroup} setOpen={setGroupJoinModalOpen} />}
            />
            <ModalStaticBackdrop
                keepMounted
                width="md"
                open={groupCreateModalOpen}
                component={<GroupCeateModal setOpen={setGroupCreateModalOpen} />}
            />
        </>
    )
}