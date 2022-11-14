import { useEffect, useState } from "react";
import axios from "axios";
// import Button from "react-bootstrap/Button";
import JobList from "../../component/jobFinder/JobList";
import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

const JobFinderContainer = () => {

    const [onOff, setOnOff] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const sessionStorage = window.sessionStorage;

    const [postings, setPostings] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

    const [alignment, setAlignment] = useState('false');

    useEffect(() => {
        console.log('리스트');
        if (sessionStorage.getItem("user")) {
            setUserInfo(JSON.parse(sessionStorage.getItem("user")));
        }

        axios.get("/companiesRouter/getPost").then((response) => {
            console.log(JSON.stringify(response.data));
            setPostings(response.data);
        }).catch(function (error) {
            console.log(error);
        });



    }, []);

    useEffect(() => {
        if (userInfo) {
            // axios.post("/bookmarksRouter/getMyBookmark", { user_id: userInfo.user_id }).then((response) => {
            //     console.log(JSON.stringify(response.data))
            //     setBookmarks(response.data);
            // }).catch(function (error) {
            //     console.log(error);
            // });
            getBookmatrkList();
        }
    }, [userInfo]);

    const getBookmatrkList = () => {
        axios.post("/bookmarksRouter/getMyBookmark", { user_id: userInfo.user_id }).then((response) => {
            console.log(JSON.stringify(response.data));
            setBookmarks(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    };

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
        setOnOff(newAlignment === "true" ? true : false);
    };

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
                        <ToggleButtonGroup
                            color="success"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            size="small"
                            aria-label="Platform"
                        >
                            <ToggleButton value="false">전체보기</ToggleButton>
                            <ToggleButton value="true">북마크보기</ToggleButton>
                        </ToggleButtonGroup>
                    }
                </Box>
            </Box>
            <JobList postings={onOff ? bookmarks : postings} userInfo={userInfo} bookmarks={bookmarks} getBookmatrkList={getBookmatrkList} />
        </>
    );
};
export default JobFinderContainer; 