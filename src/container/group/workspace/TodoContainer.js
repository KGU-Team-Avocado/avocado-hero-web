import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TodoCreate from "./todo/TodoCreate";
import TodoDeleteAll from "./todo/TodoDeleteAll";
import TodoList from "./todo/TodoList";
import WorkspaceHeader from "component/workspace/layout/WorkspaceHeader";

const TodoContainer = () => {
  
  //URL에서 프로젝트 id를 가져옴
  const params = useParams();
  const project_id = params.id;

  const [todos, setTodos] = useState([]);

  useEffect(() => {
  //데이터 불러오기
  axios
  .post("/todosRouter/postFind", {
    project_id: project_id,
  })
  .then((response) => {
    console.log(response.data);
    setTodos(response.data);
  })
  }, [])

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
      <WorkspaceHeader
        title={'Todo'}
        action={
          <TodoDeleteAll onDeleteAll={onDeleteAll} onDeleteComplete={onDeleteComplete} />
        }
      />
      <TodoCreate onCreate={onCreate} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
};

export default TodoContainer;
