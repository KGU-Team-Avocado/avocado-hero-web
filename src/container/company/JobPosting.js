import Button from "react-bootstrap/Button";

import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from 'draft-convert';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import * as API from "../../api/API"
import { Autocomplete, Box, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { tags } from "../../assets/tag/tags";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const JobPosting = () => {
  const [selectedJobTag, setSelectedJobTag] = useState([]);
  const [selectedSkillTags, setSelectedSkillTags] = useState([]);
  console.log(tags.job)
  const [company, setCompany] = useState({
    name: '',
    title: '',
    recruit_number: '',
    period: '',
    site: '',
    // description:'',
  })

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null);

  //const [checkError, setCheckError] = useState("");

  const [postingimage, setPostingImage] = useState({ preview: '', data: '' });
  const [companyimage, setCompanyImage] = useState({ preview: '', data: '' });

  const handleFileChange = (e, setState) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    console.log(img)
    setState(img)
  }

  const onInputHandler = (e) => {
    console.log(company)
    setCompany({
      ...company,
      [e.target.id]: e.target.value,
      //  
    });

  };

  const handleJobTagChange = (event) => {
    setSelectedJobTag(event.target.value);
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
    const newPostingData = {
      ...company,
      job_tag: selectedJobTag.label,
      skill_tags: selectedSkillTags.map((item) => {return item.value}),
      description: convertedContent
    };
    // e.preventDefault();
    console.log(newPostingData)
    alert('버튼은 눌렀음')
    // console.log(Object.keys(company).map((key)=>company[key]))
    const hasValue = Object.values(newPostingData).includes("");
    if (hasValue) {
      alert('빈 칸을 모두 채워주세요')
    }
    else {
      console.log('저장시도')
      const response = await API.saveJobPost(newPostingData);
      console.log(response)
      if (response.data.compIdCheck === false) {
        alert("이미 사용중인 제목입니다.");
        return;
      }
      if (response.data.success === true) {
        if (postingimage.data !== '') {
          alert('yes img')
          uploadpostingImage(response.data.company._id);
        }
        if (companyimage.data !== '') {
          alert('yes img')
          uploadcompanyImage(response.data.company._id);
        }
        alert("채용공고 등록 성공.");
        window.location.reload();
      }
    }
  };

  const uploadpostingImage = async (posting_id) => {
    let formData = new FormData()
    formData.append('posting_id', posting_id);
    formData.append('file', postingimage.data); //반드시 file을 마지막에 append 해야 오류가 없음!!
    const response = await fetch('/companiesRouter/uploadposingImage', {
      method: 'POST',
      body: formData,
    })
    if (response) {
      // window.location.reload();
      console.log(response);
    }
  }

  const uploadcompanyImage = async (posting_id) => {
    let formData = new FormData()
    formData.append('posting_id', posting_id);
    formData.append('file', companyimage.data); //반드시 file을 마지막에 append 해야 오류가 없음!!
    const response = await fetch('/companiesRouter/uploadcompanyImage', {
      method: 'POST',
      body: formData,
    })
    if (response) {
      // window.location.reload();
      console.log(response)
    }
  }
  
  return (
    <>
      <Stack spacing={2}>
        <Stack>
          <Typography variant='h5'>공고 사진</Typography>
          <input className='form-control' type='file' name='file' onChange={(e) => handleFileChange(e, setPostingImage)}></input>
        </Stack>
        {
          postingimage.preview &&
          <>
            <Box my={3}>
              <img src={postingimage.preview} width='50%' height='auto' />
            </Box>
          </>
        }

        <Stack>
          <Typography variant='h5'>회사 사진</Typography>
          <input className='form-control' type='file' name='file' onChange={(e) => handleFileChange(e, setCompanyImage)}></input>
        </Stack>
        {
          companyimage.preview &&
          <>
            <Box my={3}>
              <img src={companyimage.preview} width='50%' height='auto' />
            </Box>
          </>
        }

        <TextField label="회사명" id="name" value={company.name} onChange={onInputHandler} />

        <TextField label="제목" id="title" value={company.title} onChange={onInputHandler} />

        <Autocomplete
          value={selectedJobTag}
          onChange={(event, newValue) => {
            setSelectedJobTag(newValue);
          }}
          options={tags.job}
          // sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="직무" />}
        />

        <TextField label="모집인원" id="recruit_number" value={company.recruit_number} onChange={onInputHandler} />

        <TextField label="마감일" id="period" value={company.period} onChange={onInputHandler} />

        <TextField label="홈페이지" id="site" value={company.site} onChange={onInputHandler} />

        <Autocomplete
          multiple
          options={tags.tech}
          disableCloseOnSelect
          getOptionLabel={(option) => option.label}
          value={selectedSkillTags}
          onChange={(event, newValue) => {
            setSelectedSkillTags(newValue);
          }}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.label}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label="스킬" placeholder="스킬 태그" />
          )}
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