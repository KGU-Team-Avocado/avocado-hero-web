import { Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import * as API from '../../api/API';
import defaultImage from '../../assets/img/logo512.png';

export default ({ user, handleUserProfileCard }) => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        if(isLoaded===false){
            setProfileImage();
        }
        return () => {
            setLoaded(true);
        }
    }, []);

    const setProfileImage = async () => {
        setUploadedImage(await API.fetchProfileImage(user.imgURL)); //프로필 이미지 불러오는 코드
        setLoaded(true);
    }

    const handleImgError = (e) => {
        e.target.src = defaultImage;
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
                                onError={handleImgError}
                            />
                            :
                            <Skeleton variant="circular" width={140} height={140} />
                    }
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {user.user_id}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {user.name}
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