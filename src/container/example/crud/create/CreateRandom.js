import axios from 'axios';
import { useState } from 'react';

export default () => {
    const [data, setData] = useState([]);

    const saveRandomData = () => {
        axios.get('/testsRouter/save').then((response) => {
            console.log(JSON.stringify(response.data))
            setData(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <button className='btn btn-outline-success' onClick={() => saveRandomData()}>랜덤 데이터 생성하기</button>
            <div>{JSON.stringify(data)}</div>
        </>
    )
}