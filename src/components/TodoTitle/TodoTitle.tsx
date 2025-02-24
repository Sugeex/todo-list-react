import { FC } from "react";
import "./title.css";

const TodoTitle: FC = () => {
  return (
    <div className="titleTodo">
      <h1>To-Do List</h1>
      <span>&#128210;</span>
    </div>
  );
};

export default TodoTitle;
