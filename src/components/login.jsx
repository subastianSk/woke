import { useDispatch } from "react-redux";
import { post_login } from "../redux/action/index";
import "../style/login.css"
import imagelogin from "../img/login.svg"
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from "react-router-dom";

export default function Login () {
    const dispatch = useDispatch()
    const history = useHistory()
    const login = (values) => {
        dispatch(post_login(values,history))
    }

    return (
        <>
            <div className="biru">
                <div className="forms-container">
                    <div  className="signin-signup">
                        <Form
                                name="normal_login"
                                initialValues={{
                                remember: true,
                                }}
                                onFinish={login}
                                style={{ width: "79%", marginTop: 50, marginLeft: 30 }}
                                size="large"
                               
                            >
                            <div className="sign-in-form">
                                <h2 className="title2">Hai</h2><br/>
                                <h2 className="title">Selamat Datang</h2> <br /><br />
                                <h6>Username</h6>
                                <Form.Item name="username" className="input-field" >
                                    <input type="text" placeholder="masukkan username anda" />
                                </Form.Item>
                                <h6>Password</h6>
                                <Form.Item name="password" className="input-field" style={{width : 350}}>
                                    <input type="password" placeholder="masukkan password anda" />
                                </Form.Item>

                                <Form.Item>
                                <button className="btn-masuk"> Submit </button>
                                </Form.Item>
                            </div>
                            </Form>
                    </div>
                             
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3 className="title1">Silahkan Mendaftar</h3>
                            <p>Buat akun sekarang gratis dan cepat</p>
                            <Link to="/register">
                            <button className="btn-kiri"> Daftar </button>
                            </Link>
                        </div><br /><br />
                        <img src={imagelogin} alt="" className="img-login" />
                    </div>
                </div>               

                
            </div>
            
         </>
    )
}