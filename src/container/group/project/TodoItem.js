import React, { useCallback, useState } from "react";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import "../project/Todo.css";

const TodoItem = ({ todo, onDelete }) => {
  const { id, text, checked } = todo;

  //handleCheck에서 todo의 checked를 변경 후 재렌더링해주기 위해 사용
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}, []));

  const handleCheck = () => {
    if (todo.checked) {
      todo.checked = false;
    } else {
      todo.checked = true;
    }
    console.log(todo.checked);
    forceUpdate();
  };

  return (
    <div className="TodoItem">
      <div onClick={handleCheck}>
        <div className={`content ${checked ? "checked" : " "}`}>
          {checked ? <BsCheckCircleFill /> : <BsCheckCircle />}
          <div className="text">{text}</div>
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
            onDelete(todo.id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
