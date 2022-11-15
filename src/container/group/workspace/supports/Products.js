import { Alert, Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import ResponsiveCard from "component/common/ResponsiveCard";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Products = () => {
    const products = [
        {
            _id: 1,
            type: '키트',
            title: '엄청난 라즈베리파이',
            description: '서버용 컴퓨터로 쓰세요',
            price: '100000원',
        },
        {
            _id: 2,
            type: '모니터',
            title: '세로 모니터',
            description: '전시용으로 어떤가요?',
            price: '200,000원',
        },
        {
            _id: 3,
            type: '무기',
            title: '막대기',
            description: '필요할 때가 있을거에요',
            price: '1,000원',
        },
    ];
    return (
        <Box>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                mb={2}
            >
                <Typography variant="h5"><LocalGroceryStoreIcon />히어로 매장</Typography>
                {/* <Button variant="contained" color="success">등록하기</Button> */}
            </Stack>
            <Alert>
                프로젝트에 필요한 물품을 구매하세요!
            </Alert>
            <Grid
                container
                rowSpacing={{ xs: 1, sm: 1, md: 2 }}
                columnSpacing={{ sm: 1, md: 2 }}
            >
                {
                    products.map(product =>
                        <Grid item xs={12} md={6} key={product._id}>
                            <ResponsiveCard>
                                <Grid container>
                                    <Grid item xs={12} md={5}>
                                        <Stack
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Box
                                                sx={{
                                                    width: 150,
                                                    height: 150,
                                                    backgroundColor: 'gray',
                                                    '&:hover': {
                                                        backgroundColor: 'gray.dark',
                                                        opacity: [0.9, 0.8, 0.7],
                                                    },
                                                }}
                                            />
                                        </Stack>

                                    </Grid>
                                    <Grid item xs={12} md={7}>
                                        <Chip label={product.type} />
                                        <Typography variant="h5">{product.title}</Typography>
                                        <Typography variant="h6">{product.description}</Typography>
                                        <Typography>{product.price}</Typography>
                                        <Stack
                                            direction="row"
                                            justifyContent="end"
                                            alignItems="center"
                                            spacing={2}
                                        >

                                            <Button variant="contained">구입하기</Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </ResponsiveCard>
                        </Grid>
                    )
                }

            </Grid>
        </Box>
    );
};
export default Products;