import React from 'react';
import './Video.css';

let Video = (props) => {

    
    return (
        <div className={props.isListShowVideo? "video-list" : "video-grid"}>
            <div className={props.isListShowVideo? "video__img-block" : "video__img-block-grid"}>
                <img className="video__img" alt="preview video" src={props.image}/>
            </div>
            <div className={props.isListShowVideo ? "video__text" : "video__text-grid"}>
                <p className={props.isListShowVideo ? "video__title" : "video__title-grid"}>{props.name}</p>
                <p className={props.isListShowVideo ? "video__channel" : "video__channel-grid"}>{props.channel}</p>
            </div>
        </div>
    )
}

export default Video;