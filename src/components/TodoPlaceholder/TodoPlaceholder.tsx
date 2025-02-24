import { FC } from "react";
import "./placeholder.css";

const TodoPlaceholder: FC = () => {
  return (
    <div className="placeholderTodo">
      <span>You don't have any tasks!</span>
    </div>
  );
};

export default TodoPlaceholder;
