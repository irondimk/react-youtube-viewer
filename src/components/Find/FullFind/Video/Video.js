import React from 'react';
import './Video.css';

let Video = (props) => {
    return (
        <div className="video">
            <div className="video__img-block">
                <img className="video__img" src={props.image}/>
            </div>
            <div className="video__text">
                <p className="video__title">{props.name}</p>
                <p className="video__channel">{props.channel}</p>
            </div>
        </div>
    )
}

export default Video;