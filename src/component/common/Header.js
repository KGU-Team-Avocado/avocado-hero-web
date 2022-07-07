import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSignIn, setSignIn] = useState(false); //임시로 해놓음
  //   const [userInfo, setUserInfo] = useState(null);
    const sessionStorage = window.sessionStorage;
    console.log(sessionStorage.getItem("user"));

  //   useEffect(() => {
  //     if (!sessionStorage.getItem("user")) {
  //       setUserInfo(sessionStorage.getItem("user"));
  //       setSignIn(true);
  //     }
  //   }, []);

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
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div className="d-flex">
            {
              // 로그인 했을 때를 true, 안했을 때를 false로 관리해주세요
              isSignIn ? (
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="d-block link-dark text-decoration-none dropdown-toggle"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Dropdown.Item href="#/action-0">
                      {userInfo.user_id}
                    </Dropdown.Item> */}
                    <Dropdown.Item href="#/action-1">프로필 보기</Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => setSignIn(!isSignIn)}
                    >
                      로그아웃
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <button
                  className="btn btn-outline-success"
                  onClick={() => setSignIn(!isSignIn)}
                >
                  로그인
                </button>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
