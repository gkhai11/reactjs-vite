const TodoNew = (props) => {
  const { addNewTodo } = props;
  // addNewTodo();
  const handleClick = () => {
    alert("hello");
  };
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="todo-new">
      <input type="text" onChange={handleOnChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default TodoNew;
