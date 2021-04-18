import React, { useState } from 'react';
import SaveRequest from '../../SaveRequest/SaveRequest';
import './../Find.css';
import FindForm from './../FindForm';


let Find = (props) => {

    return (
        <div className="find">
            <h1 className="find__title">Поиск видео</h1>
            <FindForm 
            getVideos={props.downloadSnippetVideo} 
            defaultCountResults={props.defaultCountResults}
            />
        </div>
    )
}

export default Find;