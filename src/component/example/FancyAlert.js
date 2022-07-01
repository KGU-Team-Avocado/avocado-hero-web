export default (props) => {
    return (
        <div className={`alert ${ 'alert-'+props.color }`} role="alert">
            <h4 className="alert-heading">{props.title}</h4>
            <p>{props.description}</p>
            <hr />
            <p className="mb-0">{props.footer}</p>
        </div>
    )
}