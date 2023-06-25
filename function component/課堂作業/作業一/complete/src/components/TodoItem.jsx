import React from "react";
import "./todo.css";

const TodoItem = ({ todo, onTodoItemComplete, id, onTodoItemDelete }) => {
  const addLineThru = () => {
    return todo.completed
      ? { textDecoration: "line-through" }
      : { textDecoration: "initial" };
  };

  return (
    <div className="box">
      <div className="level">
        <div className="level-left">
          <p className="is-size-4 has-text-black" style={addLineThru()}>
            {todo.todo}
          </p>
        </div>
        <div className="level-right buttons">
          <button
            className="button is-warning"
            disabled={!todo.completed}
            onClick={(e) => onTodoItemComplete(e, id)}
          >
            in progress
          </button>
          <button
            className="button is-success"
            disabled={todo.completed}
            onClick={(e) => onTodoItemComplete(e, id)}
          >
            complete
          </button>
          <button
            className="button is-danger"
            onClick={(e) => onTodoItemDelete(e, id)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
