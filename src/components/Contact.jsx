import React from 'react';

function Contact() {
    return (
        <div id='contact'>
            <h1>Kirim Pesan</h1>
            <form>
                <input type='text' placeholder='Masukkan Nama' />
                <input type='email' placeholder='Masukkan Email' />
                <textarea placeholder='Tulis disini.....'></textarea>
                <input type='submit' value='Kirim' className='send'/>
            </form>
        </div>
    )
}

export default Contact;
