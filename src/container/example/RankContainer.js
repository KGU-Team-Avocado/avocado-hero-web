import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"
import LodingSpinner from "../../component/common/LodingSpinner";

export default () => {

    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [attendances,  setAttendances] = useState([]);
    const [isListOpen, setListOpen] = useState(true);

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
                    <div className='d-flex justify-content-between'>
                        <h3>유저별 포인트</h3>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => setListOpen(!isListOpen)}>
                                {isListOpen ? "닫기▵" : "펼치기▿"}
                            </button>
                        </h2>
                    </div>
                    <div>
                        {user.length > 0
                            ?
                            user.map((user) => (
                                <div key={user.user_id} className=' my-2'>
                                    <div className='d-flex justify-content-between'>
                                        <h4>[<Link className="" to={'/user/' + user.user_id}>{user.user_id}</Link>]</h4>
                                        <h4>총 {user.visited_date.size * 2}점</h4>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-item">
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <div>{Array.from(user.visited_date).map((d) => <div>{d} (+2점)</div>)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))
                            :
                            <LodingSpinner/>
                        }
                    </div>

                </div>
                <h3>출석부</h3>
                <div>
                    ㅇㅇ
                </div>
                <h3>전체 로그</h3>
                <div>
                    {
                        data.length > 0
                            ?
                            data.map((log) => (
                                <div key={log.secure_num}>{log.secure_num} {log.time} <Link to={'/user/' + log.user_id}>{log.user_id}</Link> </div>
                            ))
                            :
                            <LodingSpinner/>
                    }
                </div>
            </div>
        </>
    )
}