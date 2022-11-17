import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import TechStack from "../../common/TechStack"
import * as API from "../../../api/API"
import defaultImage from '../../../assets/img/logo512.png';
import BadgeStack from "component/common/BadgeStack";

const GroupCardV2 = (props) => {

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
        <Card sx={{ borderRadius: 5 }}
            onClick={() => props.handleGroupCard(props.group)}>
            <CardActionArea>
                <Stack align="center">
                    <img
                        className="border rounded-top"
                        width="100%"
                        height="200"
                        alt=""
                        src={uploadedImage}
                        onError={handleImgError}
                    />
                </Stack>
                <CardContent>
                    <Stack direction="row" justifyContent="space-between">
                        <Box>
                            <Chip label={props.group.group_name} color="secondary" variant="outlined" />
                        </Box>
                        <Box>
                            <Chip label={props.group.close_application ? "모집종료" : "모집중"} color={props.group.close_application ? "error" : "success"} />
                        </Box>
                    </Stack>
                    <Typography gutterBottom variant="h3">
                        {props.group.project_name}
                    </Typography>

                    <Typography variant="body2">
                        {props.group.short_description}
                    </Typography>
                    <Box>
                        {/* <TechStack tech_stack={props.group.tech_stack} /> */}
                        <BadgeStack type='tech' stack={props.group.tech_stack} />
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default GroupCardV2;