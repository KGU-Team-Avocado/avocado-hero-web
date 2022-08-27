import { useEffect, useState } from "react";
import * as API from "../../api/API"
import UserProfileCard from "../../component/jobFinder/UserProfileCard";

const HumanResources = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    //현재 유저 스키마가 일정하지 않아서 생기는 오류가 있음... 수정 예정
    const temp = await API.findUsers()
    setUsers(temp.user);
  }

  //인재찾기 페이지
  return (
    <>
      <h2>인재 찾기</h2>
      <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
        {users.length > 0
          ?
          users.map((user) => 
            <UserProfileCard key={user} user={user} />
          )
          :
          <div>회원이 없습니다.</div>
        }
      </div>
    </>
  );
};

export default HumanResources;
