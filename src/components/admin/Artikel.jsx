import { Form, Input, Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { post_artikel } from "../../redux/action";
import '../../style/Artikel.css';
const { TextArea } = Input;

function Artikel () {
    const dispatch = useDispatch()

    const history = useHistory()
    const artikel = (values) => {
        dispatch(post_artikel (values,history))
    }
    return (
        <div className="container">
                <Form 
                    name="normal_artikel"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={artikel}
                >
                <div class="wrapper">
                    <div class="title">
                        Form Tambah Artikel
                    </div>
                    <div class="form">
                        
                        <h6 htmlFor="">Judul</h6>
                            <Form.Item 
                                name="Judul" 
                                className="inputfield"
                            >
                                <input type="text" placeholder="Masukkan Judul Artikel" className="inputfield" />
                            </Form.Item>
                        <h6 htmlFor="">Author</h6>
                        <Form.Item 
                            name="Author" 
                            className="inputfield"
                        >
                            <input type="text" placeholder="Masukkan Author Artikel" className="inputfield" />
                        </Form.Item>  
                         
                        <h6 htmlFor="">Tanggal Penerbitan</h6>
                        <Form.Item 
                            name="Tanggal" 
                            className="inputfield"
                        >
                            <input type="date" placeholder="Masukkan Tanggal Penerbitan Artikel" className="inputfield" />
                        </Form.Item> 
                        
                        <h6 htmlFor="">Tag</h6>
                        <Form.Item 
                            name="Tag" 
                            className="inputfield"
                        >
                            <input type="text" placeholder="Masukkan Tag Artikel" className="inputfield" />
                        </Form.Item> 

                        <h6 htmlFor="">Penerbit</h6>
                        <Form.Item 
                            name="Penerbit" 
                            className="inputfield"
                        >
                            <input type="text" placeholder="Masukkan Penerbit Artikel" className="inputfield" />
                        </Form.Item>
                        
                        <div class="inputfield">
                            <input type="submit" value="Tambah Artikel" class="btn"></input>
                        </div>
                        </div>
                        </div>	
                </Form>
        </div>
    )
}

export default Artikel;
// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios';


// function Artikel() {
//     const [APIData, setAPIData] = useState([]);
//     useEffect(() => {
//         axios.get("https://teslah-final.herokuapp.com/layanan/getAllLayanan")
//             .then((response) => {
//                 console.log('ini dari useeffect array',response.data.result)
//                 console.log('ini dari useeffect obj',response.data)
//                 setAPIData(response.data.result);
//             })
//     },[])
//     console.log(APIData)

//     return (
//         <div>
//             <div className="judul-list-ikan">
//                 <h2>Testimoni</h2>
//             </div>
//             <div className="item">
//             {
//             !APIData ? null
//             :
//             APIData.map((post) =>
//             {
//                 return(
//                     <div className="item-con">
//                     <div className="item-container">
//                             <div className = "nama-ikan">
//                                 <h4>{post.namaPaket}</h4>
//                                 <h4>{post.kuotaLayanan}</h4>
//                                 <h5>{post.hargaLayanan}</h5>
//                             </div>
//                         </div>
//                     </div>
//                    ) 
//             }   
           
//             )
//         }
//         </div>
//     </div>
//     )
// }

// export default Artikel;