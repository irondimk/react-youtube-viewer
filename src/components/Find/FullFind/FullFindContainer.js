import React from 'react';
import { connect } from 'react-redux';
import './../Find.css';
import FullFind from './FullFind';

let mapStateToProps = (state) => {
    return {
        videos: state.youtube.videos,
        valueLastRequest:state.youtube.valueLastRequest,
        countResults: state.youtube.countResults
    }
}

export default connect(mapStateToProps, {})(FullFind);