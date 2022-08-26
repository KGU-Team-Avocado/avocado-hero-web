import { Link, useParams } from "react-router-dom";

export default (props) => {
    const params = useParams();
    const project_id = params.id;

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Link to={"/project/" + project_id} className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">{props.group.project_name} 프로젝트</Link>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <Link to="/" className="nav-link active mx-2">
                        Avocado Hero
                    </Link>
                </div>
            </div>
        </header>
    )
}