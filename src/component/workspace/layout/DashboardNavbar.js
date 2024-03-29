import PropTypes from 'prop-types';
import { AppBar, Avatar, Badge, Box, IconButton, styled, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import { useState } from 'react';
import ProfileButton from 'component/common/ProfileButton';


const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
}));

export default (props) => {
    const { onSidebarOpen, ...other } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <>
            <DashboardNavbarRoot
                sx={{
                    left: {
                        lg: 280
                    },
                    width: {
                        lg: 'calc(100% - 280px)'
                    }
                }}
                {...other}>
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2
                    }}
                >
                    <IconButton
                        onClick={onSidebarOpen}
                        sx={{
                            display: {
                                xs: 'inline-flex',
                                lg: 'none'
                            }
                        }}
                    >
                        <MenuIcon fontSize="small" />
                    </IconButton>
                    <Tooltip title="Search">
                        <IconButton sx={{ ml: 1 }}>
                            <SearchIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Contacts">
                        <IconButton sx={{ ml: 1 }}>
                            <UsersIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Notifications">
                        <IconButton sx={{ ml: 1 }}>
                            <Badge
                                badgeContent={4}
                                color="primary"
                                variant="dot"
                            >
                                <BellIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Box sx={{ ml: 1 }}>
                        <ProfileButton
                            open={open}
                            anchorEl={anchorEl}
                            setAnchorEl={setAnchorEl}
                            workspace={true}
                        />
                    </Box>
                </Toolbar>
            </DashboardNavbarRoot>
        </>
    )
}