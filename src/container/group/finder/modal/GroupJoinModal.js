import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TechStack from "../../../../component/common/TechStack";
import DOMPurify from "dompurify";
import axios from "axios";

export default (props) => {

    const group = props.selectedGroup

    const [message, setMessage] = useState('');

    const handleMessageChange = event => {
        setMessage(event.target.value);
        console.log(event.target.value);
    };


    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setUserInfo(JSON.parse(sessionStorage.getItem("user")));
        }
    }, []);

    // // 정규식을 이용한 HTML 태그 제거 시작
    // const tagRemoved = (text) => {
    //     let content = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
    //     content = content.replace(/<br\/>/ig, "\n");
    //     content = content.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
    //     content = content.replace(/(<([^>]+)>)/gi, "");
    //     content = content.replace(/&nbsp;/gi, "");
    //     return content
    // }
    // // 정규식을 이용한 HTML 태그 제거 끝

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    };

    const groupApply = () => {

        console.log('깔깔')
        axios.post('/groupsRouter/apply', {
            group_id: group._id,
            group_name: group.group_name,
            project_name: group.project_name,
            user_id: userInfo.user_id,
            user_name: userInfo.user_name,
            user_email: userInfo.user_email,
            status: "대기",
            message: message,
        }).then((response) => { //서버로부터 받아온 id
            console.log(response.data)
            if (response.data.success === true) {
                window.location.reload()
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
        <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">
                <div className="modal-body p-5 w-100">
                    <div className="modal-header">
                        <h2 className="fw-bold mb-0">신청하기</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => props.setOpen(false)}></button>
                    </div>
                    {
                        group &&
                        <>
                            <div className="d-grid my-5 list-unstyled">

                                <h4>{group.group_name}</h4>
                                <h3>{group.project_name}</h3>
                                <h5>{group.short_description}</h5>
                                <hr />
                                <div dangerouslySetInnerHTML={createMarkup(group.long_description)}></div>
                                <hr />
                                <h5>Tech Stack</h5>
                                <div>
                                    <TechStack tech_stack={group.tech_stack} />
                                </div>
                                <hr />
                                <h5>팀장</h5>
                                <div><Link target="_blank" to={'/user/' + group.manager}>{group.manager}</Link></div>
                                <hr />
                                <h5>자기소개서</h5>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={handleMessageChange}
                                />



                            </div>
                            <button type="button" className="btn btn-lg btn-success mt-5 w-100" disabled={userInfo && userInfo.user_id != group.manager ? "" : "disabled"} onClick={() => groupApply()}>신청하기</button>
                        </>
                    }
                </div>
            </div>
        </div>
        </>
    )
}