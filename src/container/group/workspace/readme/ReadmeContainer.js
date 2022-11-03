import { Box, Button } from "@mui/material"
import { selectGroup } from "api/redux/group/groupSlice";
import WorkspaceHeader from "component/workspace/layout/WorkspaceHeader"
import { useDispatch, useSelector } from "react-redux";
import Readme from "./Readme"

export default () => {
    const group = useSelector(selectGroup);
    const dispatch = useDispatch();

    return (
        <>
            <WorkspaceHeader
                title={'Read Me'}
                action={
                    <Button
                        color="secondary"
                        variant="outlined"
                        aria-label="upload picture"
                        component="label"
                    //  onClick={() => setShow(true)} 
                    >
                        수정하기
                    </Button>
                }
            />
            <Box>
                <Readme group_id={group?._id}/>
            </Box>
        </>
    )
}