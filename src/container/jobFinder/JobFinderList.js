import { useEffect, useState } from "react"
import axios from "axios";
import JobPostingCard from "../jobFinder/JobPostingCard"
import Button from "react-bootstrap/Button";
import { BiBookmark } from "react-icons/bi";
import JobList from "../../component/jobFinder/JobList";

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
            axios.post("/bookmarksRouter/getMyBookmark", { user_id: userInfo.user_id }).then((response) => {
                console.log(JSON.stringify(response.data))
                setBookmarks(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, [userInfo]);


    return (
        <>
            <>
                <div className="my-3 d-flex justify-content-between">
                    <div><h2>채용공고 리스트</h2></div>
                    <div></div>
                    <div className="btn-group me-2">
                        <button type="button" className={`btn btn-sm ${onOff ? 'btn-light' : 'btn-secondary'}`} onClick={() => setOnOff(false)}>전체보기</button>
                        <button type="button" className={`btn btn-sm ${onOff ? 'btn-secondary' : 'btn-light'}`} onClick={() => setOnOff(true)}>북마크보기</button>
                    </div>
                </div>
                <JobList postings={onOff ? bookmarks : postings} userInfo={userInfo} bookmarks={bookmarks} />
            </>
        </>
    )
}








