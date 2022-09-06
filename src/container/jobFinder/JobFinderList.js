import { useEffect, useState } from "react"
import axios from "axios";
import JobPostingCard from "../jobFinder/JobPostingCard"
import JobFinderViewModal from "../jobFinder/JobFinderViewModal";
import Button from "react-bootstrap/Button";
import { BiBookmark } from "react-icons/bi";
import JobList from  "../../component/jobFinder/JobList";

export default () => {

    const [onOff, setOnOff] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const sessionStorage = window.sessionStorage;

    const [postings, setPostings] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);


    useEffect(() => {
        console.log('리스트')
        if (sessionStorage.getItem("user")) {
            setUserInfo(JSON.parse(sessionStorage.getItem("user")));
        }

        axios.get("/companiesRouter/getPost").then((response) => {
            console.log(JSON.stringify(response.data))
            setPostings(response.data);
        }).catch(function (error) {
            console.log(error);
        });

        

    }, []);

    useEffect(() => {
        if (userInfo) {
            axios.post("/bookmarksRouter/getMyBookmark", {user_id: userInfo.user_id}).then((response) => {
                console.log(JSON.stringify(response.data))
                setBookmarks(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }       
    }, [userInfo]);


    return (
        <>
            <div>
                {
                    onOff
                        ?
                        <>
                            <div className="btn-group me-2 my-3">
                                <Button type="button" className="btn btn-light" onClick={() => setOnOff(false)}>전체보기</Button>
                                <Button type="button" className="btn btn-secondary" onClick={() => setOnOff(true)}>북마크보기</Button>
                            </div>
                            {/* <Button onClick={() => setOnOff(false)}>전체보기</Button> */}
                            {/* {JSON.stringify(bookmarks)} */}
                            <JobList postings={bookmarks} userInfo={userInfo} bookmarks={bookmarks} />
                        </>
                        :
                        <>
                            <div className="btn-group me-2 my-3">
                                <Button type="button" className="btn btn-secondary" onClick={() => setOnOff(false)}>전체보기</Button>
                                <Button type="button" className="btn btn-light"onClick={() => setOnOff(true)}>북마크보기</Button>
                            </div>
                            {/* <Button onClick={() => setOnOff(true)}>북마크 보기</Button> */}
                            <JobList postings={postings} userInfo={userInfo} bookmarks={bookmarks} />
                        </>
                }
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








