import ClearIcon from '@mui/icons-material/Clear';

import { Box, DialogTitle, Typography, IconButton, Button, Stack, DialogContent } from "@mui/material";
import ProfileGroup from 'container/sign/profile/view/ProfileGroup';

const WorkspaceListModal = ({ setOpen, user_id }) => {
    return (
        <>
            <Box
                sx={{
                    p: {
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                        xxl: 6
                    },
                }}
            >
                <DialogTitle id="scroll-dialog-title">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h4">
                            다른 워크스페이스 목록
                        </Typography>
                        <IconButton size="large" onClick={() => setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    다른 프로젝트 리스트 보여주는 기능
                    참고로 다른 테마에서 사용한 기능 재사용은 Modal이 중복되어 오류가 나므로 여기에서 사용할 수 없으므로 새로 만들어줘야함                    
                </DialogContent>
                <Stack>
                    <Button
                        color="success"
                        onClick={() => setOpen(false)}
                        fullWidth
                    // disabled={userInfo === null}
                    >
                        닫기
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default WorkspaceListModal;