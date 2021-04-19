import React from 'react';
import { connect } from 'react-redux';
import { downloadSnippetVideo } from '../../redux/youtubeReducer';
import { editRequestUser } from '../../redux/profileReducer';
import './Favorites.css';
import ItemFavorite from './ItemFavorite';

let Favorites = (props) => {

    let itemsFavoriteRequests = props.requests.map((elem) => {
        return (<ItemFavorite
            index={elem.index}
            request={elem.request}
            name={elem.name}
            orderType={elem.orderType}
            countViews={elem.countViews}
            login={props.login}
            downloadSnippetVideo={props.downloadSnippetVideo}
            editRequestUser={props.editRequestUser}
            orderList={props.orderList}
        />)
    })

    return (<div className="favorites">
        <h1 className="favorites__title">Избранное</h1>
        <div className="favorites__header">
            <div className="favorites__text-blocks-header">
                <div className="favorites__text-block">
                    Запрос
                </div>
                <div className="favorites__text-block">
                    Наименование
                </div>
                <div className="favorites__text-block">
                    Способ сортировки
                </div>
                <div className="favorites__text-block">
                    Количество видео
                </div>
            </div>
        </div>
        {itemsFavoriteRequests}
    </div>
    )
}


let mapStateToprops = (state) => {
    return {
        requests: state.profile.profileRequests,
        login: state.profile.login,
        orderList: state.youtube.orderList
    }
}

export default connect(mapStateToprops, { downloadSnippetVideo, editRequestUser })(Favorites);


