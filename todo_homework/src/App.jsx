import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import Tab from "./components/Tab";

const App = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8000/fake/todo";
      const result = await fetch(url);
      const data = await result.json();
      setData(data.data);
    };

    fetchData();
  }, []);

  const filterTodoItem = (arr) => {
    if (filter === "default") {
      return arr;
    }

    if (filter === "inProgress") {
      return arr.filter((item) => {
        return item.completed === false;
      });
    }

    if (filter === "completed") {
      return arr.filter((item) => {
        return item.completed === true;
      });
    }
  };

  const onTodoItemComplete = (e, id) => {
    const objIndex = data.findIndex((item) => item.id === id);
    const newData = [...data];
    const updatedData = {
      ...data[objIndex],
      completed: !data[objIndex].completed,
    };

    Object.assign(newData[objIndex], updatedData);
    setData(newData);
  };

  const onTodoItemDelete = (e, id) => {
    const objIndex = data.findIndex((item) => item.id === id);
    const newData = [...data];
    newData.splice(objIndex, 1);
    setData(newData);
  };

  const onClickAddTodoItem = () => {
    setData([
      ...data,
      {
        id: data[data.length - 1].id + 1,
        todo: text,
        completed: false,
      },
    ]);

    setText("");
  };

  return (
    <div className="container">
      <section className="section">
        <h1 className="is-size-1 has-text-centered has-text-black mb-2">
          Todo List
        </h1>
        <div className="field is-grouped mb-6">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="your todo"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </p>
          <p className="control">
            <button className="button is-primary" onClick={onClickAddTodoItem}>
              add todo
            </button>
          </p>
        </div>

        <Tab filter={filter} setFilter={setFilter} />

        {filterTodoItem(data).map((item) => {
          return (
            <TodoItem
              key={item.id}
              todo={item}
              onTodoItemComplete={onTodoItemComplete}
              onTodoItemDelete={onTodoItemDelete}
              id={item.id}
            />
          );
        })}

        <div className="box">
          <div className="level">
            <div className="level-left">
              <p className="is-size-4 has-text-black">sample todo</p>
            </div>
            <div className="level-right buttons">
              <button className="button is-warning">in progress</button>
              <button className="button is-success">complete</button>
              <button className="button is-danger">delete</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
