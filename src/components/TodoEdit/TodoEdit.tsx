import { FC, useState } from "react";
import "./edit.css";

interface TodoEditProps {
  text: string;
  id: number;
  onSave: (id: number, newText: string) => void;
}

const TodoEdit: FC<TodoEditProps> = ({ text, id, onSave }) => {
  const [editingText, setEditingText] = useState<string>(text);

  function handleSave() {
    const trimText = editingText.trim();
    if (trimText !== "") {
      onSave(id, trimText);
    }
  }

  return (
    <>
      <input
        className="editInput"
        type="text"
        value={editingText}
        onChange={(e) => setEditingText(e.target.value)}
        placeholder="Update task"
        autoFocus
      />
      <button className="btnSave" onClick={handleSave}>
        Update Task
      </button>
    </>
  );
};

export default TodoEdit;
