import {NEW_TIMER, TOGGLE_PAUSE} from "./Actions";

let initialState = {
    timers: []
}


export const Reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case NEW_TIMER:
            return {...state, timers: [...state.timers, action.payload]}
        case TOGGLE_PAUSE:
            const id = action.payload
            const idx = state.timers.findIndex(item => item.id === id)
            const selectedItem = state.timers[idx]
            const newItem = {...selectedItem, paused: !selectedItem['paused']};
            const newArray = [...state.timers.slice(0, idx), newItem, ...state.timers.slice(idx + 1)]
            return {...state, timers: newArray}
        default:
            return state
    }
}