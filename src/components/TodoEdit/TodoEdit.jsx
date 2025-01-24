import { useState } from "react"
import "./edit.css"

export default function TodoEdit({ text, id, onSave }) {
  const [editingText, setEditingText] = useState(text);

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
}