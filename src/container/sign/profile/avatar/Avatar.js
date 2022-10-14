import { useEffect, useState } from "react";
import AvatarEditButton from "./AvatarEditButton";

export default ({ user_id, edit }) => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const fetchImage = async (user_id) => {
        const res = await fetch(`/usersRouter/profileImage/${user_id}`);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        if (res.status == 200) {
            setUploadedImage(imageObjectURL);
        }
        else {
            setUploadedImage(null);
        }
    };

    useEffect(() => {
        fetchImage(user_id);
    }, []);

    return (
        <>
            <div class="itemCenter">
                {
                    uploadedImage ?
                        <img
                            className="img-thumbnail rounded-circle"
                            width="140"
                            height="140"
                            src={uploadedImage}
                            alt="profile"
                        />
                        :
                        <svg
                            className="img-thumbnail rounded-circle"
                            width="140"
                            height="140"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: 140x140"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" />
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>
                }
                {
                    edit && <AvatarEditButton fetchImage={fetchImage}/>
                }
            </div>
        </>
    )
}