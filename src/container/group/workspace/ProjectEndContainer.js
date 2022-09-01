import axios from "axios";
import { useParams } from "react-router-dom";

const ProjectEndContainer = () => {
    const params = useParams();
    const project_id = params.id;

    const endProject = () => {
        axios.post("/groupsRouter/endProject", {
            _id: project_id,
        }).then((response) => {
            window.location.href = "/project/" + project_id;
        }).catch(function (error) {
            console.log(error);
        });
    }
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">프로젝트 종료</h1>
            </div>
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">프로젝트를 종료하시겠습니까?</h4>
                <p>프로젝트 종료 후에는 프로젝트 내용을 수정할 수 없으며, 팀원 상대평가가 이뤄집니다.</p>
                <hr />
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                    <p class="mb-0">종료를 원하시면 우측 버튼을 눌러주세요.</p>
                    <button type="button" className="btn btn-danger" onClick={() => endProject()}>종료</button>
                </div>
            </div>
        </> 
    )
}

export default ProjectEndContainer;