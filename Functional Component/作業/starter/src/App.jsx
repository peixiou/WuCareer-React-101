import Todo from "./Todo.component";
import Loader from "./Loader.component";

const App = () => {
  const url = "https://wucareer-mock-backend-staging.onrender.com/mock/todo";

  return (
    <div className="container is-fluid has-text-centered">
      <h1 className="title is-1">React To Do List</h1>
      <form className="field is-grouped" action="">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            name="todo"
            id="todo"
            placeholder="drink water"
          />
        </div>
        <div className="control">
          <input className="button is-info" type="submit" value="add todo" />
        </div>
      </form>

      <div>
        <Loader />
        <Todo item={{ id: "1", title: "test item 1", completed: true }} />
        <Todo item={{ id: "2", title: "test item 2", completed: false }} />
      </div>
    </div>
  );
};

export default App;
