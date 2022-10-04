import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import DOMPurify from "dompurify";
import MKButton from "component/common/mui-components/MKButton";

export default (props) => {
    const { selected, bookmarkBtn, bookMarkSave, bookMarkDelete } = props;


    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    };

    return (
        <>


            <Box
                sx={{
                    p: {
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                        xxl: 6
                    },
                    // width:"100%"
                }}
            >
                <DialogTitle id="scroll-dialog-title">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h3">
                            지원하기 : {selected?.title}
                        </Typography>
                        <IconButton size="large" onClick={() => props.setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    {
                        <>
                            <div>
                                <h5 style={{ marginTop: 16 }}><b>회사명</b></h5>
                                <p>{selected?.name}</p>
                                <hr />
                                <h5><b>주요업무</b></h5>
                                <p>{selected?.field}</p>
                                <hr />
                                <h5><b>태그</b></h5>
                                <p>{selected?.tag}</p>
                                <hr />
                                <h5><b >상세소개글</b></h5>
                                <div dangerouslySetInnerHTML={createMarkup(selected?.description)}></div>
                                <hr />
                                <h5><b>모집인원</b></h5>
                                <p>{selected?.recruit_number}</p>
                                <hr />
                                <h5><b>마감일</b></h5>
                                <p>{selected?.period}</p>
                                <hr />
                                <h5><b>홈페이지</b></h5>
                                <p>{selected?.site}</p>
                            </div>
                        </>
                    }
                </DialogContent>
                {/* <DialogActions> */}
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <MKButton variant={bookmarkBtn ? "contained" : "outlined"} color="warning" onClick={() => bookmarkBtn ? bookMarkDelete(selected?._id) : bookMarkSave(selected?._id)} fullWidth><BiBookmark />즐겨찾기 {bookmarkBtn ? "삭제" : "등록"}</MKButton>
                    <MKButton variant="contained" color="info" fullWidth>지원하기</MKButton>
                </Stack>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}