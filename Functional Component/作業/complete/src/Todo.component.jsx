const Todo = ({
  item,
  handleOnClickChangeItemCompletedStatus,
  handleOnClickDeleteItem,
}) => {
  return (
    <>
      <div className="box level" key={item.id} id={item.id}>
        <div className="level-left">
          <h3 className="title is-5 todo-title">{item.title}</h3>
        </div>
        <div className="level-right buttons">
          <button
            className="button is-success"
            disabled={item.completed}
            onClick={handleOnClickChangeItemCompletedStatus}
          >
            complete
          </button>
          <button
            className="button is-danger"
            onClick={handleOnClickDeleteItem}
          >
            remove
          </button>
        </div>
      </div>
    </>
  );
};
export default Todo;
