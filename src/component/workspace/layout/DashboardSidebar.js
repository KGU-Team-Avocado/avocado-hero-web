import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Menu as MenuIcon } from '../icons/menu';
import { Bell as BellIcon } from '../icons/bell';
import { Link, useParams } from 'react-router-dom';
import { NavItem } from './NavItem';



export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = null;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });
  const params = useParams();
  const project_id = params.id;

  const items = [
    {
      href: '',
      icon: (<MenuIcon fontSize="small" />),
      title: 'Main',
      onlyForMgr: false,
      showAfterEnd: true
    },
    {
      href: `/workspace/${project_id}`,
      icon: (<BellIcon fontSize="small" />),
      title: '공지사항',
      onlyForMgr: false,
      showAfterEnd: true
    },
    {
      href: `/workspace/${project_id}/calendar`,
      icon: (<SelectorIcon fontSize="small" />),
      title: '일정(아이콘 미정)',
      onlyForMgr: false,
      showAfterEnd: true
    },
    {
      href: `/workspace/${project_id}/todo`,
      icon: (<SelectorIcon fontSize="small" />),
      title: 'Todo(아이콘 미정)',
      onlyForMgr: false,
      showAfterEnd: true
    },
    {
      href: `/workspace/${project_id}/role`,
      icon: (<UserIcon fontSize="small" />),
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
  ];

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
            <Link
              to="/"
            >
              <div>메인으로 돌아가기</div>
            </Link>
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
                  Material UI
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  테스트
                  {' '}
                  화면입니다
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              />
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
              onlyForMgr={item.onlyForMgr}
              showAfterEnd={item.showAfterEnd}
            />
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
            Need more featrues?
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
            Check out our Pro solution template.
          </Typography>
          <Box
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
          </Box>

          <Button
            color="secondary"
            component="a"
            endIcon={(<OpenInNewIcon />)}
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
          >
            {/* <Link
            to="https://material-kit-pro-react.devias.io/"
          >
              Pro Live Preview</Link> */}
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
