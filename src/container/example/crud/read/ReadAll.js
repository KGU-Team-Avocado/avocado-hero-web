import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        findAll();
    }, []);

    const findAll = () => {
        // 데이터 받아오는 작업 시작
        axios.get('/testsRouter/find')
            .then((response) => {
                console.log(JSON.stringify(response.data))
                setData(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        // 데이터 받아오는 작업 끝
    }

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h4>전체 데이터 가져오기</h4>
                <button className='btn btn-outline-success' onClick={() => findAll()}>새로고침</button>

            </div>
            <div>
                {
                    data.length == 0
                        ?
                        <div>데이터가 없습니다.</div>
                        :
                        data.map((item) => (
                            <div key={item._id}>test_id: {item.test_id} | test_num : {item.test_num}</div>
                        ))
                }
            </div>
        </>
    )
}