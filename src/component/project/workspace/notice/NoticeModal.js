const NoticeModal = ({title, description, modifyNotice, saveNewNotice, isEdit, inputTitle, inputDesc}) => {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">새 공지사항</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">제목</label>
                                <input type="text" class="form-control" id="recipient-name" defaultValue={title} ref={inputTitle} />
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">내용</label>
                                <textarea class="form-control" id="message-text" defaultValue={description} ref={inputDesc} ></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                        {isEdit ? <button type="button" class="btn btn-primary" onClick={() => modifyNotice()} data-bs-dismiss="modal">수정</button>
                            : <button type="button" class="btn btn-primary" onClick={() => saveNewNotice()} data-bs-dismiss="modal">저장</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeModal;