import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReadAll from './ReadAll';
import ReadOne from './ReadOne';

export default () => {
    return (
        <>
            <h2>
                Read
            </h2>
            <div className='my-2'>
                <ReadAll/>
            </div>
            <div className='my-2'>
                <ReadOne/>
            </div>
        </>
    )
}