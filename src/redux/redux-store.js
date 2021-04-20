import {applyMiddleware, combineReducers, createStore} from "redux";
import {Reducer} from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
    Reducer
})
const persistedState =  localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

let store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

export default store