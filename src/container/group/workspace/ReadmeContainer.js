import { Button } from "@mui/material"
import WorkspaceHeader from "component/workspace/layout/WorkspaceHeader"

export default () => {
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
        </>
    )
}