import { Table, Tag, Space, Button } from "antd";
import { useEffect, useState } from "react";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import '../../style/admin.css'
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
    const [APIData, setAPIData] = useState();
    useEffect(() => {
        axios.get("https://teslah-final.herokuapp.com/artikel/getArtikel")
            .then((response) => {
                setDataSource(response.data.result);
                setAPIData(response.data.result);
            })
    },[])
    console.log('ini dari data', APIData)
    
    const [dataSource, setDataSource]=  useState();

    const columns = [
        {
            title:"Judul",
            dataIndex:"Judul",
            key:"Judul"
        },
        {
            title:"Author",
            dataIndex:"Author",
            key:"Author"
        },
        {
            title:"Tanggal",
            dataIndex:"Tanggal",
            key:"Tanggal"
        },
        {
            title:"Tag",
            dataIndex:"Tag",
            key:"Tag"
        },
        {
            title:"Penerbit",
            dataIndex:"Penerbit",
            key:"Penerbit"
        },
    ];
    
    return (
            <div className="container">
                <header className="admin-header">
                    <Link to='/artikel'>
                    <Button type="primary" style={{marginTop: 50}}>Tambah Artikel</Button>
                    </Link>
                    <Table className="admin-table"
                    columns={columns}
                    dataSource={APIData}
                    style={{marginTop: 50, textAlign: "center"}}
                    size="large"
                    >

                    </Table>
                </header>
                {
                    // !APIData ? null
                    // :
                    // APIData.map((post) => {
                    //     return (
                    //        <div>
                    //             <p>{post.Judul}</p>
                    //             {/* <p>{post.Author}</p> */}
                    //        </div>
                    //     )
                    // })
                }
            </div>
    );
}

export default Admin;