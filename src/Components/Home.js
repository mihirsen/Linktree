import React from 'react';
import Linktreelogo from '../Components/images/linktree.png';
import happyMikky from '../Components/images/happy-mikky.gif';
import './Home.css';
import {useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const Linktree = () => {
    navigate('/Linktree');
  };

  return (
    <div className='Home'>
        <div className='Linktreelogo'>
           <div><img src={Linktreelogo} alt='logo' className='Linktreelogo'/></div>
           <div><span className='Wellcome'>WELCOME</span></div>
           <div><img src={Linktreelogo} alt='logo' className='Linktreelogo'/></div>
        </div>
        <div className='mikky'>
             <img src={happyMikky} alt='mikky' className='happyMikky' />
        </div>
        <div className='Login'>
            <form className='form'>
                <input type='text' placeholder='ENTER YOUR NAME' id='name'/> <br/>
                <input type='submit' placeholder='Submit' id='submit' onClick={Linktree}/>
            </form>
        </div>
    </div>
  )
}

export default Home
