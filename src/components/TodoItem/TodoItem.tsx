import { FC, useState } from "react";
import deleteBtn from "../../assets/deleteBtn.svg";
import editBtn from "../../assets/editBtn.svg";
import TodoEdit from "../TodoEdit/TodoEdit";
import './itemTodo.css';

interface TodoItemProps {
  text: string;
  id: number;
  isComplite: boolean;
  deleteItem: (id: number) => void;
  change: (id: number) => void;
  editItem: (id: number, newText: string) => void;
}

 const TodoItem:FC<TodoItemProps> = ({ text, id, isComplite, deleteItem, change, editItem }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function handleEditStart() {
    setIsEditing(true);
  }

  function saveEdit(id: number, newText: string) {
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

export default TodoItem;
