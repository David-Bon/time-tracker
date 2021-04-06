import React, {useEffect, useState} from "react";
import moment from 'moment'
import Box from "@material-ui/core/Box";
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const TrackerItem = ({timerData, TogglePauseAction}) => {
    const [state, setState] = useState(0);
    const tick = () => {
        //Діапазон від 1 до 1000
        const nextSecond = 1000 - moment.now() % 1000;
        setState(moment.now() - timerData.startedTime)
        setTimeout(tick, nextSecond)
    }
    useEffect(() => {
            tick()
        return () => {
                clearTimeout(tick)
        }
    }, [])
    return (
        <Box
            direction="column-reverse"
        >
            <span>{timerData.name}</span>
            <span>{moment(state).format('HH:mm:ss')}</span>
            {timerData.paused ? <PlayCircleOutlineIcon fontSize="large"
                                                       onClick={() => TogglePauseAction(timerData.id)}> </PlayCircleOutlineIcon> :
                <PauseCircleOutlineIcon fontSize="large"
                                        onClick={() => TogglePauseAction(timerData.id)}> </PauseCircleOutlineIcon>}
        </Box>
    )
}

export default TrackerItem