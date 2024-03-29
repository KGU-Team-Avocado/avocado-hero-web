import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import TechStack from "../../common/TechStack"
import * as API from "../../../api/API"
import defaultImage from '../../../assets/img/logo512.png';
import BadgeStack from "component/common/BadgeStack";
import ResponsiveCard from "component/common/ResponsiveCard";
import { tags } from '../../../assets/tag/tags'

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

    const findOptionByValue = (value) => {
        const options = tags['projects'];
        const idx = options.findIndex((tag) => tag.value === value);
        return options[idx];
    }

    return (
        <ResponsiveCard
            actionArea
            onClick={() => props.handleGroupCard(props.group)}
        >
            <Grid container spacing={5}>
                {/* <Grid item xs={12} md={5}> */}
                    {/* <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    > */}
                        {/* <img
                            className="border rounded-top"
                            width="100%"
                            //  height=""
                            alt=""
                            src={uploadedImage}
                            onError={handleImgError}
                        /> */}
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
                    {/* </Stack> */}

                {/* </Grid> */}
                <Grid item xs={12} md={13}>
                    <Stack
                        direction="column"
                        justifyContent="space-between"
                        spacing={2}
                        sx={{ height: '100%' }}
                    >
                        <Stack direction="row" justifyContent="space-between" sx={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                            <Box>
                                <Chip label={findOptionByValue(props.group.project_stack).label} color="secondary" variant="outlined" />
                            </Box>
                            <Box>
                                <Chip label={props.group.close_application ? "모집종료" : "모집중"} color={props.group.close_application ? "error" : "success"} />
                            </Box>
                        </Stack>
                        <Box>
                            <Typography
                                gutterBottom
                                variant="h3"
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '1',
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {props.group.project_name}
                            </Typography>
                            <Typography
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: '3',
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {props.group.short_description}
                            </Typography>
                        </Box>
                        <Box sx={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                            <BadgeStack type='tech' stack={props.group.tech_stack} />
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </ResponsiveCard>
    )
}

export default GroupCardV2;