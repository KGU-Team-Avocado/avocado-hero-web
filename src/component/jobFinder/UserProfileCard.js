import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Skeleton, Typography } from "@mui/material"
import Avatar from "container/sign/profile/avatar/Avatar";
import { useEffect, useState } from "react";
import * as API from '../../api/API';
import defaultImage from '../../assets/img/logo512.png';

export default ({ user, handleUserProfileCard }) => {

    return (
        <Card sx={{ borderRadius: 5 }}
            onClick={() => handleUserProfileCard(user.user_id)}
        >
            <CardActionArea>
                <Box p={3}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={5}>
                            <Avatar user_id={user.user_id} imgURL={user.imgURL} />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography gutterBottom variant="h4">
                                {`${user.name}(${user.user_id})`}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                희망 직무 : ㅇㅇㅇ
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                평점 : 5.0
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                대표 프로젝트 : ㅇㅇㅇㅇㅇㅇㅇ
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                선호하는 기술 : ㅇㅇㅇㅇㅇ
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </CardActionArea>
        </Card>
    )
}