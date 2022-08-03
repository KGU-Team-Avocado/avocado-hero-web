import React, { useState, useRef } from "react";
import "../project/Todo.css";
import Form from "react-bootstrap/Form";
import ReactDOM from "react-dom";

const TodoCreate = ({ onCreate }) => {
  const todoInput = useRef();

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length < 1) {
        todoInput.current.focus();
        return;
      }
      console.log(e.target.value);
      onCreate(e.target.value);
      todoInput.current.value = "";
    }
  };

  return (
    <div className="TodoCreate">
      <Form.Control
        ref={todoInput}
        type="text"
        placeholder="할 일 추가"
        onKeyPress={onCheckEnter}
      />
    </div>
  );
};

export default TodoCreate;
