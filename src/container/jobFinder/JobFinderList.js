import { useState } from "react"
import axios from "axios";
import JobPostingCard from "../jobFinder/JobPostingCard"
import JobFinderViewModal from "../jobFinder/JobFinderViewModal";

export default () => {

  const [postings, setPostings] = useState([
      {
          _id: 0,
          company_name:"아보카도",
          title: "프론트엔드 개발자 구합니다",
          field: "ㅇㅇㅇㅇ",
          recruit_number: "00명",
          tag:"상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
          period:"10/00~12/00",
          site:"....ㄱ",
        },
      {
        _id: 1,
        company_name:"상상기업",
        title: "백엔드 개발자 구합니다",
        field: "ㅇㅇㅇㅇㅇ",
        recruit_number: "00명",
        tag:"상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        period:"10/00~12/00",
        site:"....ㄴ",
      },
      {
        _id: 2,
        company_name:"쿠팡",
        title: "상하차알바생 구합니다",
        field: "ㅇㅇ",
        recruit_number: "00명",
        tag:"상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        period:"10/00~12/00",
        site:"....ㄷ",
      },
      {
        _id: 3,
        company_name:"연구실",
        title: "학생 구합니다",
        field: "ㅇㅇㅇ",
        recruit_number: "00명",
        tag:"상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 상세설명 ",
        period:"10/00~12/00",
        site:"....ㄹ",
      },
  ]);

  axios.get("/companiesRouter/getPost").then((response) => {
    console.log(JSON.stringify(response.data))
    setPostings(response.data);
}).catch(function (error) {
    console.log(error);
});


  const [selectedPosting, setSelectedPosting] = useState(null);

  return (
      <>
          <div className="wer">
              <h2>프로젝트 찾기</h2>
              <div className="row">
                  <div className="col-sm-6">훌륭한 팀을 구해보아요</div>
                  <div className="col-sm-6 text-end"><a className="mx-2" href="#">정렬▿</a><a className="mx-2" href="#">필터링▿</a><a href="#" className="mx-2" data-bs-toggle="modal" data-bs-target="#group_create">프로젝트 등록하기</a></div>
              </div>
          </div>
          <div className="row">
              {
                  postings.length > 0
                      ?
                      postings.map((posting) => (
                          <JobPostingCard
                              key={postings._id}
                              posting={posting}
                              setSelectedPosting={setSelectedPosting}
                          />
                      ))
                      :
                      <div>그룹이 없습니다.</div>
              }
          </div>
          {/* <!-- Modal --> */}
          {/* <div className="modal fade" id="group_create" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <GroupCeateModal />
            </div> */}
            <div className="modal fade" id="group_join" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <JobFinderViewModal
                    setSelectedPosting={setSelectedPosting}
                />
            </div>
      </>
  )
}











// const JobPosting = () => {
//   //체용공고 페이지
//   return (
//     <>
//       <h2>jobPosting</h2>
//     </>
//   );
// };

