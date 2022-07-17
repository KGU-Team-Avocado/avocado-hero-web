import logo from "../../../assets/brand/avocado.png";
export default () => {
    return (
        <>

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Avocado Hero</h1>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-8 fs-4">
                            <p className="">
                            아보카도 히어로는 팀 프로젝트의 시작 전부터 끝난 후까지 책임지는 국내 유일의 서비스입니다. 아보카도 히어로는 팀 프로젝트의 시작 전부터 끝난 후까지 책임지는 국내 유일의 서비스입니다. 아보카도 히어로는 팀 프로젝트의 시작 전부터 끝난 후까지 책임지는 국내 유일의 서비스입니다. 
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img className="img-thumbnail" src={logo} style={{maxHeight:'250px'}}/>
                        </div>
                    </div>
                    {/* <button className="btn btn-primary btn-lg" type="button">Example button</button> */}
                </div>
            </div>

            <div className="row align-items-md-stretch mb-4 ">
                <div className="col-md-6">
                    <div className="h-100 p-5 text-white bg-dark rounded-3">
                        <h2>동료를 찾으세요</h2>
                        <p>그룹 활동을 지원합니다. 팀원을 찾으세요. 그룹 활동을 지원합니다. 팀원을 찾으세요. 그룹 활동을 지원합니다. 팀원을 찾으세요. 그룹 활동을 지원합니다. 팀원을 찾으세요. 그룹 활동을 지원합니다. 팀원을 찾으세요. 그룹 활동을 지원합니다. 팀원을 찾으세요. </p>
                        <button className="btn btn-outline-light" type="button">Example button</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-light border rounded-3">
                        <h2>기회를 잡으세요</h2>
                        <p>기업이 열심히 활동하시는 당신의 활동을 항상 주시합니다. 기업이 열심히 활동하시는 당신의 활동을 항상 주시합니다. 기업이 열심히 활동하시는 당신의 활동을 항상 주시합니다. 기업이 열심히 활동하시는 당신의 활동을 항상 주시합니다. 기업이 열심히 활동하시는 당신의 활동을 항상 주시합니다. </p>
                        <button className="btn btn-outline-secondary" type="button">Example button</button>
                    </div>
                </div>
            </div>
        </>
    )
}