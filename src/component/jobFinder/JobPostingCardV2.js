import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from "@mui/material"
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import TechStack from "component/common/TechStack";

export default (props) => {
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
                    <Avatar aria-label="recipe">
                        회사 이미지
                    </Avatar>
                }
                action={
                    <IconButton aria-label="book mark">
                        <BookmarkBorderRoundedIcon />
                    </IconButton>
                }
                title={props.posting.name}
                subheader={props.posting.field}
            />
            <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="채용 공고 이미지"
            />
            <CardContent>
                <Typography variant="h6">
                    {props.posting.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.posting.field}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/* <TechStack tech_stack={props.posting.tech_stack} /> */}
                <Typography variant="body2" color="text.secondary">
                    태그가 들어올 예정
                </Typography>
            </CardActions>
        </Card>
    )
}