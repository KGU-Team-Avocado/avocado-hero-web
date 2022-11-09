import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Stack, Typography } from "@mui/material"
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
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
        const companyImage = await API.fetchCompanyImage(props.posting.company_image); //프로필 이미지 불러오는 코드
        const postingImage = await API.fetchCompanyImage(props.posting.posting_image);
        console.log(companyImage);
        if(companyImage !== null) {
            console.log('111')
            setUploadedCompanyImage(companyImage);
        }
        if(postingImage !== null) {
            setUploadedPostingImage(postingImage);
        }
        //setUploadedCompanyImage(await API.fetchCompanyImage(props.posting.company_image));
        //setUploadedPostingImage(await API.fetchCompanyImage(props.posting.posting_image));
    }

    const handleImgError = (e) => {
        e.target.src = defaultImage;
    }
    // 수정 예정
    return (
        <Card
            sx={{
                my:2,
                // backgroundColor:'#f3f3f3'
            }}
            onClick={() => props.handleClick(props.posting)}
        >
            {/* <CardActionArea>
                <CardContent>
                <Typography variant="h2">{props.posting.name}</Typography>
                <Typography variant="h3">{props.posting.title}</Typography>
                <Typography variant="h5">{props.posting.field}</Typography>
                <Typography variant="h6">{props.posting.period}</Typography>
                </CardContent>
            </CardActionArea> */}
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={uploadedCompanyImage}  >
                        회사 이미지
                    </Avatar>
                }
                action={
                    <IconButton aria-label="book mark">
                        <BookmarkBorderRoundedIcon />
                    </IconButton>
                }
                title={props.posting.name}
                subheader={props.posting.job_tag}
            />
            <Divider sx={{ margin: 0 }}/>
            <CardMedia
                component="img"
                //height="194"
                image={uploadedPostingImage}
                alt="채용 공고 이미지"
                sx={{
                    margin: 0
                }}
            />
            <Divider sx={{ margin: 0 }}/>
            <CardContent sx={{ py: '8px' }}>
                <Typography variant="h5">
                    {props.posting.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ~{props.posting.period}
                </Typography>
            </CardContent>
            <Divider sx={{ margin: 0 }}/>
            <CardActions disableSpacing sx={{ px: '24px' }}>
                <TechStack tech_stack={props.posting.skill_tags} />
            </CardActions>
        </Card>
    )
}