import React, {Component} from "react";
import {connect} from "react-redux";
import TrackerList from "./TrackerList";
import {TogglePauseAction} from "../../redux/Actions";


class TrackerListContainer extends Component {

    render() {
        const {timers, TogglePauseAction} = this.props
        return <TrackerList TogglePauseAction={TogglePauseAction} timers={timers}/>
    }

}
const mapStateToProps = state => ({
        timers: state.Reducer1.timers
})

const mapDispatchToProps = {
    TogglePauseAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackerListContainer)