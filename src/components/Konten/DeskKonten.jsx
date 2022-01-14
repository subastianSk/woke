


// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios';
// import Navbar from '../Navbar';
// import "../../style/deskkonten.css"

// function DeskKonten() {
//     const [APIData, setAPIData] = useState([]);
//     useEffect(() => {
//         axios.get("https://teslah-final.herokuapp.com/artikel/getOneArtikel")
//             .then((response) => {
//                 console.log('ini dari useeffect array',response.data.result)
//                 console.log('ini dari useeffect obj',response.data)
//                 setAPIData(response.data.result);
//             })
//     },[])
//     console.log(APIData)

//     return (
//         <div>
//             <Navbar/>
//             <div>
//                 <h1 className='cek-cek'>cek cek</h1>
//             </div>
//             <div className="a-container">
//             {
//             !APIData ? null
//             :
//             APIData.map((post) =>
//             {
//                 return (

                    
//                     <div>
                        
//                         <div className="desk-konten">
//                             <h5>{post.Judul}</h5>
//                             <p>{post.Author}</p>
//                             {post.Tag}
//                             <h4>{post.Penerbit}</h4>
//                         </div>
//                         </div>
//             )
//             }
//             )}
//             </div>
//     </div>
//     )
// }


// export default DeskKonten;



import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Card, Avatar } from 'antd';
import Navbar from '../Navbar';
import "../../style/deskkonten.css"
import { Link } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';


function DeskKonten() {
    
    return (
        <div>
            <Navbar/>
            <div className='desk-konten'>
                <h3>6 tips remaja bisa menjaga kesehatan mental <br /> selama coronavirus (COVID-19)</h3>
                <p className='ini-p1'>Kesehatan Mental</p>
                <p>2021-06-24</p>
                <img className='ini-img' src="https://www.unicef.org/indonesia/sites/unicef.org.indonesia/files/styles/hero_desktop/public/UN0140096.jpg?itok=XTa_f4lI" alt="" />
                <div className='pembungkus'>
                    <p>Menjadi seorang remaja adalah hal yang tidak mudah, dan penyakit coronavirus (COVID-19) bisa membuatnya semakin sulit. Dengan ditutupnya sekolah dan dibatalkannya berbagai acara, banyak remaja kehilangan beberapa momen besar di kehidupan mereka — dan juga momen keseharian seperti mengobrol dengan teman dan berpartisipasi di kelas.
                    Untuk para remaja yang merasakan perubahan hidup akibat wabah lalu merasa cemas, terisolasi, dan kecewa karenanya, ketahuilah: kamu tidak sendirian. Kami berbicara dengan Dr. Lisa Damour, seorang psikolog remaja, penulis best-seller dan kolumnis bulanan New York Times, tentang hal-hal yang bisa kamu lakukan untuk mempraktikan perawatan diri dan menjaga kesehatan mentalmu.</p>

                    <h3>1. Sadari bahwa kecemasanmu adalah hal yang wajar</h3>
                    <p>Jika penutupan sekolah dan judul-judul mengkhawatirkan di media membuatmu merasa cemas, kamu tidak sendirian. Malah, itu adalah hal yang sudah seharusnya kamu rasakan.

                    “Para psikolog sudah lama menyadari bahwa kecemasan adalah fungsi normal dan sehat yang bisa membuat kita waspada terhadap ancaman, dan membantu kita untuk mengambil tindakan untuk melindungi diri,” kata Dr. Damour. “Kecemasanmu akan membantumu mengambil keputusan yang harus dibuat saat ini, seperti tidak menghabiskan waktu bersama orang lain atau dalam kelompok besar, mencuci tangan dan tidak menyentuh wajah.”Perasaan-perasaan tersebut tidak hanya membantu menjaga dirimu, tapi juga orang lain. Hal inilah yang mencerminkan “bagaimana kita ikut menjaga anggota masyarakat. Kita juga memikirkan orang-orang di sekitar kita, lho.”

                    Merasa cemas mengenai COVID-19 memang hal yang benar-benar bisa dimengerti, tetapi pastikan bahwa kamu “menggunakan sumber yang terpercaya (seperti situs UNICEF atau WHO) ketika mencari informasi, atau cek kembali informasi yang kamu dapatkan apakah berasal dari saluran yang kurang bisa diandalkan reliabilitasnya,” nasihat Dr. Damour.

                    Jika kamu merasa mengalami gejala-gejala yang berhubungan dengan COVID-19, segera bicara dengan orang tuamu. “Ingat bahwa penyakit akibat infeksi COVID-19 itu pada umumnya ringan, terutama pada anak-anak dan dewasa muda,” kata Dr. Damour. Penting juga untuk diingat, bahwa banyak gejala COVID-19 yang bisa diobati. Beliau menyarankan untuk memberi tahu orang tua atau orang dewasa yang terpercaya jika kamu merasa tidak enak badan atau merasa khawatir tentang virus, agar mereka bisa membantu.

                    Dan ingatlah: "Ada banyak hal efektif yang dapat kita lakukan untuk menjaga agar diri kita dan orang lain tetap aman dan merasa lebih bisa mengendalikan keadaan kita: Sering mencuci tangan, jangan menyentuh wajah, dan melakukan social distancing atau pembatasan sosial."</p>

                    <h3>2. Cari pengalihan</h3>
                    <p>“Menurut para psikolog, ketika kita berada dalam kondisi yang sangat sulit, akan sangat membantu untuk mengenali masalah menjadi dua kategori: Hal-hal yang bisa kita kendalikan, dan hal-hal yang tidak bisa kita kendalikan,” kata Dr. damour.

                    Saat ini ada banyak hal yang jatuh pada kategori kedua, dan itu tidak apa-apa. Tapi satu hal yang bisa membantu kita untuk menghadapi situasi tersebut adalah dengan mencari pengalihan untuk kita sendiri. Mengerjakan PR, menonton film kesukaan, atau membaca novel sebelum tidur adalah hal-hal yang disarankan oleh Dr. Damour untuk mencari pelampiasan dan menemukan keseimbangan dalam kehidupan sehari-hari.</p>

                    <h3>3. Temukan cara baru untuk berkomunikasi dengan teman-temanmu</h3>
                    <p>Jika kamu ingin bersosialisasi dengan teman di tengah kondisi social distancing, media sosial adalah solusi yang bagus untuk berkomunikasi. Salurkan kreativitasmu: Ikuti Tik-Tok challenge seperti #safehands, #dirumahaja, dan lain-lain. “saya tidak akan pernah meremehkan kreativitas remaja,” kata Dr. Damour, “Menurut saya, remaja akan menemukan cara untuk [terhubung] dengan satu sama lain secara online melalui cara yang belum pernah dilakukan sebelumnya.”

                    “[Tetapi] memiliki akses tanpa batas ke layar kaca atau media sosial itu bukan hal yang bagus. Itu hal yang tidak sehat dan tidak cerdas, dan bahkan bisa menambah rasa cemasmu,” kata Dr. Damour, yang merekomendasikan agar kamu mendiskusikan dengan orangtua untuk mengatur jadwal screen time (waktu yang Kamu habiskan di depan televisi/gadget) untukmu.</p>
                </div>
            </div>
    </div>
    )
}


export default DeskKonten;