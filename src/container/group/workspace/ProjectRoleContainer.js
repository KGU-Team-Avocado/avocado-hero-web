import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { role } from "../../../assets/tag/Role";
import ModifyRole from "../../../component/project/role/ModifyRole";
import RoleBadge from "../../../component/project/role/RoleBadge";
import * as API from "../../../api/API";

const ProjectRoleContainer = () => {
    const params = useParams();
    const project_id = params.id;

    const [edit, setEdit] = useState('');
    const [selected, setSelected] = useState([]);
    const inputRef = useRef();
    const [members, setMembers] = useState([]); //멤버 배열
    const [manager, setManager] = useState(''); //팀장
    const [group, setGroup] = useState({})

    useEffect(()=>{
        getGroup();
    }, []);

    const getGroup = async () => {
        const group = await API.getGroupById({ _id: project_id })

        setGroup(group);
        setMembers(group.members)
        setManager(group.manager)
    }
    const modifyRole = (member) => {
        setEdit("");
        setSelected([]);
        const selecteRole = selected.map((s) => {return s.value})
        
        axios.post("/groupsRouter/updateRole", {
            _id: project_id,
            user_id: member.user_id,
            user_role: selecteRole
        }).then((response) => {
            console.log(response.data);
            setMembers(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    }

    const editWho = (edit) => {
        const user = members.find((mem) => mem.user_id === edit)
        const select = user.user_role.map((role) => {return findRole(role)})
        setEdit(edit);
        setSelected(select)
    }

    const findRole = (r) => {
        const idx = role.findIndex((role)=>role.value===r)
        return role[idx]
    }

    return (
        <>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">역할</h1>
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
                                        {member.user_id === manager ?
                                            <h4 className="card-title">팀장</h4>
                                            :
                                            <h4 className="card-title">팀원</h4>
                                        }
                                        <h6 className="card-subtitle mb-2 text-muted">{member.user_name}</h6>
                                        {edit === member.user_id ?
                                            <ModifyRole
                                                role={role}
                                                member={member}
                                                selected={selected}
                                                setSelected={setSelected}
                                                modifyRole={modifyRole}
                                                cancleEdit={editWho}
                                            />
                                            :
                                            <>
                                                <RoleBadge
                                                    findRole={findRole}
                                                    member={member}
                                                    selected={selected}
                                                    editWho={editWho}
                                                />
                                                <div className="mt-2 d-flex justify-content-end">
                                                {group.end_project ?
                                                    <Link type="button" className="btn btn-secondary me-2" to={"/project/evaluation/" +project_id + '/' + member.user_id} >평가하기</Link>
                                                :
                                                    <button type="button" className="btn btn-secondary me-2" onClick={() => editWho(member.user_id)} >수정</button>
                                                }
                                                </div>
                                            </>
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

export default ProjectRoleContainer;