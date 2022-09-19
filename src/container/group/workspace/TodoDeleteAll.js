import "../workspace/Todo.css";

const TodoDeleteAll = ({onDeleteAll}) => {

    return (
        <div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-outline-secondary" type="button" 
            onClick={() => {
                onDeleteAll();
             }}>모두삭제</button>
            <button class="btn btn-outline-secondary" type="button">완료된 일 삭제</button>
      </div>
        </div>
    )
}

export default TodoDeleteAll;