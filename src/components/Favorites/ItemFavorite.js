import React, {useState} from 'react';
import seachImg from '../../asstets/img/search.png';
import editImg from '../../asstets/img/edit.png';
import SaveRequest from '../SaveRequest/SaveRequest';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
let ItemFavorite = (props) => {

    let [isShowEditForm, setIsShowEditForm] = useState(false);

    let closeModalForm = () => {
        setIsShowEditForm(false); 
    }

    let openModalForm = () => {
        setIsShowEditForm(true);
    } 

    let findVideos = () => {
        props.downloadSnippetVideo(props.request, props.countViews, props.orderType);
    }

    return(
        <div className="favorites__item">
        <div className="favorites__text-blocks">
            <div className="favorites__text-block">
                {props.request}
            </div>
            <div className="favorites__text-block">
                {props.name}
            </div>
            <div className="favorites__text-block">
                {props.orderType}
            </div>
            <div className="favorites__text-block">
                {props.countViews}
            </div>
        </div>
            <div className="favorites__actions">
                <img className="favorites__edit" src={editImg} onClick={openModalForm} />
                <Link to="/find"> 
                <img className="favorites__search" src={seachImg} onClick={findVideos} />
                </Link>
            </div>
            {isShowEditForm && <SaveRequest 
            isCanEditRequest={true} 
            closeModalForm={closeModalForm} 
            title={"Изменить запрос"}
            valueRequest = {props.request}
            name = {props.name}
            orderType = {props.orderType}
            count = {props.countViews}
            index = {props.index}
            login={props.login}
            addNewFavoritesRequest={props.editRequestUser}
            orderList={props.orderList}
            />}
        </div>
    )
}

export default ItemFavorite;