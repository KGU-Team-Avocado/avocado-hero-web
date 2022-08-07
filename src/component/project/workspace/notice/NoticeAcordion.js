import Accordion from 'react-bootstrap/Accordion';

const NoticeAcordion = ({notices, deleteNotice, showModifyModal}) => {
    return (
        <Accordion alwaysOpen>
            {notices.map((notice) => (
                <Accordion.Item eventKey={notice._id}>
                    <Accordion.Header>{notice.title}</Accordion.Header>
                    <Accordion.Body>
                        {notice.description}
                        {/* 수정 삭제는 추후 팀장만 볼 수 있게 수정 */}
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-secondary me-2" onClick={() => showModifyModal(notice)} >수정</button>
                            <button type="button" className="btn btn-danger" onClick={() => deleteNotice(notice._id)} >삭제</button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export default NoticeAcordion;