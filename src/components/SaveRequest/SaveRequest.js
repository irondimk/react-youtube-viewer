import React from 'react';
import FormSaveRequest from './FormSaveRequest';
import './SaveRequest.css';

let SaveRequest = (props) => {
    return(
        <div className="save__wrapper">
            <div className="save">
                <h2 className="save__title">{props.title}</h2>
                <FormSaveRequest 
                isCanEditRequest={props.isCanEditRequest} 
                closeModalForm={props.closeModalForm}
                valueRequest={props.valueRequest}
                count={props.count}
                action = {props.addNewFavoritesRequest}
                index = {props.index}
                login = {props.login}
                name = {props.name}
                orderType = {props.orderType}
                orderList = {props.orderList}
                />
            </div>
        </div>
    )
}

export default SaveRequest;