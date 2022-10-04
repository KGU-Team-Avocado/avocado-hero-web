import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import ProfileViewModal from "component/jobFinder/modal/ProfileViewModal";
import { useEffect, useState } from "react";
import * as API from "../../api/API"
import UserProfileCard from "../../component/jobFinder/UserProfileCard";
import ProfileCard from "../sign/profile/ProfileCard";

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
      <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
        {users.length > 0
          ?
          users.map((user) =>
            <UserProfileCard
              key={user}
              user={user}
              handleUserProfileCard={handleUserProfileCard}
            />
          )
          :
          <div>회원이 없습니다.</div>
        }
      </div>
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
