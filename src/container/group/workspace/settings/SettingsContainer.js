import { Stack, Typography } from "@mui/material"
import ResponsiveCard from "component/common/ResponsiveCard"
import WorkspaceHeader from "component/workspace/layout/WorkspaceHeader"
import ProjectEndContainer from "./ProjectEndContainer"
import ProjectMembersContainer from "./MembersContainer"
import RoleContainer from "./RoleContainer"
import { User as UserIcon } from '../../../../component/workspace/icons/user';
import { Users as UsersIcon } from '../../../../component/workspace/icons/users';
import { XCircle as XCircleIcon } from '../../../../component/workspace/icons/x-circle';

const SettingsContainer = () => {

    return (
        <>
            <WorkspaceHeader
                title={'설정'}
                action={
                    <></>
                }
            />

            <Stack spacing={2}>
                <Typography variant="h4">
                    <UserIcon /> 역할
                </Typography>
                {/* <ResponsiveCard> */}
                <RoleContainer title="역할" />
                {/* </ResponsiveCard> */}
                <Typography variant="h4">
                    <UsersIcon /> 멤버 관리
                </Typography>
                {/* <ResponsiveCard> */}
                <ProjectMembersContainer />
                {/* </ResponsiveCard> */}
                <Typography variant="h4">
                    <XCircleIcon /> 프로젝트 종료
                </Typography>
                <ResponsiveCard>
                    <ProjectEndContainer />
                </ResponsiveCard>
            </Stack>
        </>
    )
}

export default SettingsContainer;