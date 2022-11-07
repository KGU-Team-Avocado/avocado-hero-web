import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material"
import { selectGroup } from "api/redux/group/groupSlice";
import WorkspaceHeader from "component/workspace/layout/WorkspaceHeader"
import { useDispatch, useSelector } from "react-redux";
import Readme from "./Readme"
import ReadmeModal from "./ReadmeModal";
import ModalStaticBackdrop from 
"avocado-hero-web/src/componenet/common/modal/ModalStaticBackdrop";

export default () => {
    const group = useSelector(selectGroup);
    const dispatch = useDispatch();

    const [readMe, setReadme] = useState('');

    const [readmeCreaeteModalOpen, setReadmeCreateModalOpen] = useState(false);

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
                        onClick={() => setReadmeCreateModalOpen(true)}
                    >
                        수정하기(리드미 작성)
                    </Button>
                }
            />
            <Box>
                <Readme group_id={group?._id} />
            </Box>
            <ModalStaticBackdrop
                keepMounted
                width="md"
                open={readmeCreaeteModalOpen} component={<ReadmeModal readmeCreaeteModalOpen={readmeCreaeteModalOpen} setOpen={setReadmeCreateModalOpen} />}
                />
        </>
    )
}