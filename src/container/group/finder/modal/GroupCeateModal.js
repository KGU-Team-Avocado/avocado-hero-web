import { useEffect, useState } from "react"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";
import { options } from '../../../../assets/tag/Tech'

export default () => {

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setUserInfo(JSON.parse(sessionStorage.getItem("user")));
        }
    }, []);

    const [project, setProject] = useState({
        group_name: '',
        project_name: '',
        short_description: '',
    })

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [convertedContent, setConvertedContent] = useState(null);

    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    };
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    };

    const handleInput = (state) => {
        console.log(state)
        setProject({
            ...project,
            [state.target.id]: state.target.value
        })
    }


    const [selected, setSelected] = useState([]);

    const createGroup = () => {
        const newGroupData = {
            ...project,
            long_description: convertedContent,
            tech_stack: selected.map((s) => s.value),
            manager: userInfo.user_id,
            members: [],
            applied : [],
        }
        console.log(newGroupData)

        const hasValue = Object.values(newGroupData).includes("");
        if(hasValue){
            alert('빈 칸을 모두 채워주세요')
        }
        else{
            axios
            .post("/groupsRouter/create", newGroupData)
            .then((response) => {
                console.log(response.data);
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">
                <div className="modal-body p-5  w-100">
                    <div className="modal-header">
                        <h2 className="fw-bold mb-0">프로젝트 그룹 만들기</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="d-grid my-5 list-unstyled">
                        <h4>그룹명</h4>
                        <input type="text" className="form-control mb-4" value={project.group_name} id="group_name" onChange={handleInput} />
                        <h4>프로젝트명</h4>
                        <input type="text" className="form-control mb-4" value={project.project_name} id="project_name" onChange={handleInput} />
                        <h4>간단소개글</h4>
                        <input type="text" className="form-control mb-4" value={project.short_description} id="short_description" onChange={handleInput} />
                        <div className="mb-4">
                            <h4>Tech Stack</h4>
                            {/* <pre>{JSON.stringify(selected)}</pre> */}
                            <MultiSelect
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                            />
                        </div>
                        <h4>상세소개글</h4>
                        <div>
                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={handleEditorChange}
                            />
                        </div>
                    </div>
                    <button type="button" className="btn btn-lg btn-success mt-5 w-100" onClick={() => createGroup()}>등록하기</button>
                </div>
            </div>
        </div>
    )
}