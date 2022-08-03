import TechStack from "../../common/TechStack"

export default (props) => {

    return (
        <div className="col">
            <a href="#" className="text-decoration-none text-dark" data-bs-toggle="modal" data-bs-target="#group_join" onClick={() => props.setSelectedGroup(props.group)}>
                <div className="card p-3 rounded-4">
                    <div className="row">
                        <div className="text-center col-xxl-4 py-4">
                            <svg className="img-thumbnail rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <div>{props.group.manager}</div>
                        </div>
                        <div className="col-xxl-8 py-3">
                            <h4>{props.group.group_name}</h4>
                            <h5>{props.group.project_name}</h5>
                            <p>{props.group.short_description}</p>
                            <div>
                                {/* {props.group.tech_stack.map((tech)=><span className="badge text-bg-dark me-1">{tech}</span>)} */}
                                <TechStack tech_stack={props.group.tech_stack} />
                                {/* <span className="badge text-bg-primary">Primary</span>
                                <span className="badge text-bg-secondary">Secondary</span>
                                <span className="badge text-bg-success">Success</span>
                                <span className="badge text-bg-danger">Danger</span>
                                <span className="badge text-bg-warning">Warning</span>
                                <span className="badge text-bg-info">Info</span>
                                <span className="badge text-bg-light">Light</span>
                                <span className="badge text-bg-dark">Dark</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}