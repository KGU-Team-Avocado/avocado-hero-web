import React from "react"
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// import { Input } from "antd"
// const { TextArea } = Input

const AddInput = (props) => {

  console.log(props.counter);

  return (
    <div>
      {props.countList && props.countList.map((item, i) => (
        <div key={i}>
          {/* {
            props.counter == 0``
            ?
<></>
            :
            
          } */}

<div>
            <InputGroup className="mb-3">
      {/* form 태그에 id 다르게 주기 input1, input2... */}
                                                    <Form.Control
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                        // type="text" name="user_belong" placeholder=""
                                                        // value={profile.user_belong}
                                                        // onChange={handleInput}
                                                    />
                                                    <Button variant="outline-secondary" id="button-addon2">
                                                        삭제
                                                    </Button>
                                                </InputGroup>

            </div>
            
        </div>
      ))}
    </div>
  )
}

export default AddInput