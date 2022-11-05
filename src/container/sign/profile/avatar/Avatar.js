import { useEffect, useState } from "react";
import AvatarEditButton from "./AvatarEditButton";
import * as API from '../../../../api/API';
import defaultImage from '../../../../assets/img/logo512.png';

export default ({ user_id, imgURL, edit }) => {
    const [uploadedImage, setUploadedImage] = useState(null);

    useEffect(() => {
        setProfileImage();
    }, [user_id]);

    const setProfileImage = async () => {
        setUploadedImage(await API.fetchProfileImage(imgURL)); //프로필 이미지 불러오는 코드
    }

    const handleImgError = (e) => {
        e.target.src = defaultImage;
    }

    return (
        <>
            <div className="itemCenter">
                <img
                    className="border rounded-circle"
                    width="140"
                    height="140"
                    src={uploadedImage}
                    onError={handleImgError}
                />
                {
                    edit && <AvatarEditButton setUploadedImage={setUploadedImage} />
                }
            </div>
        </>
    )
}