import { Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material"

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
            <CardActionArea>
                <CardContent>
                <Typography variant="h2">{props.posting.name}</Typography>
                <Typography variant="h3">{props.posting.title}</Typography>
                <Typography variant="h5">{props.posting.field}</Typography>
                <Typography variant="h6">{props.posting.period}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}