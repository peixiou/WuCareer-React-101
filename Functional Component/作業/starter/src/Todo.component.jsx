const Todo = ({ item }) => {
  return (
    <>
      <div className="box level" key={item.id} id={item.id}>
        <div className="level-left">
          <h3 className="title is-5 todo-title">{item.title}</h3>
        </div>
        <div className="level-right buttons">
          <button className="button is-success" disabled={item.completed}>
            complete
          </button>
          <button className="button is-danger">remove</button>
        </div>
      </div>
    </>
  );
};
export default Todo;
