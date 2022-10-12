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
import * as API from "../../api/API"
import { MultiSelect } from "react-multi-select-component";
import { Box, Typography } from "@mui/material";


const JobPosting = () => {

  const tags = [
    { label: "#리액트", value: "react" },
    { label: "#자바", value: "java" },
    { label: "#html", value: "html" },
  ];

  const [selectedTags, setSelectedTags] = useState([]);

  const [company, setCompany] = useState({
    name: '',
    title: '',
    field: '',
    recruit_number: '',
    tag: '',
    period: '',
    site: '',
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
      [e.target.id]: e.target.value,
      //  
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

  const onClick = async () => {
    // e.preventDefault();
    alert('버튼은 눌렀음')
    // console.log(Object.keys(company).map((key)=>company[key]))
    if (company.name.length < 1) {
      console.log('1')
      return;
    } else if (company.title.length < 1) {
      console.log('2')
      return;
    } else if (company.field.length < 1) {
      console.log('3')
      return;
    } else if (company.recruit_number.length < 1) {
      console.log('4')
      return;
      // } else if (company.tag.length < 1) {
      //   console.log('5')
      //   return;
    } else if (company.period.length < 1) {
      console.log('6')
      return;
    } else if (company.site.length < 1) {
      console.log('7')
      return;
    }
    else {
      console.log('저장시도')
      await API.saveJobPost({
        ...company,
        description: convertedContent
      });
    }
  };

  const line = {
    height: "2px",
    width: "500px",
    overflow: "visible",
    color: "#999",
    position: "relative",
    margin: "2em auto",
    background: "linear-gradient(to right, transparent, #999, transparent)",
  }

  return (
    <>
    <Box>
      <Typography variant="h3">

      </Typography>
    </Box>

      <div>
        <div style={{
          // margin:30, 
          width: "200px", textAlign: "center", fontSize: "20px"
        }}>회사명
          <div style={{
            height: "2px",
            overflow: "visible",
            color: "#999",
            position: "relative",
            // margin: "2em auto",
            background: "linear-gradient(to right, transparent, #3E7925, transparent)",
          }}>
          </div>
        </div>
        <input className="form-control" aria-label="With textarea" id="name" value={company.name} onChange={onInputHandler} style={{ margin: 10, marginBottom: "30px" }}></input>


        <div style={{
          // margin:30, 
          width: "200px", textAlign: "center", fontSize: "20px"
        }}>제목
          <div style={{
            height: "2px",
            overflow: "visible",
            color: "#999",
            position: "relative",
            // margin: "2em auto",
            background: "linear-gradient(to right, transparent, #849635, transparent)",
          }}>
          </div>
        </div>
        <input className="form-control" aria-label="With textarea" id="title" value={company.title} onChange={onInputHandler} style={{ margin: 10, marginBottom: "30px" }}></input>

        <div style={{
          // margin:30, 
          width: "200px", textAlign: "center", fontSize: "20px"
        }}>주요업무
          <div style={{
            height: "2px",
            overflow: "visible",
            color: "#999",
            position: "relative",
            // margin: "2em auto",
            background: "linear-gradient(to right, transparent, #B4CB33, transparent)",
          }}>
          </div>
        </div>
        <input className="form-control" aria-label="With textarea" id="field" value={company.field} onChange={onInputHandler} style={{ margin: 10, marginBottom: "30px" }}></input>

        <div style={{
          // margin:30, 
          width: "200px", textAlign: "center", fontSize: "20px"
        }}>모집인원
          <div style={{
            height: "2px",
            overflow: "visible",
            color: "#999",
            position: "relative",
            // margin: "2em auto",
            background: "linear-gradient(to right, transparent, #F6C74B, transparent)",
          }}>
          </div>
        </div>
        <input className="form-control" aria-label="With textarea" id="recruit_number" value={company.recruit_number} onChange={onInputHandler} style={{ margin: 10, marginBottom: "30px" }}></input>

        <div style={{
          // margin:30, 
          width: "200px", textAlign: "center", fontSize: "20px"
        }}>태그
          <div style={{
            height: "2px",
            overflow: "visible",
            color: "#999",
            position: "relative",
            // margin: "2em auto",
            background: "linear-gradient(to right, transparent, #F2E797, transparent)",
          }}>
          </div>
        </div>
        {/* <input className="form-control" aria-label="With textarea" id="tag" value={company.tag} onChange={onInputHandler} style={{margin:10, marginBottom:"30px"}}></input> */}
        <MultiSelect
          options={tags}
          value={selectedTags}
          onChange={setSelectedTags}
        />

        <div style={{
          // margin:30, 
          width: "200px", textAlign: "center", fontSize: "20px"
        }}>마감일
          <div style={{
            height: "2px",
            overflow: "visible",
            color: "#999",
            position: "relative",
            // margin: "2em auto",
            background: "linear-gradient(to right, transparent, #C7823D, transparent)",
          }}>
          </div>
        </div>
        <input className="form-control" aria-label="With textarea" id="period" value={company.period} onChange={onInputHandler} style={{ margin: 10, marginBottom: "30px" }}></input>

        <div style={{
          // margin:30, 
          width: "200px", textAlign: "center", fontSize: "20px"
        }}>홈페이지
          <div style={{
            height: "2px",
            overflow: "visible",
            color: "#999",
            position: "relative",
            // margin: "2em auto",
            background: "linear-gradient(to right, transparent, #E37D4E, transparent)",
          }}>
          </div>
        </div>
        <input className="form-control" aria-label="With textarea" id="site" value={company.site} onChange={onInputHandler} style={{ margin: 10, marginBottom: "30px" }}></input>

        <div style={{
          // margin:30, 
          width: "200px", textAlign: "center", fontSize: "20px"
        }}>상세소개글
          <div style={{
            height: "2px",
            overflow: "visible",
            color: "#999",
            position: "relative",
            // margin: "2em auto",
            background: "linear-gradient(to right, transparent, #900C3F, transparent)",
          }}>
          </div>
        </div>

        <div>

          <div>
            <Editor
              style={{ margin: 30 }}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={handleEditorChange}

              editorStyle={{ height: 200, margin: 12, borderWidth: 0.5, padding: 10, borderRadius: "2px" }}


            />

          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 100 }}>
          <Button onClick={() => onClick()} variant="primary" size="lg">
            등록하기
          </Button>
        </div>



      </div>

    </>

  );
};

export default JobPosting;