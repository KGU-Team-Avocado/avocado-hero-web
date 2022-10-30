import { useEffect, useState } from 'react';
import { Outlet, useParams } from "react-router-dom"
import { Box, Container, Grid, styled } from "@mui/material";
import DashboardNavbar from './DashboardNavbar';
import { DashboardSidebar } from './DashboardSidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme as workspaceTheme } from "component/workspace/theme";
import { useDispatch, useSelector } from 'react-redux';
import { selectGroup } from 'api/redux/group/groupSlice';
import { getGroupAsync } from 'api/redux/group/groupSlice';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

export default () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const group = useSelector(selectGroup);
    const dispatch = useDispatch();

    const params = useParams();
    const project_id = params.id;
    
    useEffect(() => {
        if(group._id !== project_id){
            dispatch(getGroupAsync(project_id));
        }
    }, [])

    return (
        <>
            <ThemeProvider theme={workspaceTheme}>
                <CssBaseline />
                <DashboardLayoutRoot>
                    <Box
                        sx={{
                            display: 'flex',
                            flex: '1 1 auto',
                            flexDirection: 'column',
                            width: '100%',
                            mx: 2
                        }}
                    >
                        <Outlet />
                    </Box>
                </DashboardLayoutRoot>
                <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
                <DashboardSidebar
                    onClose={() => setSidebarOpen(false)}
                    open={isSidebarOpen}
                />
            </ThemeProvider>
        </>
    )
}