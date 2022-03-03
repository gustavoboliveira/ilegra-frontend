import React, { useState } from "react";

import Header from "./Components/Header"
import List from "./Components/List"
import Form from "./Components/Form"

import "./App.css"

function App() {
  const [list, setList] = useState([{
    id: 0,
    description: 'No task',
    done: false
  }]);
  const [count, setCount] = useState(0);

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
    const incCount = count+1;
    setList(newList);
    setCount(incCount)
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

export default App;