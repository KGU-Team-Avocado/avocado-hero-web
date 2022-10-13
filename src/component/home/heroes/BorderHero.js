import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

export default () => {
    return (
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">좋은 사람 있으면 소개해줘</h1>
                    <p className="lead">프로필을 직접 확인해보고 우리 기업과 맞는 좋은 개발자를 찾게되면 직접 제의를 할 수 있습니다. </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">인재 찾으러 가기</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">채용 공고하러 가기</button>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <Card sx={{ borderRadius: 5 }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140" col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg
                                image="./logo512.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    아이디
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    이름
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
            </div>
        </div>
    )
}