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
import { Box, Stack, TextField, Typography } from "@mui/material";


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
      <Stack spacing={2}>

        <TextField label="회사명" id="name" value={company.name} onChange={onInputHandler} />

        <TextField label="제목" id="title" value={company.title} onChange={onInputHandler} />

        <TextField label="주요업무" id="field" value={company.field} onChange={onInputHandler} />

        <TextField  label="모집인원" id="recruit_number" value={company.recruit_number} onChange={onInputHandler} />

        <TextField label="마감일" id="period" value={company.period} onChange={onInputHandler} />

        <TextField  label="홈페이지" id="site" value={company.site} onChange={onInputHandler} />


        <Typography variant="h4">
          태그
        </Typography>
        <MultiSelect
          options={tags}
          value={selectedTags}
          onChange={setSelectedTags}
        />

        <Typography variant="h4">
          상세소개글
        </Typography>
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



      </Stack>

    </>

  );
};

export default JobPosting;