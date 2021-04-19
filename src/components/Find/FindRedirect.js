import { Redirect } from 'react-router-dom';
import React from 'react';
import Find from './EmptyFind/Find';
import { connect } from 'react-redux';
import {test} from '../../redux/youtubeReducer';
import FullFindContainer from './FullFind/FullFindContainer';
let mapStateToProps = (state) => {
    return {
        isHaveVideos: state.youtube.isHaveVideos
    }
}

let FindRedirect = (WrappedComponent) => {
    
    let RedirectComponent = (props) => {
        return(
            props.isHaveVideos ? <FullFindContainer/> : <WrappedComponent props={props}/>
        )
    }
    let FinalComponent = connect(mapStateToProps, {})(RedirectComponent);
    return FinalComponent;
}

export default FindRedirect;