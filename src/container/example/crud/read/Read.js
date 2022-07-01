import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReadAll from './ReadAll';
import ReadOne from './ReadOne';
import FancyAlert from '../../../../component/example/FancyAlert';

export default () => {
    return (
        <>
            <h2>
                Read
            </h2>
            <FancyAlert
                color='warning'
                title='데이터를 읽을 때...'
                description='데이터의 흐름을 자세하게 살펴보세요. React의 생명주기에 대한 이해가 있으면 좋을 것 같아요'
                footer='useEffect Hook 사용법을 먼저 검색하고 오세요'
            />
            <div className='my-2'>
                <ReadAll/>
            </div>
            <div className='my-2'>
                <ReadOne/>
            </div>
        </>
    )
}