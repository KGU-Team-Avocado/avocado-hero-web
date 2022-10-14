import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import * as API from '../../api/API';

export default ({ user, handleUserProfileCard }) => {
    const [uploadedImage, setUploadedImage] = useState(null);

    useEffect(() => {
        setProfileImage();
    }, []);

    const setProfileImage = async () => {
        setUploadedImage(await API.fetchImage(user.user_id)); //프로필 이미지 불러오는 코드
    }

    return (
        <div className="col">
            <Card sx={{ borderRadius: 5 }}
                onClick={() => handleUserProfileCard(user.user_id)}
            >
                <CardActionArea>
                    {
                        uploadedImage
                            ?
                            <CardMedia
                                component="img"
                                height="140"
                                image={uploadedImage}
                                alt="green iguana"
                            />
                            :
                            <svg
                                className="img-thumbnail rounded-circle"
                                width="140"
                                height="140"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 140x140"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#777" />
                                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                            </svg>
                    }
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