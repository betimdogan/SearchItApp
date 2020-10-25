import React from 'react';
import Logo from '../../images/logo.png';
import './HeaderHome.css';

function HeaderHome() {
    return (
        <div className='hContainer'>
            <img src={Logo} alt="" className='hLogo'/>
            <br></br>
        </div>
    );
}
export default HeaderHome;