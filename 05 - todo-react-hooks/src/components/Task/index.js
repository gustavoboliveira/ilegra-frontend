import React from "react";
import './index.css'

export const Task = ({ task, handleToggle }) => {

    const handleClick = (event) => {
        event.preventDefault();
        handleToggle(event.target.id);
    }

    return (
        <div>
            <button
                id={task.id}
                onClick={handleClick}
                className={task.done ? "task done" : "task"}
            >
                {task.description}
            </button>
        </div>
    );
}