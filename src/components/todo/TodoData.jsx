const TodoData = (props) => {
  const { todoList } = props;
  console.log("check", todoList);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="todo-item" key={item.id}>
            <div>{item.name}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
