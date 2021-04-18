import React from 'react';
import PreloaderImg from '../../asstets/img/spin.png';
import './Preloader.css';

let Preloader = () => {
    return(
    <div className="preloader">
        <img src={PreloaderImg}/>
    </div>
    )
}

export default Preloader;