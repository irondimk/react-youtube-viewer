// import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import finalFormReducer from './finalFormDuck';
import profileReducer from "./profileReducer";
import youtubeReducer from './youtubeReducer';
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({youtube:youtubeReducer, profile: profileReducer, forms: finalFormReducer});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;