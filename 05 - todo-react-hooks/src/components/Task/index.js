import React from "react";
import './index.css'

export const Task = (props) => {

    const handleClick = (event) => {
        event.preventDefault();
        props.handleToggle(event.target.id);
    }

    return (
        <div>
            <button
                id={props.task.id}
                onClick={handleClick}
                className={props.task.done ? "task done" : "task"}
            >
                {props.task.description}
            </button>
        </div>
    );
}