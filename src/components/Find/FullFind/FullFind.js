import React, {useState} from 'react';
import './../Find.css';
import FindForm from './FindForm';
import Video from './Video/Video';
import listActive from '../../../asstets/img/view/active/list.svg';
import gridActive from '../../../asstets/img/view/active/grid.svg';
import listWait from '../../../asstets/img/view/wait/list.svg';
import gridWait from '../../../asstets/img/view/wait/grid.svg';
import SaveRequest from '../../SaveRequest/SaveRequest';
import Preloader from '../../Preloader/Preloader';

let FullFind = (props) => {

    let [isShowSaveWindow, setIsShowSaveWindow] = useState(false);

    let closeModalForm = () => {
        setIsShowSaveWindow(false); 
    }

    let openModalForm = () => {
        setIsShowSaveWindow(true);
    } 


    let videos = props.videos.map((elem)=> {
        return (<Video image={elem.snippet.thumbnails.medium.url} name={elem.snippet.title}
            channel={elem.snippet.channelTitle} isListShowVideo={props.isListShowVideo}
        />)
    })

    return (
        !props.isShowPreloader ? 
        <div className="fullfind">
        
            <h2 className="fullfind-title">Поиск видео</h2>
            <FindForm downloadSnippetVideo={props.downloadSnippetVideo} 
            valueLastRequest={props.valueLastRequest}
            openModalForm={openModalForm}
            defaultCountResults = {props.defaultCountResults}
            isCurrentRequestToFavorite = {props.isCurrentRequestToFavorite}
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
                        <img src={listActive} alt="icon type view" onClick={ props.editTypeViewVideo}/>
                        <img src={gridWait} alt="icon type view" onClick={props.editTypeViewVideo}/>
                    </div>
                    :  
                    <div>
                        <img src={listWait} alt="icon type view" onClick={props.editTypeViewVideo}/>
                        <img src={gridActive} alt="icon type view" onClick={props.editTypeViewVideo}/>
                    </div>   
                    }
                </div>
            </div>
            <div className={!props.isListShowVideo && "video__wrapper-grid"}>
                {videos}
            </div>
            {isShowSaveWindow && <SaveRequest 
            isCanEditRequest={false} 
            closeModalForm={closeModalForm} 
            title={"Сохранить запрос"}
            valueRequest={props.valueLastRequest}
            count = {props.defaultCountResults}
            name = ""
            orderType = "relevance"
            addNewFavoritesRequest={props.addNewFavoritesRequest}
            index={props.indexNextFavoriteRequest}
            login={props.login}
            orderList={props.orderList}
            />}
        </div>
        :
        <Preloader/>
    )
}

export default FullFind;