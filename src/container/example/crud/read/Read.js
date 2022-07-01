import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReadAll from './ReadAll';

export default () => {
    return (
        <>
            <h2>
                Read
            </h2>
            <div className='mb-3'>
                <ReadAll/>
            </div>
            <h4>특정 아이디값 가져오기</h4>
            <div>
                
            </div>
        </>
    )
}