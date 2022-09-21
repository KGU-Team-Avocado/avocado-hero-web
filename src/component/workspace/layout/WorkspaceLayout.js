import { useState } from 'react';
import { Outlet } from "react-router-dom"
import { Box, Container, Grid, styled } from "@mui/material";
import DashboardNavbar from './DashboardNavbar';
import { DashboardSidebar } from './DashboardSidebar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme as workspaceTheme } from "component/workspace/theme";

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