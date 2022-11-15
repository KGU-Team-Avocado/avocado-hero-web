import { Alert, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import ResponsiveCard from "component/common/ResponsiveCard";

const Place = () => {

    const places = [
        {
            _id: 0,
            type: '모임장소',
            title: '회의실',
            description: '회의하세요',
            address: '경기대학교 8강의동 창고',
            cost: '8000원/시간',
        },
        {
            _id: 1,
            type: '전시회',
            title: '주차장 빌려드립니다.',
            description: '바닥에서 전시를!',
            address: '경기대학교 기숙사 앞 주차장',
            cost: '384823원/1일',
        },
        {
            _id: 2,
            type: '전시회',
            title: '주차장 빌려드립니다.',
            description: '바닥에서 전시를!',
            address: '경기대학교 기숙사 앞 주차장',
            cost: '34453원/시간',
        },
        {
            _id: 3,
            type: '모임장소',
            title: '스터디룸',
            description: '시끄럽게 대화해도 됩니다.',
            address: '우리집',
            cost: '6,000원/시간',
        },
    ];

    return (
        <Stack spacing={2}>
            <Typography variant="h5"><StoreIcon />장소대여</Typography>
            <Alert>
                공간을 빌려드립니다.
            </Alert>
            <Grid
                container
                rowSpacing={{ xs: 1, sm: 1, md: 2 }}
                columnSpacing={{ sm: 1, md: 2 }}
            >
                {
                    places.map((place) =>
                        <Grid item xs={12} md={6} key={place._id}>
                            <ResponsiveCard>
                                <Chip label={place.type} />
                                <Typography variant="h5">{place.title}</Typography>
                                <Typography variant="h6">{place.description}</Typography>
                                <Typography>{place.address}</Typography>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Typography variant="caption">{place.cost}</Typography>
                                    <Button variant="contained">신청하기</Button>
                                </Stack>
                            </ResponsiveCard>
                        </Grid>
                    )
                }
            </Grid>
        </Stack>
    );
};
export default Place;