import { useEffect, useState } from "react"

import * as API from "../../api/API"
import Table from "../../component/common/Table";

export default () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = async () => {
        //현재 유저 스키마가 일정하지 않아서 생기는 오류가 있음... 수정 예정
        setUsers(await API.findUsers());
    }

    return (
        <>
            <div>
                <h1>Users</h1>
                {JSON.stringify(users)}
                {/* <Table data={users} rowsPerPage={10} /> */}
            </div>
        </>
    )
}