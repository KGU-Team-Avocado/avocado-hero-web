import React from "react"
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// import { Input } from "antd"
// const { TextArea } = Input

const AddInput = (props) => {

  return (
    <div>
      {props.countList && props.countList.map((item, i) => (
        <div key={i}>
            <div>
            <InputGroup className="mb-3">
                                                    <Form.Control
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                        // type="text" name="user_belong" placeholder=""
                                                        // value={profile.user_belong}
                                                        // onChange={handleInput}
                                                    />
                                                    <Button variant="outline-secondary" id="button-addon2">
                                                        추가
                                                    </Button>
                                                </InputGroup>
            </div>
        </div>
      ))}
    </div>
  )
}

export default AddInput