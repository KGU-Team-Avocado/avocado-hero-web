import { Alert, Box, Button, Stack, Typography } from "@mui/material"
import ResponsiveCard from "component/common/ResponsiveCard"
import WorkspaceHeader from "component/workspace/layout/WorkspaceHeader"
import ProjectEndContainer from "./ProjectEndContainer"
import ProjectMembersContainer from "./ProjectMembersContainer"
import ProjectRoleContainer from "./ProjectRoleContainer"

export default () => {
    return (
        <>
            <WorkspaceHeader
                title={'설정'}
                action={
                    <></>
                }
            />

            <Stack spacing={2}>
                <Alert>
                    설정 (역할/멤버관리/프로젝트종료 합친 메뉴인데 테스트용임)
                </Alert>
                <Typography variant="h5">
                    역할
                </Typography>
                <ResponsiveCard>
                    <ProjectRoleContainer />
                </ResponsiveCard>
                <Typography variant="h5">
                    멤버 관리
                </Typography>
                <ResponsiveCard>
                    <ProjectMembersContainer />
                </ResponsiveCard>
                <Typography variant="h5">
                    프로젝트 종료
                </Typography>
                <ResponsiveCard>
                    <ProjectEndContainer />
                </ResponsiveCard>
            </Stack>
        </>
    )
}