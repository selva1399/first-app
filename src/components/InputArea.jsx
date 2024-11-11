import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function InputArea() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");

    event.preventDefault();
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
}

  return (
    <>
      <form className="row g-3 mt-3 ms-2">
        <div className="col-auto">
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder="Enter here"
            value={inputText}
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            onClick={addItem}
            className="btn border-dark"
            style={{
              backgroundColor: isMouseOver ? "rgb(253, 139, 81)" : "white",
            }}
            onMouseOver={() => {
              setMouseOver(true);
            }}
            onMouseOut={() => {
              setMouseOver(false);
            }}
          >
            Add
          </button>
        </div>
      </form>
      <div className="row mt-4 ms-3 me-3 text-start">
        <div className="col-auto">
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default InputArea;
