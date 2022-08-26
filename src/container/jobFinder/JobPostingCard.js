export default (props) => {
    return (
        <div>
            <div className="list-group list-group-light">
                <a
                    href="#"
                    className="list-group-item list-group-item-action px-3 py-3 border-0 border-top border-bottom"
                    data-bs-toggle="modal"
                    data-bs-target="#job_modal"
                    onClick={() => props.setSelected(props.posting)}
                >
                    <div className="row">
                        <div className="col">
                            <h5>{props.posting.name}</h5>
                        </div>
                        <div className="col-6">
                            <h5>{props.posting.title}</h5>
                        </div>
                        <div className="col">
                            <p>{props.posting.field}</p>
                            <p>~{props.posting.period}</p>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
}

// export default (props) => {
//     return (
//         <div className="col-lg-4 my-2">
//             <a href="#" className="text-decoration-none text-dark" data-bs-toggle="modal" data-bs-target="#group_join" onClick={() => props.setSelectedPosting(props.posting)}>
//                 <div className="card p-3">
//                     <div className="row">
//                         <div className="text-center col-xxl-4 py-4">
//                             <svg className="img-thumbnail rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
//                             <div>{props.posting.company_id}</div>
//                         </div>
//                         <div className="col-xxl-8 py-3">
//                             <h4>{props.posting.company_company_name}</h4>
//                             <h5>{props.posting.company_title}</h5>
//                             <p>{props.posting.company_field}</p>
//                             <div>
//                                 <span className="badge text-bg-primary">Primary</span>
//                                 <span className="badge text-bg-secondary">Secondary</span>
//                                 <span className="badge text-bg-success">Success</span>
//                                 <span className="badge text-bg-danger">Danger</span>
//                                 <span className="badge text-bg-warning">Warning</span>
//                                 <span className="badge text-bg-info">Info</span>
//                                 <span className="badge text-bg-light">Light</span>
//                                 <span className="badge text-bg-dark">Dark</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </a>
//         </div>
//     )
// }