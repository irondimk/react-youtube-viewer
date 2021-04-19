import { getUsers } from "../api/userApi";

const AUTH = 'profileReducer/AUTH';
const UNAUTH = 'profileReducer/UNAUTH';
const ADD_FAVORITES = 'profileReducer/ADD-FAVORITES';
const LOAD_DONE = 'profileReducer/LOAD-DONE';
const REMOVE_VIDEOS = 'REMOVE-VIDEOS';
const EDIT_REQUEST = 'profileReducer/EDIT_REQUEST';
const FALSE_LAST_TRY_AUTH = "profileReducer/FALSE_LAST_TRY_AUTH";

let initialState = {
    isAuth: false,
    login: null,
    profileRequests: [],
    isLoadDone: false,
    isLastTryAuthFalse: false
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
            return {...state, profileRequest: state.profileRequests.push(action.requestItem)}
        }
        case LOAD_DONE: {
            return {...state, isLoadDone: true}
        }
        case EDIT_REQUEST: {
            let newRequests = state.profileRequests.map((elem)=>{
                if(elem.index == action.requestItem.index){
                    return action.requestItem;
                }
                else{
                    return elem;
                }
            })
            return {...state, profileRequests: newRequests};
        }
        case FALSE_LAST_TRY_AUTH: {
            return {...state, isLastTryAuthFalse: action.falseOrTrue}
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

const falseTryAuth = (falseOrTrue) =>{
    return{
        type: FALSE_LAST_TRY_AUTH,
        falseOrTrue
    }
}

const unauth = () => {
    return {
        type: UNAUTH
    }
}

const editRequest = (index, request, name, orderType, viewCount) => {
    return{
        type: EDIT_REQUEST,
        requestItem: {
            index, request, name, orderType, countViews: viewCount
        }
    }
}

const addFavorites = (index, request, name, orderType, countViews) => {
    return {
        type: ADD_FAVORITES,
        requestItem: {index, request, name, orderType, countViews}
    }
}

const clearVideos = () => {
    return {
        type: REMOVE_VIDEOS
    }
}

const doneLoad = () => {
    return {
        type: LOAD_DONE
    }
}

export const editRequestUser = (request, name, orderType, countViews, index, login) => {
    
    return (dispatch) => {
        dispatch(editRequest(index, request, name, orderType, countViews));
        for(let key in localStorage){
            if(((key).split("-")[2] == index) && ((key).split("-")[0] == login)){
                localStorage.removeItem(key);
            }
        }
        localStorage.setItem(login + "-url-" +  index + "-" + name + "-" + orderType + "-" + countViews, request)
        
    }
}

export const addNewFavoritesRequest = (request, name, orderType, countViews, index, login) => {
    return (dispatch) => {
        dispatch(addFavorites(index + 1, request, name, orderType, countViews));
        localStorage.setItem(login + "-url-" + (index+1) + "-" + name + "-" + orderType + "-" + countViews, request);
    }
}


const getRequestsFromLocalStorage = (username) => {
    let arrRequests = [];
    for(let keyLS in localStorage){
       if((keyLS).split("-")[0] == username){
           let arrParametrs = (keyLS).split("-");
        arrRequests.push({
            index: arrParametrs[2],
            request: localStorage[keyLS],
            name: arrParametrs[3],
            orderType: arrParametrs[4],
            countViews: arrParametrs[5]
        });
       }
    }
    return arrRequests;
}

export const authUser = (name, password) => {
    return (dispatch) => {
        let response = getUsers();
        for(let key in response){
            if((response[key].login == name) && (response[key].password == password)){
                localStorage.setItem("username", response[key].login);
                let arrRequests = getRequestsFromLocalStorage(response[key].login);
                dispatch(auth(response[key].login, arrRequests));
                return 1;
            }     
        }
        dispatch(falseTryAuth(true));
    }
}


export const unAuthUser = () => {
    return (dispatch) => {
        dispatch(unauth());
        localStorage.removeItem("username");
        dispatch(clearVideos());
        dispatch(falseTryAuth(false));
    }
}


export const load = () => {
    return (dispatch) => {
        if(localStorage.username){
            let arrRequests = getRequestsFromLocalStorage(localStorage.username);
                dispatch(auth(localStorage.username, arrRequests));
        }
        dispatch(doneLoad());
    }
}


export default profileReducer;