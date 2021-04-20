import React, {useEffect, useState} from "react";
import moment from 'moment'
import Box from "@material-ui/core/Box";
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const TrackerItem = ({timerData, TogglePauseAction, MemorizeClockState}) => {
    const [state, setState] = useState({h: 0, m: 0, s: 0});
    const digitCheck = x => x <= 10
    let timerId
    const tick = () => {
        setState({...state, s: state.s + 1})
        MemorizeClockState(timerData.id, state)
    }
    const TogglePause = () => {
        TogglePauseAction(timerData.id)
        clearTimeout(timerId)
    }
    useEffect(() => {
        if(!timerData.paused){
            timerId = setTimeout(tick, 1000)
        }
        if (state.s === 60) {
            setState({...state, s: state.s = 0})
            setState({...state, m: state.m += 1})
        }
        if (state.m === 60) {
            setState({...state, m: state.m = 0})
            setState({...state, h: state.h += 1})
        }
    }, [state.s, timerData.paused])

    return (
        <Box
            direction="column-reverse"
        >
            <span>{timerData.name}</span>
            <span>{digitCheck(state.h) ? <span>0{timerData.clockVal.h}</span> : timerData.clockVal.h}:</span>
            <span>{digitCheck(state.m) ? <span>0{timerData.clockVal.m}</span> : timerData.clockVal.m}:</span>
            <span>{digitCheck(state.s) ? <span>0{timerData.clockVal.s}</span> : timerData.clockVal.s}</span>
            {timerData.paused ? <PlayCircleOutlineIcon fontSize="large"
                                                       onClick={() => TogglePause()}> </PlayCircleOutlineIcon> :
                <PauseCircleOutlineIcon fontSize="large"
                                        onClick={() => TogglePause()}> </PauseCircleOutlineIcon>}
        </Box>
    )
}

export default TrackerItem