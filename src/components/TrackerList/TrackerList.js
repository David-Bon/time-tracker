import TrackerItem from "../TrackerItem/TrackerItem";
import React from "react";
import {Grid} from "@material-ui/core";

const TrackerList = ({timers, TogglePauseAction, MemorizeClockState}) => {
    return (
        <Grid
            container item
            justify="center"
            alignItems="center"
            direction="column-reverse"
        >
            {
                timers.map((item) => {
                    return <TrackerItem TogglePauseAction={TogglePauseAction} MemorizeClockState={MemorizeClockState} timerData={item}/>
                })
            }
        </Grid>
    )
}

export default TrackerList