import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GroupCard from "../../../component/group/card/GroupCard";
import Table from "../../../component/common/Table";
import { useDispatch, useSelector } from "react-redux";
import { getGroupAsync, selectedGroup } from "api/redux/group/groupSlice";
import GroupCardV2 from "component/group/card/GroupCardV2";
import { Grid, Stack, Typography } from "@mui/material";
import ProfileGroup from "container/sign/profile/view/ProfileGroup";
import { selectUser } from "api/redux/user/userSlice";

export default () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const [appliedGroups, setAppliedGroups] = useState([]);
    const sessionStorage = window.sessionStorage;

    useEffect(() => {
        axios.post("/groupsRouter/getAppliedGroup", {
            user_id: user.user_id,
        }).then((response) => {
            setAppliedGroups(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <>
            <Stack>
                <Typography variant="h3">
                    소속된 그룹
                </Typography>
                <ProfileGroup user_id={user.user_id}/>
            </Stack>
            <div className="my-3">
                <h3>그룹 신청 결과</h3>
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