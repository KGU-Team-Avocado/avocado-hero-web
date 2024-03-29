import { useEffect, useState } from "react";
import MKButton from "./mui-components/MKButton"
import * as API from '../../api/API';
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import defaultImage from '../../assets/img/logo512.png';

export default ({
    open,
    anchorEl,
    setAnchorEl,
    workspace
}) => {

    const navigate = useNavigate();
    const userInfo = useSelector(selectUser);
    const [uploadedImage, setUploadedImage] = useState(null);
    const setProfileImage = async () => {
        setUploadedImage(await API.fetchProfileImage(userInfo?.imgURL)); //프로필 이미지 불러오는 코드
    }

    useEffect(() => {
        setProfileImage();
    }, [userInfo?.imgURL]);

    const handleClose = (url) => {
        navigate(url);
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const logout = () => {
        sessionStorage.clear();
        window.location.href = '/avocado-hero-web/'
    };

    const handleImgError = (e) => {
        e.target.src = defaultImage;
    }


    const Content = () => {
        return (
            <>
                <img
                    src={uploadedImage}
                    onError={handleImgError}
                    width="32"
                    height="32"
                    className="rounded-circle mx-1"
                />
                <div className="mx-1">{userInfo?.user_id}</div>
                <ArrowDropDownIcon />
            </>
        )
    }

    return (
        <>
            {
                workspace
                    ?
                    <Button
                        variant="outlined"
                        color="info"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Content />
                    </Button>
                    :
                    <MKButton
                        variant="text"
                        color="dark"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Content />
                    </MKButton>
            }

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleClose(`/user/${userInfo.user_id}`)}>프로필</MenuItem>
                <MenuItem onClick={() => handleClose(`/myWorkspace`)}>내 워크스페이스</MenuItem>
                <MenuItem onClick={() => logout()}>로그아웃</MenuItem>
            </Menu>
        </>
    )
}