export const TOGGLE_PAUSE = "TOGGLE_PAUSE"
export const NEW_TIMER = "NEW_TIMER"
export const MEMORIZE_CLOCK_STATE = "MEMORIZE_CLOCK_STATE"
export const TogglePauseAction = id => ({
    type: TOGGLE_PAUSE,
    id
})

export const MemorizeClockState = (id, payload) => ({
    type: MEMORIZE_CLOCK_STATE,
    id,
    payload
})

const NewTimerAction = payload => ({
    type: NEW_TIMER,
    payload

})

export const CreateNewTimer = (payload) => (dispatch, getState) => {
    let newId = getState().Reducer.timers.length+1
let newTimer = {id: newId, name: payload, clockVal: {h: 0, m: 0, s: 0}, paused: false}
dispatch(NewTimerAction(newTimer))
}