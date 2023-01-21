import { useEffect, useState } from "react";
import Todo from "./Todo.component";
import Loader from "./Loader.component";

const App = () => {
  const url = "https://wucareer-mock-backend-staging.onrender.com/mock/todo";
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const fetchTodo = async () => {
    setIsLoading(true);
    const resp = await fetch(url);
    const data = await resp.json();
    setTodo(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const hadnleOnSubmit = (e) => {
    e.preventDefault();

    if (input.trim().length === 0) {
      alert("input must not be empty");
      return;
    }

    setTodo([
      ...todo,
      { id: new Date().getTime().toString(), title: input, status: false },
    ]);
    setInput("");
  };

  const handleOnClickDeleteItem = (e) => {
    const id = e.target.parentNode.parentNode.id;
    setTodo(
      todo.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handleOnClickChangeItemCompletedStatus = (e) => {
    const id = e.target.parentNode.parentNode.id;

    console.log(id);
    console.log(todo);

    const newTodo = todo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }

      return item;
    });
    setTodo(newTodo);
  };

  return (
    <div className="container is-fluid has-text-centered">
      <h1 className="title is-1">React To Do List</h1>
      <form className="field is-grouped" action="" onSubmit={hadnleOnSubmit}>
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            name="todo"
            id="todo"
            placeholder="drink water"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="control">
          <input className="button is-info" type="submit" value="add todo" />
        </div>
      </form>

      <div>
        {isLoading ? (
          <Loader />
        ) : (
          todo.map((item) => {
            return (
              <Todo
                item={item}
                handleOnClickChangeItemCompletedStatus={
                  handleOnClickChangeItemCompletedStatus
                }
                handleOnClickDeleteItem={handleOnClickDeleteItem}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
