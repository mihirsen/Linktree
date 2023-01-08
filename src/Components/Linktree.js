import React from 'react';
import './Linktree.css';
import mikkywave from '../Components/images/mickey-mouse-wave.gif';
import mikkymouse from '../Components/images/Mickey-Mouse.gif';
import {useNavigate} from 'react-router-dom';

const Linktree = () => {

    const navigate = useNavigate();

    const Back = () => {
    navigate('/');
  };


  return (
<div className='image'>
    <img src={mikkywave} id='mikkywave'/>
    <div class="flex-container">
    <a class="flex-item-left" href='https://github.com/mihirsen' target='blank'>Git-Hub</a>
    <a class="flex-item-right"href='https://www.facebook.com/mihir.sen.319247/' target='blank'>Facebook</a>
    <a class="flex-item-left"  href='https://www.linkedin.com/in/mihir-sen-ba413320a/' target='blank'>LinkedIn</a>
    <a class="flex-item-right" href='https://www.instagram.com/m1h14_s3n/' target='blank'>Instagram</a>
    <a class="flex-item-left" href='https://mihirsen-portfollio.netlify.app/' target='blank'>My Website</a>
    <a class="flex-item-right" href='https://www.youtube.com/channel/UCBkIbVG4Ty_OROw6plkDYfA' target='blank'>You-Tube</a>
    <a className='back' onClick={Back}>Back</a>
</div>
<img src={mikkymouse} id='mikkymouse'/>
</div>
  )
}

export default Linktree
