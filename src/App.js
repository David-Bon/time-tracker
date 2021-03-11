import React from "react";
import Grid from "@material-ui/core/Grid";
import TrackerListContainer from "./components/TrackerList/TrackerListContainer";
import InputTrackerContainer from "./components/InputNewTracker/InputTrackerContainer";

function App() {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
        >
            <InputTrackerContainer/>
            <TrackerListContainer/>
        </Grid>
    );
}

export default App;
