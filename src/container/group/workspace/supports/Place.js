import { Chip, Grid, Stack, Typography } from "@mui/material";
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
            cost: '시간당 8000원',
        },
        {
            _id: 1,
            type: '전시회',
            title: '주차장 빌려드립니다.',
            description: '바닥에서 전시를!',
            address: '경기대학교 기숙사 앞 주차장',
            cost: '시간당 384823원',
        },
    ];

    return (
        <Stack>
            <Typography variant="h3"><StoreIcon />장소대여</Typography>
            <Grid
                container
                rowSpacing={{ xs: 1, sm: 1, md: 2 }}
                columnSpacing={{ sm: 1, md: 2 }}
            >
                {
                    places.map((place) =>
                        <Grid item xs={12} md={6} key={place._id}>
                            <ResponsiveCard>
                                <Chip label={place.type}/>
                                <Typography>{place.title}</Typography>
                                <Typography>{place.description}</Typography>
                                <Typography>{place.address}</Typography>
                                <Typography>{place.cost}</Typography>
                            </ResponsiveCard>
                        </Grid>
                    )
                }
            </Grid>
        </Stack>
    );
};
export default Place;