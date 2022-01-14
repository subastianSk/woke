import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from '../Navbar'
import Logo1 from '../../images/logo1.png';
import Lypsikolog from './LayananPsikolog';
import {Link} from 'react-router-dom'
function Layanan() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://teslah-final.herokuapp.com/layanan/getAllLayanan")
            .then((response) => {
                console.log('ini dari useeffect array',response.data.result)
                console.log('ini dari useeffect obj',response.data)
                setAPIData(response.data.result);
            })
    },[])
    console.log(APIData)

    return (
        <div>
          <Navbar/>
          <br/>
          <br/>
          <br/>
          <br/>
            <div className="List-Paket">
                <h2>Paket Layanan</h2>
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
                            <div className = "a-boxly">
                            <img src={Logo1} alt=''className='tutu'/>
                                <h1>{post.namaPaket}</h1>
                                <p>--------------------------------</p>
                                <h6>{post.sesiIndividual} Sesi individual Online meeting</h6>
                                <br/>
                                <h6>{post.konsultasi} Konsultasi via chat WA</h6>
                                <br/>
                                <br/>
                                <h3>Rp.{post.hargaLayanan}</h3>
                                <br/>
                                <br/>
                               
                   
                    <Link to='/layananA'>
                                <button className='btn-konten'>
                        Daftar Paket
                    </button>
                    </Link>
                            </div>
                        </div>
                    </div>
                   ) 
            }   
           
            )
        }
        </div>
         <Lypsikolog/> 
    </div>
    )
}


export default Layanan;