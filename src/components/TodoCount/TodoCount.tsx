import { FC } from "react";
import "./TodoCount.css";

interface TodoItem {
  isComplite: boolean;
}

interface TodoCountProps {
  counter: TodoItem[];
}

const TodoCount: FC<TodoCountProps> = ({ counter }) => {
  const complit: number = counter.filter(
    (el: TodoItem) => el.isComplite === true
  ).length;
  return (
    <div className="counterCont">
      <div className="amountT">
        <span>Tasks </span>
        <span className="amountNumber">{counter.length}</span>
      </div>
      <div className="amountT">
        <span>Done </span>
        <span className="amountNumber">
          {complit} of {counter.length}
        </span>
      </div>
    </div>
  );
};

export default TodoCount;
