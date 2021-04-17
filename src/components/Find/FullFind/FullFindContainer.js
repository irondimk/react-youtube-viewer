import React from 'react';
import { connect } from 'react-redux';
import './../Find.css';
import FullFind from './FullFind';
import {downloadSnippetVideo, editTypeViewVideo} from '../../../redux/youtubeReducer';
import { addNewFavoritesRequest } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
    return { 
        videos: state.youtube.videos,
        valueLastRequest:state.youtube.valueLastRequest,
        countResults: state.youtube.countResults,
        isListShowVideo: state.youtube.isListShowVideo,
        login: state.profile.login,
        index: (state.profile.profileRequests).length
    }
}

export default connect(mapStateToProps, {downloadSnippetVideo, editTypeViewVideo, addNewFavoritesRequest})(FullFind);