import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("name");
  const { addNewTodo } = props;
  // addNewTodo();
  const handleClick = () => {
    addNewTodo(valueInput);
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button onClick={handleClick}>Add</button>
      <div>Text input = {valueInput} </div>
    </div>
  );
};

export default TodoNew;
