import React from 'react';
import R5 from '../images/r5.png';

function Reason() {
    return (
        <div id='main'>
            <h1>TESLAH Selalu Berusaha </h1>
            <div className='header-reason'>
            <ul className='jarak'>
            <li type="circle"><p className='reason'>Mengerti kondisi kamu saat ini</p></li>
            <li type="circle"><p className='reason'>Menyelesaikan masalahmu </p></li>
            <li type="circle"><p className='reason'>Menjaga privasimu </p></li>
            <li type="circle"><p className='reason'>Memberikan semangat untukmu </p></li>
    </ul>  
            </div>
            <div className='imgr'>
            <img src={R5}  alt=''/>
            </div>
        </div>
    )
}

export default Reason;
