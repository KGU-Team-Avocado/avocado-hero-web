export default (props) => {
    return (
        <div className="col-xl-4 my-2">
            <a href="#" className="text-decoration-none text-dark" data-bs-toggle="modal" data-bs-target="#group_join" onClick={() => props.setSelectedGroup(props.group)}>
                <div className="card p-3">
                    <div className="row">
                        <div className="text-center col-md-4 pe-2 py-5">
                            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                        </div>
                        <div className="col-md-8 ps-5 py-3">
                            <h4>{props.group.name} (팀장 : {props.group.manager})</h4>
                            <h5>{props.group.title}</h5>
                            <p>{props.group.intro_text}</p>
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
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}