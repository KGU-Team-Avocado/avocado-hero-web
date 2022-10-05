import MKButton from "component/common/mui-components/MKButton"

export default () => {
    return (
        <>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">아직도 팀플 조를 랜덤으로 구성하시나요?</h1>
                <div className="col-lg-10 mx-auto">
                    <p className="lead mb-4">원하는 사람들과 만나 팀을 구성하고 팀플 워크스페이스를 활용하여... 가나다라마바사아자차카타파하</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <MKButton variant="contained" color="warning" size="large">팀플 워크스페이스 구경하기</MKButton>
                        <MKButton variant="outlined" color="dark" size="large">Secondary</MKButton>
                    </div>
                </div>
                <div className="overflow-hidden" style={{"maxHeight": "30vh"}}>
                    <div className="container px-5">
                        <img src="bootstrap-docs.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

        </>

    )
}