import "./input.css"

export default function TodoInput({formClass, inputV, handleKeyDown, handleClick}) {
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
