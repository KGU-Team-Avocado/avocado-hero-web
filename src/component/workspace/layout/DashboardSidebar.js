import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Selector as SelectorIcon } from '../icons/selector';
import { User as UserIcon } from '../icons/user';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Bell as BellIcon } from '../icons/bell';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { NavItem } from './NavItem';
import { useSelector } from 'react-redux';
import { selectUser } from 'api/redux/user/userSlice';
import { selectGroup } from 'api/redux/group/groupSlice';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import HomeIcon from '@mui/icons-material/Home';

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = null;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });
  const params = useParams();
  const project_id = params.id;
  const group = useSelector(selectGroup);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const items = [
    {
      href: `/workspace/${project_id}`,
      icon: (<HomeIcon fontSize="small" />),
      title: 'README',
      onlyForMgr: false,
      showAfterEnd: true
    },
    {
      href: `/workspace/${project_id}/notice`,
      icon: (<BellIcon fontSize="small" />),
      title: '공지사항',
      onlyForMgr: false,
      showAfterEnd: true
    },
    {
      href: `/workspace/${project_id}/calendar`,
      icon: (<EventNoteIcon fontSize="small" />),
      title: '일정(아이콘 미정)',
      onlyForMgr: false,
      showAfterEnd: true
    },
    {
      href: `/workspace/${project_id}/todo`,
      icon: (<FormatListBulletedIcon fontSize="small" />),
      title: 'Todo(아이콘 미정)',
      onlyForMgr: false,
      showAfterEnd: true
    },
  ];

  const extraItems = [
    {
      href: `/workspace/${project_id}/role`,
      icon: (<FactCheckOutlinedIcon fontSize="small" />),
      title: '상호평가',
      onlyForMgr: false,
      showAfterEnd: true
    },
    {
      href: `/workspace/${project_id}/role`,
      icon: (<UserIcon fontSize="small" />),
      title: '역할',
      onlyForMgr: false,
      showAfterEnd: false
    },
    {
      href: `/workspace/${project_id}/members`,
      icon: (<UsersIcon fontSize="small" />),
      title: '멤버관리',
      onlyForMgr: true,
      showAfterEnd: false
    },
    {
      href: `/workspace/${project_id}/end`,
      icon: (<XCircleIcon fontSize="small" />),
      title: '프로젝트 종료',
      onlyForMgr: true,
      showAfterEnd: false
    }
  ]

  useEffect(
    () => {
      // if (!router.isReady) {
      //   return;
      // }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // [router.asPath]
    []
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <Button
              onClick={() => navigate('/')}
              variant="contained"
              fullWidth
              endIcon={(<HomeIcon />)}
            >
              메인으로 돌아가기
            </Button>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  {group.project_name}
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  {group.group_name}
                </Typography>
              </div>
              {/* <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              /> */}
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
          {extraItems.map((item) => (
            (!item.onlyForMgr || (user.user_id === group.manager)) && item.showAfterEnd === group.end_project ?
              <NavItem
                key={item.title}
                icon={item.icon}
                href={item.href}
                title={item.title}
              /> : null
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
          <Typography
            color="neutral.100"
            variant="subtitle2"
          >
            참여 인원
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
            0명
          </Typography>
          <Typography
            color="neutral.100"
            variant="subtitle2"
          >
            프로젝트 기간
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
            {new Date(group.start_date).toLocaleDateString()} ~ ??
          </Typography>
          {/* <Box
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              width: '160px',
              '& img': {
                width: '100%'
              }
            }}
          >
            <img
              alt="Go to pro"
              src="/static/images/sidebar_pro.png"
            />
          </Box> */}

          <Button
            color="secondary"
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
          >
            프로젝트 진행중
          </Button>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
