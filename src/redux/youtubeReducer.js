import { videoApi } from "../api/videoApi";

const SET_VIDEOS = 'youtubeReducer/SET-VIDEOS';
const EDIT_VIEW_VIDEOS = 'youtubeReducer/EDIT-VIEW-VIDEOS';
const REMOVE_VIDEOS = 'REMOVE-VIDEOS';

let initialState = {
    videos: null,
    defaultCountResults: 12,
    isHaveVideos: false,
    valueLastRequest: null,
    isListShowVideo: true,
    orderList:[
        {title: "Без сортировки", parametr: "relevance"},
        {title: "По дате", parametr: "date"},
        {title: "По рейтингу", parametr: "rating"},
        {title: "По названию", parametr: "title"},
        {title: "По просмотрам", parametr: "viewCount"}
    ]
}

let youtubeReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_VIDEOS: {
            return {...state, valueLastRequest: action.nameRequest, isHaveVideos: true, videos: action.videos, countResults: action.countResults }
        }
        case EDIT_VIEW_VIDEOS: {
            return {...state, isListShowVideo: !state.isListShowVideo}
        }
        case REMOVE_VIDEOS: {
            return {...state, videos: null, isHaveVideos: false}
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


export const downloadSnippetVideo = (nameRequest, sizeRequest, orderType) => {
    return async (dispatch) => {
        let response = await videoApi.getVideos(nameRequest, sizeRequest, orderType);
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