import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Dropdown, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { get_quiz, post_quiz } from "../../redux/action/index";
//hiraukan
import { Link, useHistory } from "react-router-dom";
import '../quiz/quiz.css'

export const Soal = () => {
    const dispatch = useDispatch();
    const count = 0;
    const listJawaban = [];
    // const [countSoal, setCount] = useState(0); 

    useEffect(() => {
        dispatch(get_quiz());
    }, [dispatch])

    const history = useHistory();
    const mainState = useSelector(state => state?.main)
    const soal = mainState?.soal
    const submit = (values) => {
        dispatch(post_quiz(listJawaban, history));
        console.log(values)
    }
    const logger = (changedValues) => {
        console.log(changedValues)
        listJawaban.push(changedValues)
    }

    return (
        <div>
            <div className='quiz-con'>
                <div className='quiz-title'>
                    <h2> Tes Tingkat Keparahan Stress </h2>
                </div>
                <div className='quiz-card'>
                    <div className='form-card'>
                        <div className='perintah'>
                            <p>
                                Jawablah seluruh soal dibawah ini sesuai dengan kondisi yang sedang kamu alami,
                                lalu kirim jawaban untuk melihat hasilnya!
                            </p>
                            </div>
                        <div className='card-soal'>
                            <Form name='form' onFinish={submit} onValuesChange={logger}>
                                {
                                    !soal ?
                                    null
                                    :
                                    soal.map((soal) => {
                                    return (
                                        soal.isiQuiz.map((isiSoal, index) => {
                                            return (
                                                <Form.Item name={"soal" + index} label={isiSoal.soal} layout='vertical'>
                                                        <div className='pilihan-jawaban'>
                                                            <Radio.Group className='pilihan-jawaban' size="medium" buttonStyle='outline'>
                                                                <Space direction="horizontal" style={{marginTop:4, padding:0}}>
                                                                <Radio value="a">{isiSoal.pilihanA}</Radio>
                                                                <Radio value="b">{isiSoal.pilihanB}</Radio>
                                                                <Radio value="c">{isiSoal.pilihanC}</Radio>
                                                                <Radio value="d">{isiSoal.pilihanD}</Radio>
                                                                </Space>
                                                            </Radio.Group>
                                                        </div>
                                                    
                                                </Form.Item>
                                            )
                                        })
                                    )
                                }
                            )}
                    <br />
                    <div className='btn-submit'>
                        <Form.Item>
                                <Button type='primary' htmlType='submit' className='btn-kirim'>
                                    Kirim 
                                </Button>
                        </Form.Item>
                    </div>
                        </Form>
                        </div>
                    </div>
            </div>
         </div>       
    </div>
        
    );
};

export default Soal;