import React from "react";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import "../project/TodoItem.css";

const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : " "}`}>
        {checked ? <BsCheckCircleFill /> : <BsCheckCircle />}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
