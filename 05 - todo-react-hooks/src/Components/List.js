import React from "react";
import Task from "./Task"
import "./List.css"

const List = ({ list, handleToggle, handleFilter }) => {
    return (
        <div>
            {list.map(task => {
                return (
                    <Task
                        key={task.id + task.description}
                        task={task}
                        handleToggle={handleToggle}
                    />
                );
            })}
            <button onClick={handleFilter}><strong>Clear Tasks</strong></button>
        </div>
    );

}

export default List;