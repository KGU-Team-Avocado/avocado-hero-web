import Form from "react-bootstrap/Form";

const SelectColor = ({color, handleColor}) => {
    const backgroudColor = [
        {
            className: 'bg-green-dark',
            color: "rgba(62, 121, 37)"
        },
        {
            className: 'bg-green',
            color: "rgba(132, 150, 53)"
        },
        {
            className: 'bg-green-light',
            color: "rgba(180, 203, 51)"
        },
        {
            className: 'bg-yellow',
            color: "rgba(246, 199, 75)"
        },
        {
            className: 'bg-yellow-light',
            color: "rgba(242, 231, 151)"
        },
        {
            className: 'bg-orange-dark',
            color: "rgba(199, 130, 61)"
        },
        {
            className: 'bg-orange',
            color: "rgba(227, 125, 78)"
        },
    ];

    return (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5" value={color} >
            <Form.Label>색상</Form.Label>
            <div key={"inline-radio"} className="mb-3" onChange={(e) => handleColor(e.target.id)}>
                {backgroudColor.map((bg) => (
                    <Form.Check
                        inline
                        label={<div className={"rounded " + bg.className}>&nbsp;&nbsp;&nbsp;&nbsp;</div>}
                        name="group1"
                        type="radio"
                        id={bg.color}
                    />
                ))}
            </div>
        </Form.Group>
    )
}

export default SelectColor;