import React from 'react';
import Find from './EmptyFind/Find';
import {connect} from "react-redux";
import {downloadSnippetVideo} from '../../redux/youtubeReducer';
import FindRedirect from './FindRedirect';

let mapStateToProps = (state) => {
    return{
        
    }
}

let FindContainer = FindRedirect(connect(mapStateToProps, {downloadSnippetVideo})(Find));

export default FindContainer;