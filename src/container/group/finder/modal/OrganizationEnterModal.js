import ClearIcon from '@mui/icons-material/Clear';
import { Box, DialogContent, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import MKButton from 'component/common/mui-components/MKButton';
import { useState } from 'react';
import * as API from '../../../../api/API';

const OrganizationEnterModal = (props) => {

    const [code, setCode] = useState('');

    const hanldeCodeInput = (state) =>{
        setCode(state.target.value)
    }

    const checkCode = (code) => {

    }

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
                    // width:"100%"
                }}
            >
                <DialogTitle id="scroll-dialog-title">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h3">
                            입장하기
                        </Typography>
                        <IconButton
                            size="large"
                            onClick={() => {
                                props.setOpen(false);
                            }}>
                            <ClearIcon fontSize="inherit" />
                        </IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Typography variant='h5'>
                        입장 코드를 입력하세요
                    </Typography>
                    <TextField label="CODE" value={code} onChange={hanldeCodeInput} fullWidth/>
                </DialogContent>
                {/* <DialogActions> */}
                <MKButton
                    color="success"
                    // onClick={() => groupApply()}
                    fullWidth
                >
                    입장하기
                </MKButton>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}

export default OrganizationEnterModal;