import "./input.css"
import { FC, RefObject } from "react";

interface TodoInputProps {
  formClass: string;
  inputV: RefObject<HTMLInputElement>;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

 const TodoInput:FC<TodoInputProps> = ({formClass, inputV, handleKeyDown, handleClick}) => {
  return (
    <form className="formTodo">
      <input
        className={formClass}
        ref={inputV}
        type="text"
        placeholder="Type your task"
        onKeyDown={handleKeyDown}
      />
      <button className="btnTodo" type="button" onClick={handleClick}>
        ADD
      </button>
    </form>
  );
}

export default TodoInput;
