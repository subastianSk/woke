import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo1.png';
let ls = window.localStorage

function Navbar() {

    let token = ls.getItem("token")

    const[nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to="/">Beranda</Link></li>
                <li><Link to="/quiz">Tes Psikologi</Link></li>
                <li><Link to="/layanan">Layanan</Link></li>
                <li><Link to="/konten">Konten</Link></li>
            </ul>
            <Link to="/register">
            <button className="btn-nav"> Daftar </button>
            </Link>
            
        </nav>
    )
}

export default Navbar;
