import React from 'react';
import { connect } from 'react-redux';
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