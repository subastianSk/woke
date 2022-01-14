

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Navbar from '../Navbar';
import "../../style/konten.css"
import { Link } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';


const { Meta } = Card;

function Konten() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://teslah-final.herokuapp.com/artikel/getArtikel")
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
            <div className="jud-ar">
                <h2>Artikel</h2>
            </div>
            <div className="a-container">
            {
            !APIData ? null
            :
            APIData.map((post) =>
            {
                return (
    //                 <Col className="gutter-row" span={6}>
    //     <div style={style}>col-6</div>
    //   </Col>

                    
                    <div className="container">
                        
                        <div className="pembungkus-kartu">
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col className="gutter-row" span={6}>
                                    <Card
                                        style={{ width: 300, border: "3px solid grey", height: 350}}

                                        >
                                        <Meta
                                            // {...post.Judul}
                                            // {post.Author}
                                        />
                                            <h4>{post.Penerbit}</h4>
                                            <p>-------------------</p>
                                            <h5>{post.Judul}</h5>
                                            <p>{post.Author}</p>
                                            {post.Tag}
                                            
                                            <Link to='/deskkonten'>
                                            <div className='but-sel'>
                                                <button className='but-sel-1'>Selengkapnya</button>
                                            </div>
                                            </Link>
                                    </Card>
                                </Col>
                            </Row>
                                
                    
            
        </div>
        </div>
            )
            }
            )}
            </div>
    </div>
    )
}


export default Konten;