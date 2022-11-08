import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Grid, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate, useParams } from 'react-router-dom';
import { NavItem } from './NavItem';
import { useSelector } from 'react-redux';
import { selectUser } from 'api/redux/user/userSlice';
import { selectGroup } from 'api/redux/group/groupSlice';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import defaultImage from '../../../assets/img/logo512.png';
import * as API from "../../../api/API"
import ModalStaticBackdrop from 'component/common/modal/ModalStaticBackdrop';
import WorkspaceListModal from 'container/group/workspace/WorkspaceListModal';

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });
  const params = useParams();
  const project_id = params.id;
  const group = useSelector(selectGroup);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const [workspaceListModalOpen, setWorkspaceListModalOpen] = useState(false);

  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    setGruopImage();
  }, [group?.imageURL]);

  const setGruopImage = async () => {
    const image = await API.fetchGroupImage(group?.imageURL); //프로필 이미지 불러오는 코드
    setUploadedImage(image);
  }

  const handleImgError = (e) => {
    e.target.src = defaultImage;
  }

  const items = [
    {
      href: `/workspace/${project_id}`,
      icon: (<HomeIcon fontSize="small" />),
      title: 'README',
      onlyForMgr: false,
      showAfterEnd: true
    },
    {
      href: `/workspace/${project_id}/calendar`,
      icon: (<EventNoteIcon fontSize="small" />),
      title: '일정',
      onlyForMgr: false,
      showAfterEnd: true
    },
    {
      href: `/workspace/${project_id}/notice_todo`,
      icon: (<FormatListBulletedIcon fontSize="small" />),
      title: '게시판',
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
      href: `/workspace/${project_id}/settings`,
      icon: (<SettingsIcon fontSize="small" />),
      title: '설정',
      onlyForMgr: false, //점검 필요
      showAfterEnd: false //점검 필요
    },
  ]

  useEffect(() => {
    if (open) {
      onClose?.();
    }
  }, []);

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
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  onClick={() => navigate('/')}
                  variant="contained"
                  fullWidth
                  endIcon={(<HomeIcon />)}
                >
                  메인
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => setWorkspaceListModalOpen(true)}
                  variant="contained"
                  color="info"
                  fullWidth
                  endIcon={(<OpenInNewIcon />)}
                >
                  목록
                </Button>
              </Grid>
            </Grid>
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
              <Box>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  {group?.project_name}
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  {group?.group_name}
                </Typography>
              </Box>
              <Box>
                <img
                  className="border rounded"
                  width="50"
                  height="50"
                  alt=""
                  src={uploadedImage}
                  onError={handleImgError}
                />
              </Box>
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
            (!item.onlyForMgr || (user?.user_id === group?.manager)) && item.showAfterEnd === group?.end_project ?
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
            {group?.members.length}명
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
            {new Date(group?.start_date).toLocaleDateString()} ~ {group?.end_project === true && new Date(group?.end_date).toLocaleDateString()}
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
            color={group?.end_project === true ? 'error' : 'secondary'}
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
          >
            {group?.end_project === true ? '종료된 프로젝트' : '프로젝트 진행중'}
          </Button>
        </Box>
      </Box>
      <ModalStaticBackdrop
        keepMounted
        width="md"
        open={workspaceListModalOpen}
        component={
          <WorkspaceListModal user_id={user.user_id} setOpen={setWorkspaceListModalOpen}/>
        }
      />
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
