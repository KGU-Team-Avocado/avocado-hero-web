import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Link to='/'><h1>Header</h1></Link>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/signin">SignIn</Link> |{" "}
                <Link to="/signup">SignUp</Link>
            </nav>

        </>
    )
}
export default Header;