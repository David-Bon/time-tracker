import React, {useState} from "react";
import Input from "@material-ui/core/Input";

const InputTracker = ({CreateNewTimer}) => {
    const [inputState, setInputState] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!inputState) {
            return null
        }
        CreateNewTimer(inputState)
        setInputState('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input value={inputState} onChange={event => setInputState(event.target.value)}> </Input>
        </form>
    )
}

export default InputTracker