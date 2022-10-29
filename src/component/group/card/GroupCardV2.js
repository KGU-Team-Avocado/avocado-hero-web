import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import TechStack from "../../common/TechStack"
import * as API from "../../../api/API"
import defaultImage from '../../../assets/img/logo512.png';

export default (props) => {

    const [uploadedImage, setUploadedImage] = useState(null);

    useEffect(() => {
        setGruopImage();
    }, []);

    const setGruopImage = async () => {
        const image = await API.fetchGroupImage(props.group.imageURL); //프로필 이미지 불러오는 코드
        setUploadedImage(image);
    }
    
    const handleImgError = (e) => {
        e.target.src = defaultImage;
    }

    return (
        <div className="col">
            <Card sx={{ borderRadius: 5 }}
                onClick={() => props.handleGroupCard(props.group)}>
                <CardActionArea>
                    <Stack align="center">
                        <img
                            className="border rounded-top"
                            width="100%"
                            height="200"
                            src={uploadedImage}
                            onError={handleImgError}
                        />
                    </Stack>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.group.group_name}
                            |
                            {props.group.project_name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {props.group.manager}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {props.group.short_description}
                        </Typography>
                        <Typography>
                            <TechStack tech_stack={props.group.tech_stack} />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}