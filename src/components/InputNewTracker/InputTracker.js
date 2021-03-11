import React, {useState} from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const InputTracker = (props) => {
    const [inputState, setInputState] = useState('')

    return (
        <div>
            <Input >Enter tracker name</Input>
            <Button>Go</Button>
        </div>
    )
}

export default InputTracker