import React from 'react';
import { Link } from 'react-router-dom';
import '../quiz/quiz.css'
import Navbar from '../Navbar';

export const StartQuiz = () => {
    return (
        <div>
            <Navbar />
            <div className='card-start-container'>
                <div className='"card-title'>
                    <h2>Tes Tingkat Keparahan Stress</h2>
                </div>
                <div className='card-desc'>
                    <p>
                        Pada tes kali ini tidak ada jawaban salah dan benar,
                        jawablah tes ini sesuai  dengan keadaan kamu saat ini.
                        Selamat mengerjakan!
                    </p>
                </div>
                <div className='btn-card'>
                    <Link to='/soal'>
                        <button>
                            Mulai 
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StartQuiz;
