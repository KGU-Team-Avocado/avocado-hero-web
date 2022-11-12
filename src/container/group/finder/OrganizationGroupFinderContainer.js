import { Alert, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from '../../../api/API';
import InfinityScrollGroupList from "./InfinityScrollGroupList";

const OrganizationGroupFinderContainer = () => {
    const params = useParams(); //url로 넘어온 파라미터를 받는 역할 (App.js 의 :id 참고)
    const code = params.code; //(params의 :code를 받는 역할)

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