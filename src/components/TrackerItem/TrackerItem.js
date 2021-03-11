import React from "react";
import Box from "@material-ui/core/Box";
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const TrackerItem = (props) => {
    return (
        <Box
            direction="column-reverse"
        >
            <span>{props.timerData.name}</span>
            <span>{props.timerData.startedTime}</span>
            {props.timerData.paused ? <PlayCircleOutlineIcon fontSize="medium" onClick={() => console.log("Play")}> </PlayCircleOutlineIcon> : <PauseCircleOutlineIcon fontSize="medium" onClick={() => console.log("Pause")}> </PauseCircleOutlineIcon>}
        </Box>
    )
}

export default TrackerItem