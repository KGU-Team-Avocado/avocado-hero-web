import React from "react";
import "../project/Todo.css";
import Form from "react-bootstrap/Form";

const TodoCreate = ({ onCreate }) => {
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      onCreate(e.target.value);
    }
  };

  return (
    <div className="TodoCreate">
      <Form.Control
        type="text"
        placeholder="할 일 추가"
        onKeyPress={onCheckEnter}
      />
    </div>
  );
};

export default TodoCreate;
