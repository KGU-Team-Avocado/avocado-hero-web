import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CrudExample from './crud/CrudExample';

const ExampleContainer = () => {

    return (
        <div>
            <div>
                <Link to='zz'>존재하지 않는 페이지</Link>
            </div>
            <div>
                <Link to='bestworker'>포인트 계산기</Link>
            </div>
            <div className="bg-green-dark">ㅇㅇ</div>
            <div className="bg-green">ㅇㅇ</div>
            <div className="bg-green-light">ㅇㅇ</div>
            <div className="bg-yellow">ㅇㅇ</div>
            <div className="bg-yellow-light">ㅇㅇ</div>
            <div className="bg-orange-dark">ㅇㅇ</div>
            <div className="bg-orange">ㅇㅇ</div>
            <CrudExample />
        </div>
    )
}

export default ExampleContainer;