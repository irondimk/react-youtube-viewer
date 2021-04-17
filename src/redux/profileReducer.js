import { getUsers } from "../api/userApi";

const AUTH = 'profileReducer/AUTH';
const UNAUTH = 'profileReducer/UNAUTH';
const ADD_FAVORITES = 'profileReducer/ADD-FAVORITES';

let initialState = {
    isAuth: false,
    login: null,
    profileRequests: []
}

let profileReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH: {
            return {...state, login: action.login, isAuth: true}
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


const auth = (login) => {
    return {
       type: AUTH,
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
                dispatch(auth(response[key].login))
                localStorage.setItem("username", response[key].login)
            }
        }
    }
}

export const unAuthUser = () => {
    
    return (dispatch) => {
        debugger;
        dispatch(unauth());
        localStorage.removeItem("username");
    }
}

export default profileReducer;