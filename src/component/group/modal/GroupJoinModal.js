import { Link } from "react-router-dom";
export default (props) => {
    const group = props.selectedGroup
    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">
                <div className="modal-body p-5">
                    <div className="modal-header">
                        <h2 className="fw-bold mb-0">신청하기</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="d-grid my-5 list-unstyled">
                        {
                            group &&
                            <>
                                <h4>{group.name}</h4>
                                <h3>{group.title}</h3>
                                <h5>{group.intro_text}</h5>
                                <hr />
                                <p>{group.description}</p>
                                <hr />
                                <h5>Tech Stack</h5>
                                <div>
                                    <span className="badge text-bg-primary">Primary</span>
                                    <span className="badge text-bg-secondary">Secondary</span>
                                    <span className="badge text-bg-success">Success</span>
                                    <span className="badge text-bg-danger">Danger</span>
                                    <span className="badge text-bg-warning">Warning</span>
                                    <span className="badge text-bg-info">Info</span>
                                    <span className="badge text-bg-light">Light</span>
                                    <span className="badge text-bg-dark">Dark</span>
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
                    <button type="button" className="btn btn-lg btn-success mt-5 w-100" data-bs-dismiss="modal">신청하기</button>
                </div>
            </div>
        </div>
    )
}