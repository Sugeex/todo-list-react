import { useState, useRef} from "react";
import TodoItem from "./TodoItem/TodoItem";
import TodoPlaceholder from "./TodoPlaceholder/TodoPlaceholder";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoInput from "./TodoInput/TodoInput";
import TodoCount from "./TodoCount/TodoCount";

export default function TodoForm() {
  const inputV = useRef();
  const [showList, setShowList] = useLocalStorage("listItem", []);
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

  return (
    <>
      <TodoInput
        formClass={formClass}
        inputV={inputV}
        handleKeyDown={handleKeyDown}
        handleClick={handleClick}
      />
      {showList.length === 0 ? (
        <TodoPlaceholder />
      ) : (
        <>
        <TodoCount counter={showList} />
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
        </>
      )}
    </>
  );
}
