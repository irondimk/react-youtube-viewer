import React, { useState } from 'react';
import { connect } from 'react-redux';
import SaveRequest from '../SaveRequest/SaveRequest';
import './Favorites.css';
import ItemFavorite from './ItemFavorite';

let Favorites = (props) => {

    


    let itemsFavoriteRequests = props.requests.map((elem)=>{
        return(<ItemFavorite 
            request={elem.request}
            name={elem.name}
            orderType={elem.orderType}
            countViews={elem.countViews}
        />)
    })

    return(<div className="favorites">
            <h1 className="favorites__title">Избранное</h1>
            <div className="favorites__header"> </div>
            {itemsFavoriteRequests}
            {/* {isShowEditForm && <SaveRequest 
            isCanEditRequest={true} 
            closeModalForm={closeModalForm} 
            title={"Изменить запрос"}
            />} */}
        </div>
        )
}


let mapStateToprops = (state) => {
    return{
        requests: state.profile.profileRequests
    }
}

export default connect(mapStateToprops, {})(Favorites);


