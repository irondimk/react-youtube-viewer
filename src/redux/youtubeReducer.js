import { videoApi } from "../api/videoApi";

export const SET_VIDEOS = 'youtubeReducer/SET-VIDEOS';
const SET = 'youtubeReducer/SET';

let initialState = {
    videos: null,
    requestsListCount: 12,
    isHaveVideos: false,
    isListVisionVideo: true,
    typesSorting: null,
    valueLastRequest: null,
    countResults: 0
}

let youtubeReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_VIDEOS: {
            return {...state, valueLastRequest: action.nameRequest, isHaveVideos: true, videos: action.videos, countResults: action.countResults }
        }
        case SET: {
            return {...state, isHaveVideos: true}
        }
    }
    return state;
}

const setHaveVide = () => {
    return {
        type: SET
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


export const test = () => {
    return (dispatch) => {
        dispatch(setHaveVide());
    }
}

export default youtubeReducer;