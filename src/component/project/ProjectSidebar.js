import { Link } from "react-router-dom";

export default (props) => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to={"/project/" + props.group._id} className="nav-link active text-dark" aria-current="page">
                            <i className="bi bi-megaphone align-top me-1"></i>
                            공지사항
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to={"/project/calendar/" + props.group._id}>
                            <i className="bi bi-calendar3 align-top me-1"></i>
                            일정
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to={"/project/todo/" + props.group._id}>
                            <i className="bi bi-list-task align-top me-1"></i>
                            Todo
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to={"/project/role/" + props.group._id}>
                            <i className="bi bi-person-lines-fill align-top me-1"></i>
                            역할
                        </Link>
                    </li>
                    {!props.group.end_project ?
                        props.group.manager === props.user.user_id ?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to={"/project/members/" + props.group._id}>
                                        <i className="bi bi-people align-top me-1"></i>
                                        멤버관리
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to={"/project/end/" + props.group._id}>
                                        <i className="bi bi-power align-top me-1"></i>
                                        프로젝트 종료
                                    </Link>
                                </li>
                            </>
                            : null
                        : <li className="nav-item">
                            <Link className="nav-link text-dark" to={"/project/evaluation/" + props.group._id}>
                                <i className="bi bi-people align-top me-1"></i>
                                팀원 평가
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}