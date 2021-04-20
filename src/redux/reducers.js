import {MEMORIZE_CLOCK_STATE, NEW_TIMER, TOGGLE_PAUSE} from "./Actions";

let initialState = {
    timers: []
}


export const Reducer = (state = initialState, action) => {
    console.log(state.timers)
    const SelectAnItem = (id, propName, propVal) => {
        const idx = state.timers.findIndex(item => item.id === id)
        const selectedItem = state.timers[idx]
      if(propVal==='paused'){
          propVal=!selectedItem[`${propVal}`]
      }
        const newItem = {...selectedItem, [`${propName}`]: propVal};
        return [...state.timers.slice(0, idx), newItem, ...state.timers.slice(idx + 1)]
    }
    switch (action.type) {
        case NEW_TIMER:
            return {...state, timers: [...state.timers, action.payload]}
        case TOGGLE_PAUSE:
            return {...state, timers: SelectAnItem(action.id, 'paused', 'paused')}
        case MEMORIZE_CLOCK_STATE:
            return {...state, timers: SelectAnItem(action.id, 'clockVal', action.payload)}
        default:
            return state
    }
}