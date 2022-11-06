import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";
import * as API from "../../../api/API";
import NoticeAcordion from "../../../component/workspace/notice/NoticeAcordion";
import NoticeModal from "../../../component/workspace/notice/NoticeModal";
import Typography from '@mui/material/Typography';
import { Button, Divider, Grid } from "@mui/material";
import { selectGroup } from "api/redux/group/groupSlice";
import { useDispatch, useSelector } from "react-redux";
import { getGroupAsync } from "api/redux/group/groupSlice";
import WorkspaceHeader from "component/workspace/layout/WorkspaceHeader";

const Notice = () => {
    const group = useSelector(selectGroup);
    const dispatch = useDispatch();

    const [groupManager, setGroupManager] = useState({});
    const [notices, setNotices] = useState([]); // 공지사항 배열

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(""); //공지사항 제목
    const [description, setDescription] = useState(""); //공지사항 내용
    const [isEdit, setIsEdit] = useState(false); //수정 모드 여부
    const [key, setKey] = useState(-1); //수정할 공지의 id
    const [user, setUser] = useState({user_id: ''})

    const inputTitle = useRef();
    const inputDesc = useRef();

    const params = useParams();
    const project_id = params.id;

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            console.log()
            setUser(JSON.parse(sessionStorage.getItem("user")));
        }

        setGroupManager(group.manager);
        setNotices(group.notices);
    }, []);

    const saveNewNotice = () => {
        const newNotice = { title: inputTitle.current.value, description: inputDesc.current.value };
        axios.post("/groupsRouter/saveNewNotice", {
            _id: project_id,
            notice: newNotice
        }).then((response) => {
            console.log(response.data);
            setTitle("");
            setDescription("");
            setShow(false);
            // setNotices(response.data)
            dispatch(getGroupAsync(project_id));
        }).catch(function (error) {
            console.log(error);
        });
    }

    const deleteNotice = (id) => {
        axios.post("/groupsRouter/deleteNotice", {
            _id: project_id,
            notice_id: id
        }).then((response) => {
            console.log(response.data);
            // setNotices(response.data)
            dispatch(getGroupAsync(project_id));
        }).catch(function (error) {
            console.log(error);
        });
    }

    const showModifyModal = (notice) => {
        setTitle(notice.title);
        setDescription(notice.description);
        setKey(notice._id);
        setShow(true);
        setIsEdit(true);
    }

    const modifyNotice = () => {
        const newNotice = { title: inputTitle.current.value, description: inputDesc.current.value };
        axios.post("/groupsRouter/modifyNotice", {
            _id: project_id,
            notice_id: key,
            notice: newNotice
        }).then((response) => {
            console.log(response.data);
            setTitle("");
            setDescription("");
            setKey(0);
            setIsEdit(false);
            setShow(false);
            dispatch(getGroupAsync(project_id));
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleClose = () => {
        setTitle("");
        setDescription("");
        setShow(false);
        setIsEdit(false);
    }

    return (
        <>
            <WorkspaceHeader
                title={'공지사항'}
                action={
                    <Button color="secondary" variant="outlined" aria-label="upload picture" component="label" onClick={() => setShow(true)} >
                        공지사항 추가하기
                    </Button>
                }
            />

            <NoticeAcordion
                notices={group.notices}
                deleteNotice={deleteNotice}
                showModifyModal={showModifyModal}
                user={user}
                groupMgr={groupManager}
            />

            <NoticeModal
                title={title}
                show={show}
                description={description}
                isEdit={isEdit}
                inputTitle={inputTitle}
                inputDesc={inputDesc}
                modifyNotice={modifyNotice}
                saveNewNotice={saveNewNotice}
                handleClose={handleClose}
            />
        </>
    )
}

export default Notice;