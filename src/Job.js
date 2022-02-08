import React, { useState } from "react";
import Form from "./Form";
import createString from "./helpers.js";
import './Job.css';

function Job() {
    const INITIAL_STATE = "Complete the form to discover your exciting new museum job!"
    const [message, setMessage] = useState(INITIAL_STATE);

    function updateMessage (formData) {
        const {first, middle, last, month, date } = formData;
        const newMessage = createString(first, middle, last, month, date);
        setMessage(newMessage);
    };
        
    return (
        <div>
            <p>{ message }</p>
            <Form updateMessage={updateMessage} />
        </div>
    )
}

export default Job;