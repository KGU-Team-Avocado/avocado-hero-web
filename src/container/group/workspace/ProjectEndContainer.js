import { Alert, AlertTitle, Box, Button, Divider, Grid, Typography } from "@mui/material";
import { getGroupAsync } from "api/redux/group/groupSlice";
import axios from "axios";
import WorkspaceHeader from "component/workspace/layout/WorkspaceHeader";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProjectEndContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const params = useParams();
    const project_id = params.id;

    const endProject = () => {
        if(window.confirm('프로젝트를 종료하시겠습니까?')){
            axios.post("/groupsRouter/endProject", {
                _id: project_id,
            }).then((response) => {
                dispatch(getGroupAsync(project_id))
                navigate(`/workspace/${project_id}`,  { replace: true});
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
    return (
        <>
            <WorkspaceHeader
                title={'신청자 목록'}
            />

            <Box>
                <Alert severity="warning" action={
                    <Button color="error" size="large" onClick={() => endProject()}>
                        종료
                    </Button>
                }>
                    <Typography variant="h6" gutterBottom >프로젝트를 종료하시겠습니까?</Typography>
                    <Typography variant="body1" >프로젝트 종료 후에는 프로젝트 내용을 수정할 수 없으며, <strong>팀원 상대평가</strong>가 이뤄집니다. 종료를 원하시면 우측의 <strong>'종료'</strong> 버튼을 눌러주세요.</Typography>
                </Alert>
            </Box>

            <Alert>
                이 부분 지금 오류 있는데?
            </Alert>
        </> 
    )
}

export default ProjectEndContainer;