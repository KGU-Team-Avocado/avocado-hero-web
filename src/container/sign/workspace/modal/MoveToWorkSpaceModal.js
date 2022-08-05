import { Link } from "react-router-dom"

export default (props) => {
    const group = props.selectedGroup
    return (
        <>
            {
                group &&
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-body p-5">
                            <div className="modal-header">
                                <h2 className="fw-bold mb-0">워크스페이스로 이동하기</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="d-grid my-5 list-unstyled">
                                워크스페이스로 이동하시겠습니까?

                            </div>
                            <Link to={"/project/" + group._id} className="text-decoration-none text-dark btn btn-lg btn-success mt-5 w-100">
                                <div>들어가기</div>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}