import SignIn from "container/sign/sign_in/SignIn"

export default () => {
    return (
        <div className="container col-xl-10 col-xxl-10 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">히어로, 오늘 팀 일정 알려줘</h1>
                    <p className="col-lg-10 fs-6">
                    더이상의 왔다갔다 시간낭비는 NO!! 팀 일정을 오직 한 곳에서 관리하세요<br />
                    팀 전체 공유 일정을 통해 팀원 간의 불필요한 소통을 줄이세요<br />
                    예정된 데드라인 등 중요한 날짜를 다시는 놓치지 마세요<br />
                    중요한 정보를 정리하고 체계화해 관리해 보세요
                    </p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <SignIn/>
                    {/* <form className="p-4 p-md-5 border rounded-3 bg-light">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                        <hr className="my-4" />
                        <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                    </form> */}
                </div>
            </div>
        </div>
    )
}