import { Grid, Stack } from "@mui/material";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import MKButton from "component/common/mui-components/MKButton";
import ProfileViewModal from "component/jobFinder/modal/ProfileViewModal";
import { useEffect, useState } from "react";
import * as API from "../../api/API"
import UserProfileCard from "../../component/jobFinder/UserProfileCard";
import SearchIcon from '@mui/icons-material/Search';

const HumanResources = () => {

  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState(null);
  const [profileCardModalOpen, setProfileCardModalOpen] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    //현재 유저 스키마가 일정하지 않아서 생기는 오류가 있음... 수정 예정
    const temp = await API.findUsers()
    setUsers(temp.user);
  }


  const handleUserProfileCard = async (user_id) => {
    setProfileCardModalOpen(true);
    setProfile(await API.findOneUserByUserId(user_id));
  }

  //인재찾기 페이지
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <MKButton
          color="success"
          variant="contained"
        // onClick={() => setGroupFilterModalOpen(true)}
        >
          <SearchIcon />
        </MKButton>
      </Stack>
      <Grid container spacing={2}>
        {users.length > 0
          ?
          users.map((user) =>
            <Grid item xs={12} md={6} xl={4}>
              <UserProfileCard
                key={user}
                user={user}
                handleUserProfileCard={handleUserProfileCard}
              />
            </Grid>
          )
          :
          <div>회원이 없습니다.</div>
        }
      </Grid>
      <ModalStaticBackdrop
        keepMounted
        width="xl"
        open={profileCardModalOpen}
        component={
          <ProfileViewModal setOpen={setProfileCardModalOpen} profile={profile} />
        }
      />
    </>
  );
};

export default HumanResources;
