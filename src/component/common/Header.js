import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSignIn, setSignIn] = useState(false); //임시로 해놓음
  const [userInfo, setUserInfo] = useState(null);
  const sessionStorage = window.sessionStorage;

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUserInfo(JSON.parse(sessionStorage.getItem("user")));
      setSignIn(true);
    }
  }, []);

  const logout = () => {
    setSignIn(!isSignIn);
    sessionStorage.clear();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Avocado Hero
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                홈
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="groupFinder">
                그룹찾기
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="jobFinder">
                채용공고란
              </Link>
            </li>
            {/* 기업전용 탭 시작 부분 */}
            {isSignIn ? ( //로그인시에만 기업전용 탭을 띄워준다.
              //#issue1 : 아직 기업인지 일반 사용자인지 확인은 못하는 상태
              //#issue2 : href로 넣어놓은 상태여서 link로 하는 방법 찾아봐야 할듯
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    기업전용
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="humanRes">
                        인재찾기
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="jobPosting">
                        채용공고
                      </a>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <></> //로그인이 안되어있을시에는 아무것도 띄우지 않음.
            )}

            {/* <li className="nav-item">
              <a className="nav-link disabled">워크스페이스</a>
            </li> */}
          </ul>
          <div className="d-flex">
            {
              // 로그인 했을 때를 true, 안했을 때를 false로 관리해주세요
              isSignIn ? (
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle mx-1"
                    />
                    <div className="mx-1">{userInfo.user_id}</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Dropdown.Item>
                      {userInfo.user_id}
                    </Dropdown.Item> */}
                    <Dropdown.Item href={"user/" + userInfo.user_id}>
                      프로필 보기
                    </Dropdown.Item>
                    <Dropdown.Item href="myWorkspace">
                      내 워크스페이스
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => logout()}>
                      로그아웃
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link
                  to="/signin"
                  className="btn btn-outline-success"
                  aria-current="page"
                >
                  로그인
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
