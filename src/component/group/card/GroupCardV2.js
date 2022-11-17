import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import TechStack from "../../common/TechStack"
import * as API from "../../../api/API"
import defaultImage from '../../../assets/img/logo512.png';
import BadgeStack from "component/common/BadgeStack";
import ResponsiveCard from "component/common/ResponsiveCard";

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
        // <Card sx={{ borderRadius: 5 }}
        //     onClick={() => props.handleGroupCard(props.group)}>
        //     <CardActionArea>
        //         <Stack align="center">
        //             <img
        //                 className="border rounded-top"
        //                 width="100%"
        //                 height="200"
        //                 alt=""
        //                 src={uploadedImage}
        //                 onError={handleImgError}
        //             />
        //         </Stack>
        //         <CardContent>
        //             <Stack direction="row" justifyContent="space-between">
        //                 <Box>
        //                     <Chip label={props.group.group_name} color="secondary" variant="outlined" />
        //                 </Box>
        //                 <Box>
        //                     <Chip label={props.group.close_application ? "모집종료" : "모집중"} color={props.group.close_application ? "error" : "success"} />
        //                 </Box>
        //             </Stack>
        //             <Typography gutterBottom variant="h3">
        //                 {props.group.project_name}
        //             </Typography>

        //             <Typography variant="body2">
        //                 {props.group.short_description}
        //             </Typography>
        //             <Box>
        //                 <BadgeStack type='tech' stack={props.group.tech_stack} />
        //             </Box>
        //         </CardContent>
        //     </CardActionArea>
        // </Card>
        <ResponsiveCard
            actionArea
            onClick={() => props.handleGroupCard(props.group)}
        >
            <Grid container spacing={5}>
                <Grid item xs={12} md={5}>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <img
                            className="border rounded-top"
                            width="100%"
                            //  height=""
                            alt=""
                            src={uploadedImage}
                            onError={handleImgError}
                        />
                        {/* <Box
                            sx={{
                                width: 150,
                                height: 150,
                                backgroundColor: 'gray',
                                '&:hover': {
                                    backgroundColor: 'gray.dark',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        /> */}
                    </Stack>

                </Grid>
                <Grid item xs={12} md={7}>
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
                        <BadgeStack type='tech' stack={props.group.tech_stack} />
                    </Box>
                </Grid>
            </Grid>
        </ResponsiveCard>
    )
}

export default GroupCardV2;