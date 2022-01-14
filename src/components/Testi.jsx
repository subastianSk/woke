import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
function Testi() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://teslah-final.herokuapp.com/feedback/getFeedback")
            .then((response) => {
                // console.log('ini dari useeffect array',response.data.result)
                // console.log('ini dari useeffect obj',response.data)
                setAPIData(response.data.result);
            })
    },[])
    console.log(APIData)

    return (
        <div>
            <div className="titlelayanan">
                <h2>Testimoni</h2>
            </div>
            <div className='a-container'>
            {
            !APIData ? null
            :
            APIData.map((post) =>
            {
                return(
                    <div>
                    <div className='a-box'>
                        <h3>{post.namaUser}</h3> 
                        <p>--------------------------------</p>
                        <p>{post.komentar}</p> 
                     </div>
                     </div>
                   ) 
            }            
            )
        }
        </div>
    </div>
    )
}

export default Testi;

