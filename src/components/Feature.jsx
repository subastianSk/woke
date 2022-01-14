import React from 'react';
import Featurebox from './Featurebox.jsx';
import R1 from '../images/R1.png';
import R2 from '../images/R2.png';
import R3 from '../images/R3.png';
import R4 from '../images/R4.png';
function Feature(){
return (
<div id='features'>
<h1>Kenapa harus TESLAH ?</h1>
<div className='a-containeri'>
<Featurebox image={R1}title="Tenaga Ahli" />
<Featurebox image={R2}title="Penuh Cinta" />
<Featurebox image={R3}title="Privasi Terjamin" />
<Featurebox image={R4}title="Harga Terjangkau" />
</div>
</div>
)
}
export default Feature;










