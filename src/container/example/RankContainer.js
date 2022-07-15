import axios from "axios";
import { useEffect, useState } from "react"

export default () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/testsRouter/findLogs')
            .then((response) => {
                console.log(JSON.stringify(response.data))
                setData(response.data);
            }).catch(function (error) {
                console.log(error);
            });
    }, []);

    const koreanTime = (t) => {
        const dateNum = Date.parse(t);
        const date = new Date(dateNum).toLocaleString()
        console.log(date);
        return date;
    }

    return (
        <>
            <div>
                <h1>포인트 계산기</h1>
                <h3>전체 로그</h3>
                <div>
                    {
                        data.length > 0
                            ?
                            data.map((log) => (
                                <div>{koreanTime(log.time)} {log.user_id} </div>
                            ))
                            :
                            <div>데이터가 없습니다.</div>
                    }
                </div>
            </div>
        </>
    )
}