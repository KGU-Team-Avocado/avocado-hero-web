import { useEffect, useState } from "react";
import * as API from "../../api/API"

const HumanResources = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
      getUsers();
  },[]);

  const getUsers = async () => {
      //현재 유저 스키마가 일정하지 않아서 생기는 오류가 있음... 수정 예정
      setUsers(await API.findUsers());
  }



  //인재찾기 페이지
  return (
    <>
      <h2>인재 찾기</h2>
      {JSON.stringify(users)}

    </>
  );
};

export default HumanResources;
