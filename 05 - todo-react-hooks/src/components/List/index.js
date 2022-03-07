import React from "react";
import { Task } from "../Task/index"
import "./index.css"

export const List = (props) => {
    return (
        <div>
            {props.list.map(task => {
                return (
                    <Task
                        key={task.id + task.description}
                        task={task}
                        handleToggle={props.handleToggle}
                    />
                );
            })}
            <button onClick={props.handleFilter}><strong>Clear Tasks</strong></button>
        </div>
    );
}