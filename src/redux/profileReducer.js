import { getUsers } from "../api/userApi";

const AUTH = 'profileReducer/AUTH';
const UNAUTH = 'profileReducer/UNAUTH';
const ADD_FAVORITES = 'profileReducer/ADD-FAVORITES';
const ADD_REQUESTS = 'profileReducer/ADD-REQUESTS';

let initialState = {
    isAuth: false,
    login: null,
    profileRequests: []
}

let profileReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH: {
            
            return {...state, login: action.login, isAuth: true, profileRequests: action.arrRequests}
        } 
        case UNAUTH: {
            return {...state, login: null, isAuth: false, profileRequest: null}
        }
        case ADD_FAVORITES: {
            return {...state, profileRequest: state.profileRequests.push(action.request)}
        }
    }
    return state;
}


const auth = (login, arrRequests) => {
    return {
       type: AUTH,
       arrRequests,
       login
    }
}

const unauth = () => {
    return {
        type: UNAUTH
    }
}

const addFavorites = (request) => {
    return {
        type: ADD_FAVORITES,
        request
    }
}




export const addNewFavoritesRequest = (request, login, index) => {
    return (dispatch) => {
        dispatch(addFavorites(request));
        debugger;
        localStorage.setItem(login + "-url-" + (index+1), request);
    }
}

export const authUser = (name, password) => {
    return (dispatch) => {
        let response = getUsers();
        for(let key in response){
            if((response[key].login == name) && (response[key].password == password)){
                localStorage.setItem("username", response[key].login);
                let arrRequests = [];
                for(let keyLS in localStorage){
                   if((keyLS).split("-")[0] == name){
                    arrRequests.push(localStorage[keyLS]);
                   }
                }
                dispatch(auth(response[key].login, arrRequests));
            }
        }
    }
}

export const loadApp = () => {
    return (dispatch) => {

    }
}
const REMOVE_VIDEOS = 'REMOVE-VIDEOS';

const clearVideos = () => {
    return {
        type: REMOVE_VIDEOS
    }
}

export const unAuthUser = () => {
    
    return (dispatch) => {
        dispatch(unauth());
        localStorage.removeItem("username");
        dispatch(clearVideos());
    }
}

export default profileReducer;