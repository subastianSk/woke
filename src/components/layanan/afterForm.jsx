import { Col, Row } from "antd"
import Navbar from "../Navbar"
import "../../style/after.css"
import afterpic from "../../img/afterpic.svg"

let ls = window.localStorage
export default function afterForm() {
    let pic = ls.getItem("qr")
    let link = ls.getItem("deep link")
    return (
        <div>
            <Navbar/>
            <Row className="bayar">
                <Col span={12}>
                   <img src={afterpic} alt="" className="afterpic" />
                </Col> 
                <Col span={12}>
                    <img src={pic} alt="" className="barcode" />
                    <h3>Scan Barcode Tersebut untuk Pembayaran</h3>
                    <h3>Atau Klik Link Dibawah ini</h3>
                    <a href={link} className="linkbayar">Link Pembayaran</a>
                </Col>
            </Row>

        </div>
    )
}