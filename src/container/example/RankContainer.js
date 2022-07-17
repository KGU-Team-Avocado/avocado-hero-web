import axios from "axios";
import { useEffect, useState } from "react"

export default () => {

    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('/testsRouter/findLogs')
            .then((response) => {
                let temp = [];
                if (response.data != null) {
                    temp = response.data;
                    temp.map((log) => { log['time'] = koreanTime(log.time) }) //서버쪽에서 실수로 영국시간 받고 있었어서 부득이하게 이렇게 조치함
                }
                setData(temp);
                setUser([]);
            }).catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        let temp = []
        let user_set = new Set();
        data.map((log) => {
            // console.log(temp)
            user_set.add(log.user_id);
        })
        user_set.forEach((id) => {
            temp.push({
                user_id: id,
                visited_date: new Set()
            })
        })
        data.map((log) => {
            const index = temp.findIndex((item) => item.user_id == log.user_id)
            temp[index].visited_date = temp[index].visited_date.add(yymmdd(log.time))
        })
        setUser(temp)
    }, [data])

    const yymmdd = (t) => {
        const date = t.split('. ')
        return date[0] + '-' + date[1] + '-' + date[2]
    }

    const koreanTime = (t) => {
        const dateNum = Date.parse(t);
        const date = new Date(dateNum).toLocaleString()
        return date;
    }

    return (
        <>
            <div>
                <h1>포인트 계산기</h1>
                <div className="my-3">
                    <h3>유저별 포인트</h3>
                    <div>
                        {user.length > 0
                            ?
                            user.map((user) => (
                                <div key={user.user_id} className=' my-2'>
                                    <div className='d-flex justify-content-between'>
                                        <div>[{user.user_id}]</div>
                                        <div>총 {user.visited_date.size}점</div>
                                    </div>
                                    <div>접속일자</div>
                                    <div>{Array.from(user.visited_date).map((d)=><div>{d}</div>)}</div>
                                </div>
                            ))
                            :
                            <div>데이터가 없습니다.</div>
                        }
                    </div>

                </div>
                <h3>전체 로그</h3>
                <div>
                    {
                        data.length > 0
                            ?
                            data.map((log) => (
                                <div key={log.secure_num}>{log.secure_num} {log.time} {log.user_id} </div>
                            ))
                            :
                            <div>데이터가 없습니다.</div>
                    }
                </div>
            </div>
        </>
    )
}