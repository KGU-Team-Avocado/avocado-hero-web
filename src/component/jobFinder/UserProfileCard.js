export default ({ user, convertProfile }) => {
    return (
        <div className="col">
            <a href="#" className="text-decoration-none text-dark" data-bs-toggle="modal" data-bs-target="#profile_modal" onClick={() => convertProfile(user)}>
                <div className="card p-3 rounded-4">
                    <div className="row">
                        <div className="text-center col-xxl-4">
                            <svg className="img-thumbnail rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            <div>
                                <b>{user.user_id}</b>
                            </div>
                            <div>{user.user_name}</div>
                        </div>
                        <div className="col-xxl-8 py-xxl-3">
                            <div>희망 직무 : </div>
                            <div>평점 : </div>
                            <div>대표 프로젝트 : </div>
                            <div>선호하는 기술 : </div>
                            <div>평점 : </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}