import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import div from "react-bootstrap/Container";
import axios from "axios";

import { useRef, useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from 'draft-convert';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { right } from "@popperjs/core";


const JobPosting = () => {
  
  const [company,setCompany]=useState({
    name:'',
    title:'',
    field:'',
    recruit_number:'',
    tag:'',
    period:'',
    site:'',
    // description:'',
  })

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
);
  const [convertedContent, setConvertedContent] = useState(null);

  //const [checkError, setCheckError] = useState("");

  const onInputHandler = (e) => {
    console.log(company)
    setCompany({
      ...company,
      [e.target.id]:e.target.value,
    });
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
};
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
};

  const onClick = (e) => {
    e.preventDefault();
    // console.log(Object.keys(company).map((key)=>company[key]))
    if (company.name.length < 1) {
      return;
    } else if (company.title.length < 1) {
      return;
    } else if (company.field.length < 1) {
      return;
    } else if (company.recruit_number.length < 1) {
      return;
    } else if (company.tag.length < 1) {
      return;
    } else if (company.period.length < 1) {
      return;
    } else if (company.site.length < 1) {
      return;
    }
     else {
      axios
        .post("/companiesRouter/jobPost", {
          ...company,
          description:convertedContent
        })
        .then((response) => {
          console.log(response);
          if (response.data.compIdCheck === false) {
            alert("이미 사용중인 제목입니다.");
            //setCheckError("이미 사용중인 아이디입니다");
          }
          if (response.data.success === true) {
            window.location.href = "/";
            alert("채용공고 등록 성공.");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (

    <div>

      
      <div className="input-group" type="text" style={{margin:30}}>
        <span className="input-group-text w-25 text-center">회사명</span>
        <textarea className="form-control" aria-label="With textarea" id="name" value={company.name} onChange={onInputHandler}></textarea>
      </div>

      <div className="input-group" type="text" style={{margin:30}}>
        <span className="input-group-text w-25 text-center">제목</span>
        <textarea className="form-control" aria-label="With textarea" id="title" value={company.title} onChange={onInputHandler}></textarea>
      </div>

      <div className="input-group" type="text" style={{margin:30}}>
        <span className="input-group-text w-25 text-center">주요업무</span>
        <textarea className="form-control" aria-label="With textarea" id="field" value={company.field} onChange={onInputHandler} ></textarea>
      </div>

      <div className="input-group" type="text" style={{margin:30}}>
        <span className="input-group-text w-25 text-center">모집인원</span>
        <textarea className="form-control" aria-label="With textarea" id="recruit_number" value={company.recruit_number} onChange={onInputHandler}></textarea>
      </div>

      <div className="input-group" type="text" style={{margin:30}}>
        <span className="input-group-text w-25 text-center">태그</span>
        <textarea className="form-control" aria-label="With textarea" id="tag" value={company.tag} onChange={onInputHandler}></textarea>
      </div>

      <div className="input-group" type="text" style={{margin:30}}>
        <span className="input-group-text w-25 text-center">마감일</span>
        <textarea className="form-control" aria-label="With textarea" id="period" value={company.period} onChange={onInputHandler}></textarea>
      </div>

      <div className="input-group" type="text" style={{margin:30}}>
        <span className="input-group-text w-25 text-center">홈페이지</span>
        <textarea className="form-control" aria-label="With textarea" id="site" value={company.site} onChange={onInputHandler}></textarea>
      </div>
      <div style={{margin:30}}>
        <h4>상세소개글</h4>
                          <div>
                              <Editor
                                  style={{margin:30}}
                                  toolbarClassName="toolbarClassName"
                                  wrapperClassName="wrapperClassName"
                                  editorClassName="editorClassName"
                                  onEditorStateChange={handleEditorChange}
                                  
                                  editorStyle={{ height: 200, margin: 12, borderWidth: 0.5,padding: 10,borderRadius: "2px" }}

                                  
                              />
                              
                          </div>
      </div>
      <div  style={{display: "flex", justifyContent: "center", alignItems: "center", margin:100}}>
        <Button onClick={onClick} variant="primary" size="lg">
          등록하기
        </Button>
      </div>


      
    </div>
  );
};

export default JobPosting;