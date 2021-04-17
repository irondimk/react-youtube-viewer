import { videoApi } from "../api/videoApi";

const SET_VIDEOS = 'youtubeReducer/SET-VIDEOS';
const EDIT_VIEW_VIDEOS = 'youtubeReducer/EDIT-VIEW-VIDEOS';

let initialState = {
    videos: null,
    requestsListCount: 12,
    isHaveVideos: false,
    isListVisionVideo: true,
    typesSorting: null,
    valueLastRequest: null,
    countResults: 0,
    isListShowVideo: true
}

let youtubeReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_VIDEOS: {
            return {...state, valueLastRequest: action.nameRequest, isHaveVideos: true, videos: action.videos, countResults: action.countResults }
        }
        case EDIT_VIEW_VIDEOS: {
            return {...state, isListShowVideo: !state.isListShowVideo}
        }
    }
    return state;
}

const editType = () => {
    return {
        type: EDIT_VIEW_VIDEOS
    }
}

const setVideos = (videos, nameRequest, countResults) => {
    return {
        type: SET_VIDEOS,
        videos,
        nameRequest,
        countResults
    }
}


export const downloadSnippetVideo = (nameRequest, sizeRequest) => {
    return async (dispatch) => {
        let response = await videoApi.getVideos(nameRequest, sizeRequest);
        if(response.status == 200){
            dispatch(setVideos(response.data.items, nameRequest, response.data.pageInfo.totalResults));
        }
    }
}


export const editTypeViewVideo = () => {
    return (dispatch) => {
        dispatch(editType());
    }
}

export default youtubeReducer;