import { Alert, Stack, Tooltip, Typography } from "@mui/material";
import { selectUser } from "api/redux/user/userSlice";
import MKButton from "component/common/mui-components/MKButton";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as API from '../../../api/API';
import GroupCreateButton from "./GroupCreateButton";
import InfinityScrollGroupList from "./InfinityScrollGroupList";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const OrganizationGroupFinderContainer = () => {
    const params = useParams(); //url로 넘어온 파라미터를 받는 역할 (App.js 의 :id 참고)
    const code = params.code; //(params의 :code를 받는 역할)
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    const [organization, setOrganization] = useState(null);

    const [groups, setGroups] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getOrganizationByCode();
        // getGroupsByCode();
    }, []);

    const getOrganizationByCode = async () => {
        const result = await API.getOrganizationByCode(code);
        if (result === null) {
            alert('존재하지 않는 조직입니다.')
        }
        else {
            setOrganization(result)
        }
    }

    return (
        <>
            {
                organization
                    ?
                    <Stack spacing={1}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={3}
                        >
                            <Typography variant="h1">
                                {organization.title}
                            </Typography>
                            <Typography variant="h1">
                                {organization.code}
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={3}
                        >
                            <MKButton
                                color="error"
                                variant="outlined"
                                onClick={() => navigate('/groupFinder')}
                            >
                                <ArrowBackIcon />돌아가기
                            </MKButton>
                            <Stack
                                direction="row"
                                spacing={1}
                            >
                                <Tooltip title={user ? "나의 워크스페이스 목록을 조회합니다." : "로그인이 필요한 메뉴입니다."}>
                                    <MKButton
                                        variant="outlined"
                                        color={user ? "success" : "secondary"}
                                        onClick={() => user && navigate('/myWorkspace/')}
                                    >
                                        내 워크스페이스 보기
                                    </MKButton>
                                </Tooltip>
                                <GroupCreateButton code={code} />
                            </Stack>
                        </Stack>

                        <Alert>
                            {organization.notice}
                        </Alert>

                        <Alert color="warning">
                            조직 관리자가 설정한 최대 팀의 갯수는 {organization.maxTeam}팀이며, 팀 당 최대 인원은 {organization.maxMember}명 입니다.
                        </Alert>
                        <InfinityScrollGroupList
                            code={code}
                            groups={groups}
                            setGroups={setGroups}
                            isLoading={isLoading}
                            setLoading={setLoading}
                        />
                    </Stack>
                    :
                    <Typography>존재하지 않는 조직입니다.</Typography>
            }
        </>
    )
}

export default OrganizationGroupFinderContainer;