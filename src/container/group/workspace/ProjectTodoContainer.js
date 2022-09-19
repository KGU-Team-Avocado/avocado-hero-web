import { useState, useRef } from "react";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import TodoDeleteAll from "./TodoDeleteAll";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProjectTodoContainer = () => {
  
  //URL에서 프로젝트 id를 가져옴
  const params = useParams();
  const project_id = params.id;

  const [todos, setTodos] = useState([]);

  // const dataId = useRef(0);

  const onCreate = (todo) => {
    console.log(project_id);
    const newItem = {
      text: todo,
      // id: dataId.current,
      checked: false,
      project_id: project_id,
    };
    // dataId.current += 1;

    //데이터 저장
    axios
    .post("/todosRouter/todoCreate", {
      // todo_id : newItem.id,
      todo_text : newItem.text,
      todo_isChecked : newItem.checked,
      project_id : newItem.project_id,
    })
    .then((response) => {
      console.log(response);
    })
    
    //데이터 불러오기
    axios
      .post("/todosRouter/postFind", {
        project_id: project_id,
      })
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })

    // setTodos([...todos, newItem]);
    // console.log(newItem);
  };

  const onDelete = (targetId) => {
    // const newTodoList = todos.filter((it) => it.id !== targetId);
    // setTodos(newTodoList);
    // alert("삭제되었습니다");
    
    //데이터 삭제
    axios
    .post("/todosRouter/Delete", {
      _id : targetId,
    })

    //데이터 불러오기
    axios
      .post("/todosRouter/postFind", {
        project_id: project_id,
      })
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
    
  };

  const onDeleteAll = () => {
    //데이터 삭제
    axios
    .post("/todosRouter/DeleteAll", {
      project_id: project_id,
    })

    //데이터 불러오기
    axios
      .post("/todosRouter/postFind", {
        project_id: project_id,
      })
      .then((response) => {
        setTodos(response.data);
      })
  }

  const onDeleteComplete = () => {
    //데이터 삭제
    axios
    .post("/todosRouter/DeleteComplete", {
      project_id : project_id,
    })

    //데이터 불러오기
    axios
      .post("/todosRouter/postFind", {
        project_id: project_id,
      })
      .then((response) => {
        setTodos(response.data);
      })
  }

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Todo</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          {/* <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div> */}
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary dropdown-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-calendar align-text-bottom"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            This week
          </button>
        </div>
      </div>
      <TodoCreate onCreate={onCreate} />
      <TodoDeleteAll  onDeleteAll={onDeleteAll} onDeleteComplete = {onDeleteComplete}/>
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
};

export default ProjectTodoContainer;
