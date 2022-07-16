export default () => {
    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">
                <div className="modal-body p-5">
                    <h2 className="fw-bold mb-0">모달이 켜졌어요</h2>

                    <div className="d-grid gap-4 my-5 list-unstyled">
                        잘 뜨냐?
                    </div>
                    <button type="button" className="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">잘 떴어요!</button>
                </div>
            </div>
        </div>
    )
}