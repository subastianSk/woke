import React from 'react';

function Productbox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt=''/>
            </div>

            <div className='a-b-text'>
            <h2> {props.title} </h2>
                <ul >
                <br/>
                    <li type="square">1x sesi mentoring online</li>
                    <li type="square">Lembar Kerja (Worksheet)</li>
                    <li type="square">Pendampingan (Group)</li>
                <br/>
                </ul>
                <button className='productbox-button'>Daftar</button>
            </div>
        </div>
    )
}

export default Productbox;
