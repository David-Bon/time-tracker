import {applyMiddleware, combineReducers, createStore} from "redux";
import {Reducer1} from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
    Reducer1
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store