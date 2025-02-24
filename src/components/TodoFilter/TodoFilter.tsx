import { FC } from "react";
import "./TodoFilter.css";

interface TodoFilterProps {
  filter: "all" | "active" | "done";
  setFilter: (filter: "all" | "active" | "done") => void;
}

const TodoFilter: FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="filterCont">
      <div className="filterBtns">
        <button
          className={filter === "all" ? "filterBtn currentFilter" : "filterBtn"}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={
            filter === "active" ? "filterBtn currentFilter" : "filterBtn"
          }
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={
            filter === "done" ? "filterBtn currentFilter" : "filterBtn"
          }
          onClick={() => setFilter("done")}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
