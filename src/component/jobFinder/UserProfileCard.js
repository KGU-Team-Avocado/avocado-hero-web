import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

export default ({ user, handleUserProfileCard }) => {
    return (
        <div className="col">
            <Card sx={{ borderRadius: 5 }}
                onClick={() => handleUserProfileCard(user.user_id)}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="./logo512.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {user.user_id}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {user.user_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div>희망 직무 : </div>
                            <div>평점 : </div>
                            <div>대표 프로젝트 : </div>
                            <div>선호하는 기술 : </div>
                            <div>평점 : </div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}