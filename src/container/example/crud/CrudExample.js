import FancyAlert from "../../../component/example/FancyAlert"
import Create from "./create/Create"
import Delete from "./delete/Delete"
import Read from "./read/Read"
import Update from "./update/Update"

export default () => {
    return (
        <div className="my-2">
            <h1 className='mb-5'>Node.js + Express.js + Mongoose + MongoDB 예제</h1>
            <FancyAlert
                color='success'
                title='MERN 스택에 오신 것을 환영합니다!'
                description='React에서 가장 많이 사용되는 조합인 MERN(MongoDB, Express, React, Node.js)에 대한 예제입니다.'
                footer='서버가 켜져있는지 반드시 확인하세요'
            />
            <Create />
            <hr />
            <Read />
            <hr />
            <Update />
            <hr />
            <Delete />
            <hr />
        </div>
    )
}