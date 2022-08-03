import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TechStack from "../../../../component/common/TechStack";
import DOMPurify from "dompurify";

export default (props) => {

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

    const group = props.selectedGroup
    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">
                <div className="modal-body p-5">
                    <div className="modal-header">
                        <h2 className="fw-bold mb-0">신청하기</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="d-grid my-5 list-unstyled">
                        {
                            group &&
                            <>
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
                                <textarea />
                            </>
                        }

                    </div>
                    <button type="button" className="btn btn-lg btn-success mt-5 w-100" data-bs-dismiss="modal" disabled={userInfo ? "" : "disabled"}>신청하기</button>
                </div>
            </div>
        </div>
    )
}