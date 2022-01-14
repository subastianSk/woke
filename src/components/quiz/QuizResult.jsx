import React from 'react';
import '../quiz/quiz.css'
import { useSelector } from 'react-redux';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../Navbar'

export const QuizResult = () => {
    const { search } = useLocation()
    const values = queryString.parse(search)
    console.log(values.hasil) 
    console.log(values.hasil) 
    let hasil = values.hasil;
    let score = values.score;
    let desc = "";
    if (hasil == "rendah") {
        desc = <tr> Berdasarkan hasil tes maka tingkat stress kamu adalah "RENDAH".
                    Oleh karena itu, kami menyarankan agar melakukan sesi konseling
                    untuk membantumu mencari jalan keluar dari masalah yang mengganggu pikiranmu.
                    Kamu bisa melihat profil psikolog yang akan menemani sesi konselingmu.
                    Selain itu, kamu juga bisa menikmati konten-konten yang tersedia
                    untuk membuat pikiran kamu lebih tenang </tr>
    } else if (hasil == "sedang") {
        desc = <tr>Berdasarkan hasil tes maka tingkat stress kamu adalah "SEDANG".
                    Oleh karena itu, kami menyarankan agar melakukan sesi konseling
                    untuk membantumu mencari jalan keluar dari masalah yang mengganggu pikiranmu.
                    Kamu bisa melihat profil psikolog yang akan menemani sesi konselingmu.
                    Selain itu, kamu juga bisa menikmati konten-konten yang tersedia
                    untuk membuat pikiran kamu lebih tenang </tr>
    } else if (hasil == "tinggi") {
        desc = <tr>Berdasarkan hasil tes maka tingkat stress kamu adalah "TINGGI".
                    Oleh karena itu, kami menyarankan agar melakukan sesi konseling
                    untuk membantumu mencari jalan keluar dari masalah yang mengganggu pikiranmu.
                    Kamu bisa melihat profil psikolog yang akan menemani sesi konselingmu.
                    Selain itu, kamu juga bisa menikmati konten-konten yang tersedia
                    untuk membuat pikiran kamu lebih tenang </tr>
    }

    return (
        <div>
            <Navbar />
            <div className='card-result'>
                <div className='card-result-title'>
                    <h2>Hasil Tes Tingkat Keparahan Stress</h2>
                </div>
                <div className='table-result'>
                    <table>
                        <tr>
                            <td>
                                Total Pertanyaan
                            </td>
                            <td>
                                10
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Total Nilai
                            </td>
                            <td>
                                { score }/100
                                
                            </td>
                        </tr>
                    </table>
                    <table className='result-desc'>
                       {desc}
                    </table>
                </div>
                <div className='btn-result'>
                    <Link to='/konten'>
                    <button className='btn-konten'>
                        Lihat konten
                    </button>
                    </Link>
                   <Link to ='/layanan'>
                   <button className='btn-layanan'>
                        Ambil layanan
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default QuizResult;