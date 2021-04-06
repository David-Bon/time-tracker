import moment from 'moment'
export const TOGGLE_PAUSE = "TOGGLE_PAUSE"
export const NEW_TIMER = "NEW_TIMER"
export const TIMER_TICK = "TIMER_TICK"
export const TogglePauseAction = payload => ({
    type: TOGGLE_PAUSE,
    payload
})

const NewTimerAction = payload => ({
    type: NEW_TIMER,
    payload

})

// const Tick = (timerId) => ({type: TIMER_TICK, timerId})

export const CreateNewTimer = (payload) => (dispatch, getState) => {
    let newId = getState().Reducer1.timers.length+1
let newTimer = {id: newId, name: payload, startedTime: moment().valueOf(), paused: false}
dispatch(NewTimerAction(newTimer))
}

// const TickCreator = () => (dispatch, getState) => {
//     let timersList = getState().Reducer1.timers
//     let second = setInterval(function() {
//         startTimestamp.add(1, 'second');
//         return startTimestamp.format('HH:mm:ss');
//     }, 1000);
//
// }