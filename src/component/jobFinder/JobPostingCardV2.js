import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Stack, Typography } from "@mui/material"
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import TechStack from "component/common/TechStack";
import defaultImage from '../../assets/img/logo512.png';
import { useEffect, useState } from "react";
import * as API from "../../api/API"

export default (props) => {
    const [uploadedCompanyImage, setUploadedCompanyImage] = useState(defaultImage);
    const [uploadedPostingImage, setUploadedPostingImage] = useState(defaultImage);

    useEffect(() => {
        setGruopImage();
    }, []);

    const setGruopImage = async () => {
        if(props.posting.company_image !== null) {
            console.log('111')
            const companyImage = await API.fetchCompanyImage(props.posting.company_image); //프로필 이미지 불러오는 코드
            setUploadedCompanyImage(companyImage);
        }
        if(props.posting.posting_image !== null) {
            const postingImage = await API.fetchCompanyImage(props.posting.posting_image);
            setUploadedPostingImage(postingImage);
        }
    }

    const handleBookMark = () => {
        if (props.bookmarkBtn) {
            props.bookMarkDelete(props.posting?._id)
        } else {
            props.bookMarkSave(props.posting?._id)
        }
    }

    // 수정 예정
    return (
        <Card
            sx={{
                my:2,
            }}
            onClick={() => props.handleClick(props.posting)}
        >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" alt={props.posting.name} src={uploadedCompanyImage}  >
                        회사 이미지
                    </Avatar>
                }
                action={
                    <IconButton 
                        aria-label="book mark" 
                        onClick={(e) => { 
                            e.stopPropagation(); // 이벤트 버블링 방지 (handleClick 실행x)
                            handleBookMark(); 
                        }}>
                        {props.bookmarkBtn ? <BookmarkRoundedIcon color="warning" /> : <BookmarkBorderRoundedIcon />}
                    </IconButton>
                }
                title={props.posting.name}
                subheader={props.posting.job_tag}
            />

            <Divider sx={{ margin: 0 }}/>

            <CardMedia
                component="img"
                height="150"
                image={uploadedPostingImage}
                alt="채용 공고 이미지"
                sx={{
                    margin: 0
                }}
            />

            <Divider sx={{ marginTop: 0 }}/>

            <CardContent sx={{ py: '8px' }}>
                <Typography variant="h5">
                    {props.posting.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ~{props.posting.period}
                </Typography>

                <Divider />

                <TechStack tech_stack={props.posting.skill_tags} />
            </CardContent>
        </Card>
    )
}