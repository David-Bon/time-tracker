import React, {Component} from "react";
import {connect} from "react-redux";
import TrackerList from "./TrackerList";
import {MemorizeClockState, TogglePauseAction} from "../../redux/Actions";


class TrackerListContainer extends Component {

    render() {
        const {timers, TogglePauseAction, MemorizeClockState} = this.props
        return <TrackerList TogglePauseAction={TogglePauseAction} MemorizeClockState={MemorizeClockState} timers={timers}/>
    }

}
const mapStateToProps = state => ({
        timers: state.Reducer.timers
})

const mapDispatchToProps = {
    TogglePauseAction, MemorizeClockState
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackerListContainer)