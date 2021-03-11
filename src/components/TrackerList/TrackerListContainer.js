import React, {Component} from "react";
import {connect} from "react-redux";
import TrackerList from "./TrackerList";


class TrackerListContainer extends Component {

    render() {
        const {timers} = this.props
        return <TrackerList timers={timers}/>
    }

}
debugger
const mapStateToProps = state => ({
        timers: state.Reducer1.timers
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TrackerListContainer)