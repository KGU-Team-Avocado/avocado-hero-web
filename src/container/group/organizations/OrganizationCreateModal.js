import { Box, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import { useState } from "react";
import * as API from "../../../api/API"
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";

const OrganizationCreateModal = (props) => {

    const user = useSelector(selectUser);

    const [organization, setOrganization] = useState({
        user_id: user.user_id,
        title: "",
        code: "",
        notice: "",
        maxTeam: 100,
        maxMember: 10,
    })

    const handleOrganization = (state) => {
        console.log(organization)
        setOrganization({
            ...organization,
            [state.target.id]: state.target.value
        })
    }

    const createNewOrganization = async () => {
        const response = await API.createOrganization(organization);
        console.log(response)
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
                            조직 만들기
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
                    <Stack spacing={1}>
                        <TextField
                            id="title"
                            label="조직명"
                            value={organization.title}
                            onChange={handleOrganization}
                            fullWidth
                        />
                        <TextField
                            id="notice"
                            label="공지사항"
                            value={organization.notice}
                            onChange={handleOrganization}
                            fullWidth
                        />
                        <TextField
                            id="maxTeam"
                            label="최대 그룹 수"
                            value={organization.maxTeam}
                            onChange={handleOrganization}
                            fullWidth
                        />
                        <TextField
                            id="maxMember"
                            label="그룹 최대 인원"
                            value={organization.maxMember}
                            onChange={handleOrganization}
                            fullWidth
                        />
                    </Stack>
                </DialogContent>
                {/* <DialogActions> */}
                <MKButton
                    color="success"
                    onClick={() => createNewOrganization()}
                    fullWidth
                >
                    생성하기
                </MKButton>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}

export default OrganizationCreateModal;