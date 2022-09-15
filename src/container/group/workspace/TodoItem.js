import axios from "axios";
import React, { useCallback, useState } from "react";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import "../workspace/Todo.css";

const TodoItem = ({ todo, onDelete }) => {
  const { _id, project_id, todo_text, todo_isChecked } = todo;

  //handleCheck에서 todo의 checked를 변경 후 재렌더링해주기 위해 사용
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}, []));

  const handleCheck = () => {
    if (todo.todo_isChecked) {
      todo.todo_isChecked = false;
      //isChecked 수정
      axios
      .post("/todosRouter/updateIsChecked", {
        _id : todo._id,
        todo_isChecked : todo.todo_isChecked,
      })
    } else {
      todo.todo_isChecked = true;
      //isChecked 수정
      axios
      .post("/todosRouter/updateIsChecked", {
        _id : todo._id,
        todo_isChecked : todo.todo_isChecked,
      })
    }
    console.log(todo.todo_isChecked);
    forceUpdate();
  };

  return (
    <div className="TodoItem">
      <div onClick={handleCheck}>
        <div className={`content ${todo_isChecked ? "checked" : " "}`}>
          {todo_isChecked ? <BsCheckCircleFill /> : <BsCheckCircle />}
          <div className="text">{todo_text}</div>
        </div>
      </div>
      <div className="TodoItemButton">
        <button type="button" class="btn btn-secondary me-2">
          수정
        </button>
        <button
          type="button"
          class="btn btn-secondary me-2"
          onClick={() => {
            onDelete(todo._id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
