import { useState, useRef, useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoForm(){
    const inputV = useRef();
    const [showList, setShowList] = useState([]);

    function handleClick(){
        const inputText = inputV.current.value.trim();
        console.log(inputText);

        if (inputText === "") {
          return null;
        }

        const newTodoList = {
          id: Date.now(),
          text: inputText,
          isComplite: false,
        };
        setShowList((prev) => [...prev, newTodoList]);
        inputV.current.value = "";
    };
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

    return (
      <>
        <form className="formTodo">
          <input
            className="inputTodo"
            ref={inputV}
            type="text"
            placeholder="Type something"
          />
          <button className="btnTodo" type="button" onClick={handleClick}>
            Add
          </button>
        </form>
        <div className="todoList">
          {showList.map((item, index) => {
            return (
              <TodoItem
                text={item.text}
                id={item.id}
                isComplite={item.isComplite}
                deleteItem={deleteItem}
                change={change}
                key={item.id}
              />
            );
          })}
        </div>
      </>
    );
}