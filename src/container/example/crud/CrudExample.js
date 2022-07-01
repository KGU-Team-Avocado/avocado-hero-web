import Create from "./create/Create"
import Delete from "./delete/Delete"
import Read from "./read/Read"
import Update from "./update/Update"

export default () => {
    return (
        <div className="my-2">
            <h1 className='mb-5'>Node.js + Express.js + Mongoose + MongoDB 예제</h1>
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