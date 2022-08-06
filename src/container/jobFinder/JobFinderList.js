import { useEffect, useState } from "react"
import axios from "axios";
import JobPostingCard from "../jobFinder/JobPostingCard"
import JobFinderViewModal from "../jobFinder/JobFinderViewModal";

export default () => {

    const [postings, setPostings] = useState([
        // {
        //     _id: 0,
        //     manager:"yeonsu",
        //     groupName: "아보카도콘솔",
        //     postingTitle: "프론트엔드 개발자 채용",
        //     description:"경력/신입",
        //     deadline:"2022.08.10"
        // },
        // {
        //     _id: 1,
        //     manager:"yeonsu",
        //     groupName: "아보카도콘솔히어로",
        //     postingTitle: "백엔드 개발자 채용",
        //     description:"경력/신입",
        //     deadline:"2022.08.20"
        // }
    ]);

    useEffect(() => {
        console.log('리스트')
        axios.get("/companiesRouter/getPost").then((response) => {
            console.log(JSON.stringify(response.data))
            setPostings(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);


    const [selected, setSelected] = useState(null);

    // const [postings, setPostings] = useState([]);

    // useEffect(()=>{
    //     axios.get("/companiesRouter/getPost").then((response) => {
    //         console.log(JSON.stringify(response.data))
    //         setPostings(response.data);
    //     }).catch(function (error) {
    //         console.log(error);
    //     });
    // },[]);

    // const [selectedPosting, setSelectedPosting] = useState(null);

    // useEffect(()=>{
    //     console.log('하이')
    // },[selectedPosting]);

    return (
        <>
            <div>
                {
                    postings.length > 0
                        ?
                        postings.map((posting) => (
                            <JobPostingCard
                                key={posting._id}
                                posting={posting}
                                setSelected={setSelected}
                            />
                            // <div>{posting.company_title}</div>
                        ))
                        :
                        <div>채용공고가 없습니다.</div>
                }
            </div>

            <div className="modal" id="job_modal" tabindex="-1" aria-labelledby="..." aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content rounded-4 shadow">
                        {
                            selected &&
                            <>
                                <div className="modal-body p-5">
                                    <div className="modal-header">
                                        <h2 className="fw-bold mb-0">{selected.company_title}</h2>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div>
                                        {
                                            JSON.stringify(selected)
                                        }
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>

            {/* <div className="wer">
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
            </div> */}
            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="group_create" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <GroupCeateModal />
            </div> */}
            {/* <div className="modal fade" id="group_join" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <JobFinderViewModal
                    setSelectedPosting={setSelectedPosting}
                />
            </div> */}


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

