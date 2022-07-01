import axios from 'axios';
import { useEffect } from 'react';
import Create from './crud/Create';
import Delete from './crud/Delete';
import Read from './crud/Read';
import Update from './crud/Update';

const ExampleContainer = () => {

    return(
        <div>
            <h1>Node.js + Express.js + Mongoose + MongoDB 예제</h1>
            <Create/>
            <Read/>
            <Update/>
            <Delete/>
        </div>
    )
}

export default ExampleContainer;