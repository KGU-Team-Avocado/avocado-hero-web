import { useRef, useState } from "react";

export default () => {
    const [members, setMembers] = useState([ //공지사항 배열
        {
            user_id: '201912069',
            name: "박소영",
            role: "팀장",
            description: "PM FrontEnd"
        },
        {
            user_id: 'gabrielyoon7',
            name: "윤주현",
            role: "팀원",
            description: "rontEnd 일정관리"
        },
        {
            user_id: 'yeonsu',
            name: "김연수",
            role: "팀원",
            description: "BackEnd 디자인설계"
        },
        {
            user_id: "hido",
            name: "김도희",
            role: "팀원",
            description: "BackEnd test"
        },
    ]);
    const [edit, setEdit] = useState('');
    const inputRef = useRef();

    const modifyRole = (member) => {
        setEdit("");
        setMembers(members.map(mem => mem.user_id === member.user_id ? {...mem, description: inputRef.current.value} : mem))
    }

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">역할</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <svg xmlns="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar align-text-bottom" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        This week
                    </button>
                </div>
            </div>

            <div className="row">
                {members.map(member => (
                    <div className="col-xl-4 col-lg-6 my-2" key={member.user_id}>
                        <div className="card p-3">
                            <div className="row g-0 align-items-center">
                                <div className="text-center col-xxl-4 py-4">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="200" height="200" className="img-fluid rounded-circle my-3" alt="..." />
                                </div>
                                <div className="col-xxl-8">
                                    <div className="card-body">
                                        <h4 className="card-title">{member.role}</h4>
                                        <h6 className="card-subtitle mb-2 text-muted">{member.name}</h6>
                                        {edit === member.user_id ?
                                            <div>
                                                <textarea className="card-text" ref={inputRef} defaultValue={member.description} />
                                                <div className="d-flex justify-content-end">
                                                    <button type="button" className="btn btn-secondary me-2" onClick={() => modifyRole(member)} >저장</button>
                                                    <button type="button" className="btn btn-danger" onClick={() => setEdit("")} data-bs-dismiss="modal">취소</button>
                                                </div>
                                            </div>
                                            : <div>
                                                <p className="card-text">{member.description}</p>
                                                <div className="d-flex justify-content-end">
                                                    <button type="button" className="btn btn-secondary me-2" onClick={() => setEdit(member.user_id)} >수정</button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}