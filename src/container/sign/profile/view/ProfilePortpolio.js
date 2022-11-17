import axios from "axios";
import { useEffect, useState } from "react";
import RoleCard from "component/group/card/RoleCard";
import { ResponsiveBar } from '@nivo/bar';
import { role } from "../../../../assets/tag/Role";
import ProfilePieChart from "./ProfilePieChart";
import { Alert, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfileRadar from "./ProfileRadar";

const ProfilePortpolio = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [groups, setGroups] = useState([]);
    const [roleStatistics, setRoleStatistics] = useState([])
    const [showRoleStatistics, setShowRoleStatistics] = useState(false)
    const [evalStatistics, setEvalStatistics] = useState([])
    const [showEvalStatistics, setShowEvalStatistics] = useState(false)

    const setSelectedGroup = (group) => {
        if (window.confirm(group.project_name + '으로 이동하시겠습니까?')) {
            window.location.href = "/project/" + group._id;
        }
    };
    const sessionStorage = window.sessionStorage;

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            const userInfo = JSON.parse(sessionStorage.getItem("user"));
            setUser(userInfo);
            axios.post("/evaluationsRouter/getEvalStatistics", {
                user_id: userInfo.user_id,
            }).then((response) => {
                if (response.data !== []) {
                    setEvalStatistics(response.data[0].score_eval);
                    setShowEvalStatistics(true);
                }
            }).catch(function (error) {
                console.log(error);
            });

            axios.post("/groupsRouter/getMyGroup", {
                user_id: userInfo.user_id,
            }).then((response) => {
                setGroups(response.data);
                formatRoleData(response.data, userInfo.user_id);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, []);

    const formatRoleData = (groups, user_id) => {
        const role_statistics = role.map((r) => { return { "id": r.value, "label": r.label, "value": 0 } })
        groups.map((group) => {
            const user_role = group.members.find((m) => m.user_id === user_id).user_role;
            user_role?.map((r) => role_statistics.find(rs => rs.id === r).value += 1)
        })

        const result = role_statistics.filter((r) => r.value > 0)
        if (result.length > 0) {
            setShowRoleStatistics(true);
            setRoleStatistics(result);
        }
    }

    return (
        <>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">통계</h1>
            </div>

            <Grid container spacing={1}>

                {showRoleStatistics ?
                    <Grid item sm={12} lg={6} minHeight={160}><ProfilePieChart data={roleStatistics} /></Grid>
                    : <Grid xs={12}><Alert action={
                        <Button color="error" size="large" onClick={() => navigate(`/groupFinder`)}>
                            프로젝트 리스트 보기
                        </Button>} severity="info">역할 통계 데이터가 존재하지 않습니다. 프로젝트에 참여하여 새로운 역할을 받아보세요!</Alert></Grid>
                }

                {showEvalStatistics ?
                    <Grid item sm={12} lg={6} minHeight={160}><ProfileRadar data={evalStatistics} user_id={user?.user_id} /></Grid>
                    : <Grid xs={12}><Alert action={
                        <Button color="error" size="large" onClick={() => navigate(`/myWorkspace`)}>
                            내 워크스페이스 가기
                        </Button>} severity="info">상호평가 통계 데이터가 존재하지 않습니다. 프로젝트 워크스페이스로 이동해 종료 프로젝트에서 상호평가를 진행해보세요!</Alert></Grid>
                }

            </Grid>
        </>
    );
};

export default ProfilePortpolio;