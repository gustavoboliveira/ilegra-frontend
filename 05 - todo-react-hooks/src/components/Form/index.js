import React, { useState } from "react"
import "./index.css"

export const Form = (props) => {

    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const desc = description.trim();
        if (desc.length > 0)
            props.addTask(desc);
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                data-testid="input-add-task"
                type="text"
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder="Enter your task"
            />
            <button type="submit"><strong>Add Task</strong></button>
        </form>
    );
}