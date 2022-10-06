import { useHref } from "react-router-dom"

export default () => {
    return (
        <div className="container col-xxl-10 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">당신과 딱 맞는 회사를 찾아보세요!</h1>
                    <p className="lead">히어로가 일자리를 소개합니다. 당신과 딱 맞는 일자리를 찾아보고 당신의 포토폴리오로 당신이 인재임을 증명해보세요!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={()=> window.location.href = "/jobFinder"}>일자리 찾기</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
            </div>
        </div>
    )
}