import axios from "axios";
import { useState } from "react";

export default () => {

    const [key, setKey] = useState('');
    const [deletedValue, setDeletedValue] = useState('null');

    const handleData = (state) => {
        setKey(state.target.value);
    };
    const handleButton = () => {
        if (key != '') {
            // 데이터 받아오는 작업 시작
            axios.get('/testsRouter/delete/' + key)
                .then((response) => {
                    console.log(JSON.stringify(response.data))
                    setDeletedValue(JSON.stringify(response.data));
                }).catch(function (error) {
                    console.log(error);
                });
            // 데이터 받아오는 작업 끝
            setKey('');
        }
    }
    return (
        <>
            <h4>특정 아이디 삭제하기 (위의 전체 데이터에서 test_id를 기반으로 검색해보세요)</h4>
            <div className="input-group mb-3">
                <input className="form-control" onChange={handleData} value={key} />
                <button className="btn btn-outline-success" onClick={() => handleButton()}>검색하기</button>
            </div>
            <div>검색 결과 : {deletedValue == 'null' ? '검색된 데이터가 없습니다.' : deletedValue}</div>
        </>
    )
}