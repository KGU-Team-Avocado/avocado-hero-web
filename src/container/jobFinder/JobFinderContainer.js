import { useEffect, useState } from "react"
import axios from "axios";
import JobPostingCard from "./JobPostingCard"
import Button from "react-bootstrap/Button";
import { BiBookmark } from "react-icons/bi";
import JobList from "../../component/jobFinder/JobList";
import { Box, Typography } from "@mui/material";
import MKButton from "component/common/mui-components/MKButton";

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
            <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={5}
            >
                <Box>
                    <Typography variant="h2">채용공고 리스트</Typography>
                </Box>
                <Box>
                    {
                        userInfo !== null
                        &&
                        <>
                            <MKButton
                                variant={onOff ? 'outlined' : 'contained'}
                                color='dark'
                                onClick={() => setOnOff(false)}
                            >
                                전체보기
                            </MKButton>
                            <MKButton
                                variant={onOff ? 'contained' : 'outlined'}
                                color='dark'
                                onClick={() => setOnOff(true)}
                            >
                                북마크보기
                            </MKButton>
                        </>
                    }
                </Box>
            </Box>
            <JobList postings={onOff ? bookmarks : postings} userInfo={userInfo} bookmarks={bookmarks} />
        </>
    )
}
