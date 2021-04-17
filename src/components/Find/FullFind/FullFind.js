import React from 'react';
import './../Find.css';
import FindForm from './FindForm';
import Video from './Video/Video';
// import FindForm from './FindForm';

let FullFind = (props) => {
    let videos = props.videos.map((elem)=> {
        return (<Video image={elem.snippet.thumbnails.medium.url} name={elem.snippet.title}
            channel={elem.snippet.channelTitle}
        />)
    })

    return (
        <div className="fullfind">
            <h2 className="fullfind-title">Поиск видео</h2>
            <FindForm valueLastRequest={props.valueLastRequest}/>
            <p className="fullfind__count-results">Видео по запросу "{props.valueLastRequest}" <span className="fullfind__count-results-num"> {props.countResults}</span></p>
            {videos}
        </div>
    )
}

export default FullFind;