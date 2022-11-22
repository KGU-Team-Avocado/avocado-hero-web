import { Box, Card, CardActionArea, Grid, Stack, Typography } from "@mui/material"
import BadgeStack from "component/common/BadgeStack";
import Avatar from "container/sign/profile/avatar/Avatar";

const UserProfileCard = ({ user, handleUserProfileCard }) => {

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
                            <Stack direction={"row"} alignItems="center" spacing={2} sx={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                <Typography variant="h6" color="text.secondary">
                                    성격
                                </Typography>
                                <Box>
                                    <BadgeStack type='personal' stack={user.personalities ?? []} />
                                </Box>
                            </Stack>
                            <Stack direction={"row"} alignItems="center" spacing={2} sx={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                <Typography variant="h6" color="text.secondary">
                                    관심 분야
                                </Typography>
                                <Box>
                                    <BadgeStack type='projects' stack={user.fields ?? []} />
                                </Box>
                            </Stack>
                            <Stack direction={"row"} alignItems="center" spacing={2} sx={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                                <Typography variant="h6" color="text.secondary">
                                    선호하는 기술
                                </Typography>
                                <Box>
                                    <BadgeStack type='tech' stack={user.keywords ?? []} />
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default UserProfileCard;