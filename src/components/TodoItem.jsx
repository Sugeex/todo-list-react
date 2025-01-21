import { useState } from "react";
import deleteBtn from "../assets/deleteBtn.svg";
import editBtn from "../assets/editBtn.svg";
import TodoEdit from "./TodoEdit";

export default function TodoItem({ text, id, isComplite, deleteItem, change, editItem }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditStart() {
    setIsEditing(true);
  }

  function saveEdit(id, newText) {
    editItem(id, newText);
    setIsEditing(false);
  }

  return (
    <div className="itemList">
      {isEditing ? (
        <TodoEdit text={text} id={id} onSave={saveEdit} />
      ) : (
        <>
          <label className={`${isComplite ? "lineThrough" : ""}`}>
            <input
              className="checkTodo"
              type="checkbox"
              checked={isComplite}
              onChange={() => change(id)}
            />
            {text}
          </label>
          <div className="btnsTodo">
            <img onClick={handleEditStart} src={editBtn} alt="edit" />
            <img onClick={() => deleteItem(id)} src={deleteBtn} alt="delete" />
          </div>
        </>
      )}
    </div>
  );
}
