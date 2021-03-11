import TrackerItem from "../TrackerItem/TrackerItem";
import React from "react";
import {Grid} from "@material-ui/core";

const TrackerList = (props) => {
    return (
        <Grid
            container item
            justify="center"
            alignItems="center"
            direction="column-reverse"
        >
            {
                props.timers.map((item) => {
                    debugger
return <TrackerItem timerData={item}/>
                })
            }
        </Grid>
    )
}

export default TrackerList