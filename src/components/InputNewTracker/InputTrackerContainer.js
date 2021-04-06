import React, {Component} from "react";
import {connect} from "react-redux";
import InputTracker from "./InputTracker";
import {CreateNewTimer} from "../../redux/Actions";




class InputTrackerContainer extends Component {


    render() {
        const {CreateNewTimer} = this.props
        return <InputTracker CreateNewTimer={CreateNewTimer} />
    }


}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    CreateNewTimer
}
export default connect(mapStateToProps, mapDispatchToProps)(InputTrackerContainer)