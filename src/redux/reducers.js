import {TOGGLE_PAUSE} from "./Actions";

let initialState = {
    timers: [
        {id: 1, name: 'was', startedTime: 2, paused: false},
        {id: 2, name: 'sas', startedTime: 41, paused: true}
    ]
}


export const Reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PAUSE:
return {...state, timers: action.payload}
        default:
            return state
    }
}