import React, {Component} from "react";
import {connect} from "react-redux";
import InputTracker from "./InputTracker";



class InputTrackerContainer extends Component {


    render() {
        return <InputTracker/>
    }


}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(InputTrackerContainer)