import React from 'react';

function Featurebox(props){
return(
<div className='a-boxi'>
<div class='a-b-img'>
<img src={props.image} alt=''/>
</div>
<div className='a-b-text'>
<h2>{props.title}</h2>
<p> Memiliki psikolog yang sudah berpengalaman </p>
</div>
</div>
)
}
export default Featurebox;
