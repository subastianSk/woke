import { Form, Button, Select, Input } from "antd";
import { useDispatch } from "react-redux";
import { post_register } from "../redux/action/index";
import imageregister from "../img/registerimg.svg"
// import "../style/register.css"
import "../style/login.css"
//hiraukan
import { Link, useHistory } from "react-router-dom";

export default function Register () {
    const dispatch = useDispatch()

    const history = useHistory()
    const register = (values) => {
        dispatch(post_register (values,history))
    }

    return (
        <>
                <div className="biru">
                    <div className="forms-container">
                        <div className="register">
                            <Form
                                name="normal_register"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={register}
                                style={{ width: "79%", marginTop: 50, marginLeft: 400 }}
                                size="large"
                                >
                                    <div className="sign-up-from">
                                         <h2 class="title">Daftar Sekarang</h2> <br />
                                        <h6 htmlFor="">Username</h6>
                                        <Form.Item 
                                            name="username" 
                                            className="input-field"
                                            style={{marginLeft : 120, width : 500, marginTop : -3}} 
                                            rules={[{ required: true }]} 
                                        >
                                            <input type="text" placeholder="Masukkan Username Anda" />
                                        </Form.Item>

                                        <h6 htmlFor="">Password</h6>
                                        <Form.Item 
                                            name="password" 
                                            className="input-field"
                                            style={{marginLeft : 120, width : 500, marginTop : -3}} 
                                            rules={[{ required: true }]} 
                                        >
                                            <input type="password" placeholder="Masukkan Password Anda" />
                                        </Form.Item>

                                        <h6 htmlFor="">Email</h6>
                                        <Form.Item 
                                            name="email" 
                                            className="input-field"
                                            style={{marginLeft : 120, width : 500, marginTop : -3}} 
                                            rules={[{ required: true }]} 
                                        >
                                            <input type="text" placeholder="Masukkan Email Anda" />
                                        </Form.Item>

                                        <h6 htmlFor="">Jenis Kelamin</h6>
                                        <Form.Item name="jenis_kelamin" rules={[{ required: true }]}>
                                            <select
                                            placeholder="Pilih Jenis Kelamin Anda"
                                            // onChange={onJenisKelaminChange}
                                            allowClear
                                            className="input-field"
                                            style={{marginLeft : 120, width : 500, marginTop : -3}}
                                            rules={[{ required: true }]}
                                            >
                                            <option value="laki-laki">Laki - Laki</option>
                                            <option value="perempuan">Perempuan</option>
                                            
                                            </select>
                                        </Form.Item>

                                        <h6 htmlFor="">Tanggal Lahir</h6>
                                        <Form.Item 
                                            name="tanggal_lahir" 
                                            className="input-field"
                                            style={{marginLeft : 120, width : 500, marginTop : -3}} 
                                            rules={[{ required: true }]} 
                                        >
                                            
                                            <input type="date" />
                                        </Form.Item>

                                        <Form.Item>
                                            <button className="btn-masuk" type="submit"> Submit </button>
                                        </Form.Item>
                                    </div>
                                
                            </Form>
                        </div>
                    </div>
                    
                </div>
                <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3 className="title1">Sudah Punya Akun?</h3> <br />
                                <Link to="/login">
                                <button className="btn-kiri"> Masuk </button>
                                </Link>
                            </div>
                        
                            <img src={imageregister} alt="" className="image" />
                        </div>
                    
                    </div> 
                
               
           
        </>
    )
}