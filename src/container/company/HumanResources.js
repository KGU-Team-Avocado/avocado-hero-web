import { useEffect, useState } from "react";
import * as API from "../../api/API"
import UserProfileCard from "../../component/jobFinder/UserProfileCard";
import ProfileCard from "../sign/profile/ProfileCard";

const HumanResources = () => {

  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    //현재 유저 스키마가 일정하지 않아서 생기는 오류가 있음... 수정 예정
    const temp = await API.findUsers()
    setUsers(temp.user);
  }

  const convertProfile = (user) => {
    setProfile({
      user_id: user.user_id,
      name: user.user_name,
      nickname: user.user_nickname,
      email: user.user_email,
      phoneNum: user.user_phoneNum,
      belong: user.user_belong,
      field: user.user_field,
      link: user.user_link,
      keyword: user.user_keyword,
      personal: user.user_personal,
      intro: user.user_intro,
    })
  }

  //인재찾기 페이지
  return (
    <>
      <h2>인재 찾기</h2>
      <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
        {users.length > 0
          ?
          users.map((user) =>
            <UserProfileCard key={user} user={user} convertProfile={convertProfile} />
          )
          :
          <div>회원이 없습니다.</div>
        }
      </div>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="profile_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-body p-5  w-100">
              <div className="modal-header">
                <h2 className="fw-bold mb-0">프로필 보기</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="d-grid my-5 list-unstyled">
                {
                  profile &&
                  <ProfileCard
                    profile={profile}
                  />
                }
              </div>
              <button type="button" className="btn btn-lg btn-success mt-5 w-100" onClick={() => console.log('제안하기')}>제안하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HumanResources;
