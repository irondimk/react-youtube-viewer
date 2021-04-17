// import thunk from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import finalFormReducer from './finalFormDuck';
import youtubeReducer from './youtubeReducer';
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({youtube:youtubeReducer});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;