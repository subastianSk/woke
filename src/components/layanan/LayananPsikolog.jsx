import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

function Lypsikolog() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://teslah-final.herokuapp.com/psikolog/getAllPsikolog",{
            params: {
              _limit: 2
        }})
            .then((response) => {
                console.log('ini dari useeffect array',response.data.result)
                console.log('ini dari useeffect obj',response.data)
                setAPIData(response.data.result);
            })
    },[])
    console.log(APIData)

    return (
        <div>
            <div className="listpaket">
                <h2>Profil Psikolog</h2>
            </div>
            <div className="a-container">
            {
            !APIData ? null
            :
            APIData.map((post) =>
            {
                return(
                    <div>
                    <div>
                   
                            <div className = "a-boxp">
                                <div className='poto'>
                            <img src={post.image}/>
                            </div>
                            <div className='center'>
                                <h6><b>Nama </b>       : {post.nama}</h6>
                                <h6><b>Pendidikan </b> : {post.pendidikan}</h6>
                                <h6><b>Universitas</b> : {post.universitas}</h6>
                                <h6><b>Pengalaman </b> : {post.pengalaman} Tahun</h6>
                                <h6><b>Kota </b>       : {post.kota}</h6>
                                <h6><b>Informasi </b>  : {post.informasi}</h6>
                                <br/>
                            </div>
                            
                            
                            </div>
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


export default Lypsikolog;