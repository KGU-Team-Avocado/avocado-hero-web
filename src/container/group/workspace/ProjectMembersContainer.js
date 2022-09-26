import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router-dom";
import axios from "axios";
import * as API from "../../../api/API";
import { useSelector } from "react-redux";
import { selectGroup } from "api/redux/group/groupSlice";

const ProjectMembersContainer = () => {
    const group = useSelector(selectGroup);
    const params = useParams();
    const project_id = params.id;

    useEffect(() => {
        axios.post("/groupsRouter/getApplicants", {
            group_id: project_id,
        }).then((response) => {
            console.log(response.data);
            setApplicants(response.data);
        }).catch(function (error) {
            console.log(error);
        });

        setMembers(group.members);
        setManager(group.manager);
        setClose(group.close_application);
    }, []);

    const [applicants, setApplicants] = useState([]); // 프로젝트 지원자 배열
    const [members, setMembers] = useState([]); //멤버 배열
    const [manager, setManager] = useState('');

    const [show, setShow] = useState('null');
    const [close, setClose] = useState(false)

    const handleClose = () => setShow('null');
    const handleShow = (applicant) => {
        console.log(show);
        setShow(applicant);
    }

    const acceptMember = (applicant) => {
        console.log(applicant)

        axios.post("/groupsRouter/acceptApplicant", {
            _id: applicant._id,
            group_id: applicant.group_id,
            data: {
                user_id: applicant.user_id,
                user_name: applicant.user_name,
                user_email: applicant.user_email,
                user_role: []
            }
        }).then((response) => {
            console.log(response.data);
            setApplicants(response.data.applicants);
            setMembers(response.data.members)
        }).catch(function (error) {
            console.log(error);
        });
    }

    const rejectMember = (applicant) => {
        if (!window.confirm('변려한 신청자는 신청자 목록에서 사라지게 됩니다. 삭제하시겠습니까?')) {
            return;
        }

        axios.post("/groupsRouter/rejectApplicant", {
            _id: applicant._id,
            group_id: applicant.group_id
        }).then((response) => {
            console.log(response.data);
            setApplicants(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const cancleAccept = (member) => {
        if (!window.confirm(member.name + ' 멤버를 방출하시겠습니까?')) {
            return;
        } 

        axios.post("/groupsRouter/cancleAccept", {
            user_id: member.user_id,
            project_id: project_id
        }).then((response) => {
            console.log(response.data);
            setMembers(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleCloseApplication = (isClose) => {
        axios.post("/groupsRouter/modifyClose", {
            project_id: project_id,
            close_application: isClose
        }).then((response) => {
            console.log(response.data);
            setClose(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">멤버관리</h1>
            </div>

            <div className="d-flex justify-content-between">
                <h2>신청자 목록</h2>
                <div className="form-check form-switch align-self-center">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={close} onChange={() => handleCloseApplication(!close)} />
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
                        {members.map((member) => (
                            member.user_id === manager ? null :
                                <tr key={member.user_id}>
                                    <th scope="row">1</th>
                                    <td>{member.user_id}</td>
                                    <td>{member.user_name}</td>
                                    <td>{member.user_email}</td>
                                    {close ? null :
                                        <td>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={() => cancleAccept(member)} >방출</button>
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