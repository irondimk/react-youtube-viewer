import React from 'react';
import './../Find.css';
import FindForm from './../FindForm';


let Find = (props) => {
    return (
        <div className="find">
            <h1 className="find__title">Поиск видео</h1>
            <FindForm getVideos={props.downloadSnippetVideo}/>
        </div>
    )
}

export default Find;