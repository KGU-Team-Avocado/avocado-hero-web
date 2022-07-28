import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import div from "react-bootstrap/Container";
import axios from "axios";

import { useRef, useState } from "react";

const JobPosting = () => {
  const CompanyIDInput = useRef();
  const CompanyNameInput = useRef();
  const CompanyTitleInput = useRef();
  const CompanyFieldInput = useRef();
  const CompanyRecruitNumberInput = useRef();
  const CompanyTagInput = useRef();
  const CompanyPeriodInput = useRef();
  const CompanySiteInput = useRef();

  const [companyID, setCompanyID] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");
  const [companyField, setCompanyField] = useState("");
  const [companyRecruitNumber, setCompanyRecruitNumber] = useState("");
  const [companyTag, setCompanyTag] = useState("");
  const [companyPeriod, setCompanyPeriod] = useState("");
  const [companySite, setCompanySite] = useState("");

  //const [checkError, setCheckError] = useState("");

  const onCompanyIDHandler = (e) => {
    setCompanyID(e.target.value);
  };

  const onCompanyNameHandler = (e) => {
    setCompanyName(e.target.value);
  };

  const onCompanyTitleHandler = (e) => {
    setCompanyTitle(e.target.value);
  };

  const onCompanyFieldHandler = (e) => {
    setCompanyField(e.target.value);
  };

  const onCompanyRecruitNumberHandler = (e) => {
    setCompanyRecruitNumber(e.target.value);
  };

  const onCompanyTagHandler = (e) => {
    setCompanyTag(e.target.value);
  };

  const onCompanyPeriodHandler = (e) => {
    setCompanyPeriod(e.target.value);
  };

  const onCompanySiteHandler = (e) => {
    setCompanySite(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();

    if (companyID.length < 1) {
      CompanyIDInput.current.focus();
      return;
    } else if (companyName.length < 1) {
      CompanyNameInput.current.focus();
      return;
    } else if (companyTitle.length < 1) {
      CompanyTitleInput.current.focus();
      return;
    } else if (companyField.length < 1) {
      CompanyFieldInput.current.focus();
      return;
    } else if (companyRecruitNumber.length < 1) {
      CompanyRecruitNumberInput.current.focus();
      return;
    } else if (companyTag.length < 1) {
      CompanyTagInput.current.focus();
      return;
    } else if (companyPeriod.length < 1) {
      CompanyPeriodInput.current.focus();
      return;
    } else if (companySite.length < 1) {
      CompanySiteInput.current.focus();
      return;
    }
     else {

      console.log(companyID + companyName + companyTitle + companyField + companyRecruitNumber);
      axios
        .post("/companiesRouter/jobPost", {
          company_id: companyID,
          company_company_name: companyName,
          company_title: companyTitle,
          company_field: companyField,
          company_recruit_number: companyRecruitNumber,
          company_tag: companyTag,
          company_period: companyPeriod,
          company_site: companySite,
        })
        .then((response) => {
          console.log(response);
          if (response.data.idCheck === false) {
            alert("이미 사용중인 아이디입니다.");
            //setCheckError("이미 사용중인 아이디입니다");
          }
          if (response.data.success === true) {
            window.location.href = "/";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (

    <div>

      <div className="input-group" type="text" value={companyID} ref={CompanyIDInput} onChange={onCompanyIDHandler}>
        <span className="input-group-text">companyID</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>

      <div className="input-group" type="text" value={companyName} ref={CompanyNameInput} onChange={onCompanyNameHandler}>
        <span className="input-group-text">companyName</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>

      <div className="input-group" type="text" value={companyTitle} ref={CompanyTitleInput} onChange={onCompanyTitleHandler}>
        <span className="input-group-text">companyTitle</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>

      <div className="input-group" type="text" value={companyField} ref={CompanyFieldInput} onChange={onCompanyFieldHandler}>
        <span className="input-group-text">companyField</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>

      <div className="input-group" type="text" value={companyRecruitNumber} ref={CompanyRecruitNumberInput} onChange={onCompanyRecruitNumberHandler}>
        <span className="input-group-text">companyRecruitNumber</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>

      <div className="input-group" type="text" value={companyTag} ref={CompanyTagInput} onChange={onCompanyTagHandler}>
        <span className="input-group-text">companyTag</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>

      <div className="input-group" type="text" value={companyPeriod} ref={CompanyPeriodInput} onChange={onCompanyPeriodHandler}>
        <span className="input-group-text">companyPeriod</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>

      <div className="input-group" type="text" value={companySite} ref={CompanySiteInput} onChange={onCompanySiteHandler}>
        <span className="input-group-text">companySite</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>

      <button onClick={onClick}>
        das
      </button>
      


      
    </div>
  );
};

export default JobPosting;