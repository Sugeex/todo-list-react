import { useState, useRef, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoPlaceholder from "./TodoPlaceholder/TodoPlaceholder";

export default function TodoForm() {
  const inputV = useRef();
  const [showList, setShowList] = useState(
    localStorage.getItem("listItem")
      ? JSON.parse(localStorage.getItem("listItem"))
      : []
  );
  console.log(showList);
  const [formClass, setFormClass] = useState("inputTodo");

  const handleKeyDown  = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick();
    }
  };

  function handleClick() {
    const inputText = inputV.current.value.trim();

    if (inputText === "") {
      setFormClass("inputTodo red");
      return null;
    }

    const newTodoList = {
      id: Date.now(),
      text: inputText,
      isComplite: false,
    };
    setShowList((prev) => [...prev, newTodoList]);
    inputV.current.value = "";
    setFormClass("inputTodo");
  }
  function deleteItem(id) {
    setShowList((prevItem) => {
      return prevItem.filter((list) => list.id !== id);
    });
  }

  function change(id) {
    setShowList((prevItem) => {
      return prevItem.map((list) => {
        if (list.id === id) {
          return { ...list, isComplite: !list.isComplite };
        }
        return list;
      });
    });
  }

  function editItem(id, newText) {
    setShowList((prevItem) => {
      return prevItem.map((list) => {
        if (list.id === id) {
          return { ...list, text: newText };
        }
        return list;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("listItem", JSON.stringify(showList));
  }, [showList]);

  return (
    <>
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
      {showList.length === 0 ? (
        <TodoPlaceholder />
      ) : (
        <div className="todoList">
          {showList.map((item) => {
            return (
              <TodoItem
                text={item.text}
                id={item.id}
                isComplite={item.isComplite}
                deleteItem={deleteItem}
                change={change}
                editItem={editItem}
                key={item.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
