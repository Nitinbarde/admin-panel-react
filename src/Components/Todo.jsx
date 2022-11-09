import React, { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [inputList, setInputList] = useState();
  const [item, setItem] = useState([]);

  const inputEvent = (e) => {
    setInputList(e.target.value);
  };

  const addItem = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  const deletItem = (id) => {
    console.log("delelted");
    setItem((oldItem) => {
      return oldItem.filter((arrEl, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <h1>This is TodoList App</h1>
      <input
        type="text"
        placeholder="Enter the Item here"
        onChange={inputEvent}
        value={inputList}
      />
      <button onClick={addItem}>+</button>
      {/* <h4>{inputList}</h4> */}

      {item.map((itemVal, index) => {
        return (
          <TodoList
            test={itemVal}
            key={index}
            id={index}
            onSelect={deletItem}
          />
        );
      })}
    </>
  );
}

export default Todo;
