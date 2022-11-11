import JobPostingCard from "../../container/jobFinder/JobPostingCard"
import { useEffect, useState } from "react"
import axios from "axios";
import { BiBookmark } from "react-icons/bi";
import DOMPurify from "dompurify";
import JobPostingCardV2 from "./JobPostingCardV2";
import JobFinderViewModal from "./modal/JobFinderViewModal";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";


export default (props) => {

    const [selected, setSelected] = useState(null);
    const [postingModalOpen, setPostingModalOpen] = useState(false);
    const [bookmarkBtn, setBookmarkBtn] = useState(false);
    const navigate = useNavigate();

    const onClick = (e) => {
        navigate("/jobFinder");
        alert("지원이 완료되었습니다.");
    }

    const bookMarkSave = (company_id) => {
        // window.location.href = "/jobFinder";

        axios
            .post("/bookmarksRouter/bookmarkSave", {
                user_id: props.userInfo.user_id,
                company_id: company_id,
            })
            .then((response) => {
                console.log(response.data);
                alert("북마크에 추가되었습니다.");
                setBookmarkBtn(true);
                props.getBookmatrkList();
                setPostingModalOpen(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const bookMarkDelete = (company_id) => {
        axios
            .post("/bookmarksRouter/bookmarkDelete", {
                user_id: props.userInfo.user_id,
                company_id: company_id,
            })
            .then((response) => {
                console.log(response.data);
                alert("북마크에서 삭제되었습니다.");
                setBookmarkBtn(false);
                props.getBookmatrkList();
                setPostingModalOpen(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleClick = (posting) => {
        const idx = props.bookmarks.findIndex((bookmarks) => bookmarks._id === posting._id);
        if (idx == -1) {
            setBookmarkBtn(false);
        }
        else {
            setBookmarkBtn(true);
        }
        setPostingModalOpen(true);
        setSelected(posting);
    }

    return (
        <>
            <Grid container spacing={2}>
                {
                    props.postings.length > 0
                        ?
                        props.postings.map((posting) => (
                            <Grid item xs={12} xl={3} lg={4} sm={6}>
                                <JobPostingCardV2
                                    key={posting._id}
                                    posting={posting}
                                    handleClick={handleClick}
                                    bookmarkBtn={bookmarkBtn}
                                    bookMarkSave={bookMarkSave}
                                    bookMarkDelete={bookMarkDelete}
                                />
                            </Grid>
                        ))
                        :
                        <Typography variant="h3">채용공고가 없습니다.</Typography>
                }
            </Grid>

            {/* new */}
            <ModalStaticBackdrop
                keepMounted
                width="md"
                open={postingModalOpen}
                component={<JobFinderViewModal
                    setOpen={setPostingModalOpen}
                    selected={selected}
                    bookmarkBtn={bookmarkBtn}
                    bookMarkSave={bookMarkSave}
                    bookMarkDelete={bookMarkDelete}
                />}
            />
        </>
    )
}
