import React, { useRef } from "react";
import "./Todo.css";
import Form from "react-bootstrap/Form";
import { TextField } from "@mui/material";

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
      <TextField
        focused
        fullWidth
        label="할 일 추가"
        color="secondary"
        defaultValue={""}
        inputRef={todoInput}
        onKeyPress={onCheckEnter}
      />
    </div>
  );
};

export default TodoCreate;
