import React from "react"
import Form from "react-bootstrap/Form";

// import { Input } from "antd"
// const { TextArea } = Input

const AddInput = (props) => {

  return (
    <div>
      {props.countList && props.countList.map((item, i) => (
        <div key={i}>
            <div>
            <Form.Control type="text" placeholder="+를 눌러 추가하세요" />
            </div>
        </div>
      ))}
    </div>
  )
}

export default AddInput