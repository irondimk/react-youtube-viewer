import React from 'react';
import { connect } from 'react-redux';
import './Favorites.css';

let Favorites = (props) => {
    return(<div className="favorites">
            {props.requests}
        </div>
        )
    
}


let mapStateToprops = (state) => {
    return{
        requests: state.profile.profileRequests
    }
}

export default connect(mapStateToprops, {})(Favorites);


