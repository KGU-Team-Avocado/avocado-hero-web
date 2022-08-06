import { useRef, useState } from "react"
import NoticeAcordion from "../../../component/project/workspace/notice/NoticeAcordion";
import NoticeModal from "../../../component/project/workspace/notice/NoticeModal";

const ProjectContainer = () => {
    const [notices, setNotices] = useState([ //공지사항 배열
        {
            _id: 0,
            title: "콘솔",
            description: "상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        },
        {
            _id: 1,
            title: "콘솔",
            description: "상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        },
        {
            _id: 2,
            title: "콘솔",
            description: "상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        },
        {
            _id: 3,
            title: "콘솔",
            description: "상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        },
    ]);

    const [title, setTitle] = useState(""); //공지사항 제목
    const [description, setDescription] = useState(""); //공지사항 내용
    const [id, setId] = useState(4); //추후 0으로 교체
    const [isEdit, setIsEdit] = useState(false); //수정 모드 여부
    const [key, setKey] = useState(-1); //수정할 공지의 id

    const inputTitle = useRef();
    const inputDesc = useRef();

    const saveNewNotice = () => {
        const newNotice = {_id: id, title: inputTitle.current.value, description: inputDesc.current.value};
        setNotices([newNotice, ...notices]);
        setId(id + 1);
        setTitle("");
        setDescription("");
    }

    const deleteNotice = (id) => {
        setNotices(notices.filter((notice) => notice._id !== id));
    }

    const showModifyModal = (notice) => {
        setTitle(notice.title);
        setDescription(notice.description);
        setKey(notice._id);
        setIsEdit(true);
    }

    const modifyNotice = () => {
        setNotices(notices.map((notice) => notice._id === key ? {...notice, title: inputTitle.current.value, description: inputDesc.current.value} : notice));
        setTitle("");
        setDescription("");
        setKey(0);
        setIsEdit(false);
    }

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">공지사항</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    {/* 공지사항 추가하기는 추후 팀장만 볼 수 있게 수정 */}
                    <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                        공지사항 추가하기
                    </button>
                </div>
            </div>

            <NoticeAcordion
                notices={notices}
                deleteNotice={deleteNotice}
                showModifyModal={showModifyModal}
            />

            <NoticeModal 
                title={title}
                description={description}
                isEdit={isEdit}
                inputTitle={inputTitle}
                inputDesc={inputDesc}
                modifyNotice={modifyNotice}
                saveNewNotice={saveNewNotice}
            />
        </>
    )
}

export default ProjectContainer;