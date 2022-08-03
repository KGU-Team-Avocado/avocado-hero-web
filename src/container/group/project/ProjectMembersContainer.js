import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

const ProjectMembersContainer = () => {
    const [applicants, setApplicants] = useState([ // 프로젝트 지원자 배열
        {
            user_id: 'gabrielyoon7',
            name: "윤주현",
            email: 'gabrielyoon7@gmail.com',
            about_me: "열심히하겠습니다!",
            joined: false
        },
        {
            user_id: 'yeonsu',
            name: "김연수",
            email: 'yeonsu@gmail.com',
            about_me: "열심히하겠습니다!!",
            joined: false
        },
        {
            user_id: "hido",
            name: "김도희",
            email: 'hido@gmail.com',
            about_me: "열심히하겠습니다!!!",
            joined: false
        },
        {
            user_id: "123",
            name: "함현준",
            email: '123@gmail.com',
            about_me: "열심히하겠습니다!!!",
            joined: false
        },
    ]);
    const [show, setShow] = useState('null');
    const [close, setClose] = useState(false)

    const handleClose = () => setShow('null');
    const handleShow = (applicant) => {
        console.log(show);
        setShow(applicant);
    }

    const acceptMember = (applicant) => {
        setShow('null');
        setApplicants(applicants.map((user) => user.user_id === applicant.user_id ? { ...user, joined: true } : user));
    }

    const rejectMember = (applicant) => {
        setShow('null');
        if (!window.confirm('변려한 신청자는 신청자 목록에서 사라지게 됩니다. 삭제하시겠습니까?')) {
            return;
        }
        setApplicants(applicants.filter((user) => user.user_id !== applicant.user_id))
    }

    const cancleAccept = (applicant) => {
        setApplicants(applicants.map((user) => user.user_id === applicant.user_id ? { ...user, joined: false } : user))
    }

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">멤버관리</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar align-text-bottom" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        This week
                    </button>
                </div>
            </div>

            {close ? null :
                <>
                    <div className="d-flex justify-content-between">
                        <h2>신청자 목록</h2>
                        <button type="button" className="btn btn-success btn-sm" onClick={() => setClose(true)} >마감</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="table-light text-center">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">아이디</th>
                                    <th scope="col">이름</th>
                                    <th scope="col">이메일</th>
                                    <th scope="col">승인/반려</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider text-center">
                                {applicants.map((applicant) => (
                                    applicant.joined ? null :
                                        <tr key={applicant.user_id}>
                                            <th onClick={() => handleShow(applicant)} scope="row">1</th>
                                            <td onClick={() => handleShow(applicant)}>{applicant.user_id}</td>
                                            <td onClick={() => handleShow(applicant)}>{applicant.name}</td>
                                            <td onClick={() => handleShow(applicant)}>{applicant.email}</td>
                                            <td>
                                                <button type="button" className="btn btn-primary btn-sm me-2" onClick={() => acceptMember(applicant)} >승인</button>
                                                <button type="button" className="btn btn-danger btn-sm" onClick={() => rejectMember(applicant)} >반려</button>
                                            </td>
                                        </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            }


            <div className="table-responsive">
                <h2>현재 팀원</h2>
                <table className="table table-hover">
                    <thead className="table-light text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">아이디</th>
                            <th scope="col">이름</th>
                            <th scope="col">이메일</th>
                            {close ? null :
                                <th scope="col">승인 취소</th>
                            }
                        </tr>
                    </thead>
                    <tbody className="table-group-divider text-center">
                        {applicants.map((applicant) => (
                            !applicant.joined ? null :
                                <tr key={applicant.user_id}>
                                    <th scope="row">1</th>
                                    <td>{applicant.user_id}</td>
                                    <td>{applicant.name}</td>
                                    <td>{applicant.email}</td>
                                    {close ? null :
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={() => cancleAccept(applicant)} >취소</button>
                                        </td>
                                    }
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={show !== 'null'} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{show.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{show.about_me}</Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-sm me-2" onClick={() => { acceptMember(show) }} >승인</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => rejectMember(show)} >반려</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectMembersContainer;