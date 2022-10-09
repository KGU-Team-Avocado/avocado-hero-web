export default (props) => {
    // 수정 예정
    return (
        <div>
            <div className="list-group list-group-light">
                <a
                    href="#"
                    className="list-group-item list-group-item-action px-3 py-3 border-0 border-top border-bottom"
                    onClick={() => props.handleClick(props.posting)}
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