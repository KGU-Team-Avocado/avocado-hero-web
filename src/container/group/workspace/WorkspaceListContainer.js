import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GroupCard from "../../../component/group/card/GroupCard";
import Table from "../../../component/common/Table";
import { useDispatch } from "react-redux";
import { getGroupAsync, selectedGroup } from "api/redux/group/groupSlice";

export default () => {
    const [groups, setGroups] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const setSelectedGroup = (group) => {
        if (window.confirm(group.project_name + '으로 이동하시겠습니까?')) {
            // window.location.href = "/project/" + group._id;
            dispatch(selectedGroup(group));
            navigate(`/workspace/${group._id}`)
        }
    }

    const [appliedGroups, setAppliedGroups] = useState([]);
    const sessionStorage = window.sessionStorage;

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            const userInfo = JSON.parse(sessionStorage.getItem("user"))
            axios.post("/groupsRouter/getAppliedGroup", {
                user_id: userInfo.user_id,
            }).then((response) => {
                setAppliedGroups(response.data);
            }).catch(function (error) {
                console.log(error);
            });
            axios.post("/groupsRouter/getMyGroup", {
                user_id: userInfo.user_id,
            }).then((response) => {
                setGroups(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, []);

    return (
        <>
            <div className="position-sticky">
                <h2>내 워크스페이스</h2>
                <div className="row">
                    <div className="col-sm-6">소속한 팀과 신청한 팀을 확인해보아요</div>
                    <div className="col-sm-6 text-end"><a className="mx-2" href="#">정렬▿</a><a className="mx-2" href="#">필터링▿</a></div>
                </div>
            </div>
            <div className="my-3">
                <h3>소속된 그룹</h3>
                <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
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
                </div>
            </div>
            <div className="my-3">
                <h3>신청한 그룹</h3>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-light text-center">
                            <tr>
                                <th scope="col">그룹명</th>
                                <th scope="col">프로젝트명</th>
                                <th scope="col">상태</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider text-center">
                            {
                                appliedGroups.map((log) => (
                                    <tr key={log._id}>
                                        <td>{log.group_name}</td>
                                        <td>{log.project_name}</td>
                                        <td>{log.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {/* <Table data={appliedGroups} rowsPerPage={10} /> */}
            </div>
        </>
    )
}