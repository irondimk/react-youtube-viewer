import React from 'react';
import PreloaderImg from '../../asstets/img/preloader/spin.png';
import './Preloader.css';

let Preloader = () => {
    return(
    <div className="preloader">
        <img alt="process load" src={PreloaderImg}/>
    </div>
    )
}

export default Preloader;