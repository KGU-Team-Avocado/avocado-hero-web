import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectMembersContainer = () => {

    const params = useParams();
    const project_id = params.id;

    useEffect(()=>{
        axios.post("/groupsRouter/getApplicants", {
            group_id: project_id,
        }).then((response) => {
            console.log(response.data);
            setApplicants(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    },[]);

    useEffect(()=>{
        axios.post("/groupsRouter/getGroup", {
            _id: project_id,
        }).then((response) => {
            console.log(response.data);
            setMembers(response.data.members)
        }).catch(function (error) {
            console.log(error);
        });
    },[]);

    const [applicants, setApplicants] = useState([]); // 프로젝트 지원자 배열
    const [members, setMembers] = useState([]); //멤버 배열

    const [show, setShow] = useState('null');
    const [close, setClose] = useState(false)

    const handleClose = () => setShow('null');
    const handleShow = (applicant) => {
        console.log(show);
        setShow(applicant);
    }

    const acceptMember = (applicant) => {
        console.log(applicant)
        // setShow('null');
        // setApplicants(applicants.map((user) => user.user_id === applicant.user_id ? { ...user, joined: true } : user));
        axios.post("/groupsRouter/acceptApplicant", {
            _id: applicant._id,
            group_id: applicant.group_id,
            user_id:applicant.user_id
        }).then((response) => {
            console.log(response.data);
            // setApplicants(response.data);
        }).catch(function (error) {
            console.log(error);
        });
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

            <div className="d-flex justify-content-between">
                <h2>신청자 목록</h2>
                <div className="form-check form-switch align-self-center">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={() => setClose(!close)} />
                    <label className="form-check-label" for="flexSwitchCheckChecked">마감</label>
                </div>
            </div>

            {close ?
                <div className="alert alert-warning" role="alert">팀원 신청이 마감되었습니다.</div>
                :
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
                                        <td onClick={() => handleShow(applicant)}>{applicant.user_name}</td>
                                        <td onClick={() => handleShow(applicant)}>{applicant.user_email}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-sm me-2" onClick={() => acceptMember(applicant)} >승인</button>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={() => rejectMember(applicant)} >반려</button>
                                        </td>
                                    </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

            <hr />

            <div className="table-responsive">
                <h2>현재 팀원</h2>
                {JSON.stringify(members)}
                <table className="table table-hover">
                    <thead className="table-light text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">아이디</th>
                            <th scope="col">이름</th>
                            <th scope="col">이메일</th>
                            {close ? null :
                                <th scope="col">방출</th>
                            }
                        </tr>
                    </thead>
                    <tbody className="table-group-divider text-center">
                        {applicants.map((applicant) => (
                            !applicant.joined ? null :
                                <tr key={applicant.user_id}>
                                    <th scope="row">1</th>
                                    <td>{applicant.user_id}</td>
                                    <td>{applicant.user_name}</td>
                                    <td>{applicant.user_email}</td>
                                    {close ? null :
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={() => rejectMember(applicant)} >방출</button>
                                        </td>
                                    }
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={show !== 'null'} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{show.user_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{show.message}</Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-sm me-2" onClick={() => { acceptMember(show) }} >승인</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => rejectMember(show)} >반려</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectMembersContainer;