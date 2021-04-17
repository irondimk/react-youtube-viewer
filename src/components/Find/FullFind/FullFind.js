import React from 'react';
import './../Find.css';
import FindForm from './FindForm';
import Video from './Video/Video';
import listActive from '../../../asstets/img/view/active/list.svg';
import gridActive from '../../../asstets/img/view/active/grid.svg';
import listWait from '../../../asstets/img/view/wait/list.svg';
import gridWait from '../../../asstets/img/view/wait/grid.svg';

// editTypeViewVideo

let FullFind = (props) => {
    let videos = props.videos.map((elem)=> {
        return (<Video image={elem.snippet.thumbnails.medium.url} name={elem.snippet.title}
            channel={elem.snippet.channelTitle} isListShowVideo={props.isListShowVideo}
        />)
    })

    return (
        <div className="fullfind">
            <h2 className="fullfind-title">Поиск видео</h2>
            <FindForm downloadSnippetVideo={props.downloadSnippetVideo} 
            valueLastRequest={props.valueLastRequest}
            addNewFavoritesRequest={props.addNewFavoritesRequest}
            login={props.login}
            index={props.index}
            />
            <div className="fullfind__description">
            <p className="fullfind__count-results">Видео по запросу "{props.valueLastRequest }" 
                <span className="fullfind__count-results-num"> 
                    {" " + props.countResults}
                </span>
            </p>
                <div className="fullfind__toggles-view">
                    {props.isListShowVideo? 
                    <div>
                        <img src={listActive} onClick={ props.editTypeViewVideo}/>
                        <img src={gridWait} onClick={props.editTypeViewVideo}/>
                    </div>
                    :  
                    <div>
                        <img src={listWait} onClick={props.editTypeViewVideo}/>
                        <img src={gridActive} onClick={props.editTypeViewVideo}/>
                    </div>   
                    }
                </div>
            </div>
            <div className={!props.isListShowVideo && "video__wrapper-grid"}>
                {videos}
            </div>
            
        </div>
    )
}

export default FullFind;