import React, { useState } from "react";

import { Header } from "./components/Header/index"
import { List } from "./components/List/index"
import { Form } from "./components/Form/index"

import "./App.css"

export const App = () => {
  const [list, setList] = useState([{
    id: 0,
    description: 'No task',
    done: false
  }]);
  let [count, setCount] = useState(0);

  const handleToggle = (id) => {
    const listToggle = list.map(task => {
      return task.id === Number(id) ? { ...task, done: !task.done } : { ...task };
    })
    setList(listToggle);
  }

  const handleFilter = () => {
    let listFiltered = list.filter(task => {
      return !task.done;
    })

    if (listFiltered.length === 0)
      listFiltered = [{
        id: 0,
        description: 'No task',
        done: false
      }]

    setList(listFiltered);
  }

  const addTask = (newTask) => {
    if (list[0].description === 'No task') {
      list.pop();
    }

    const newList = [...list, { id: count, description: newTask, done: false }]
    setList(newList);
    setCount(++count);
  }

  return (
    <div>
      <Header />

      <List
        list={list}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />

      <Form addTask={addTask} />
    </div>
  );
}