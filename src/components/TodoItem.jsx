import { useState } from "react";
import deleteBtn from "../assets/deleteBtn.svg";

export default function TodoItem({ text, id, isComplite, deleteItem, change }) {
  return (
    <div className="itemList">
      <label className={`${isComplite ? "lineThrough" : ""}`}>
        <input
          className="checkTodo"
          type="checkbox"
          checked={isComplite}
          onChange={() => change(id)}
        />
        {text}
      </label>
      <img onClick={() => deleteItem(id)} src={deleteBtn} alt="delete" />
    </div>
  );
}
