import React, { useState } from "react"
import "./Form.css"

const Form = ({ addTask }) => {

    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const desc = description.trim();
        if (desc.length > 0)
            addTask(desc);
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

export default Form;