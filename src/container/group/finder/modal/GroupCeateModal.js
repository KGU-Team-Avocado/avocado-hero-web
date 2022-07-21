import { useState } from "react"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default () => {

    const [project, setProject] = useState({
        group_name: '',
        project_name: '',
        short_description: '',
        long_description: ''
    })



    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">
                <div className="modal-body p-5">
                    <div className="modal-header">
                        <h2 className="fw-bold mb-0">프로젝트 그룹 만들기</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="d-grid my-5 list-unstyled">
                        <h4>그룹명</h4>
                        <input type="text" class="form-control mb-4" value={project.group_name} />
                        <h4>프로젝트명</h4>
                        <input type="text" class="form-control mb-4" value={project.project_name} />
                        <h4>간단소개글</h4>
                        <input type="text" class="form-control mb-4" value={project.short_description} />
                        <h4>상세소개글</h4>
                        <input type="text" class="form-control mb-4" value={project.long_description} />
                        <Editor
                            // editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            // onEditorStateChange={this.onEditorStateChange}
                        />
                        <h4>Tech Stack</h4>
                        <select />
                    </div>
                    <button type="button" className="btn btn-lg btn-success mt-5 w-100" data-bs-dismiss="modal">등록하기</button>
                </div>
            </div>
        </div>
    )
}