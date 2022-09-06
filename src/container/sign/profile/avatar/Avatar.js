export default (props) => {
    /**
     * 지금은 파일을 프론트에서 찾고 있는데, 앞으로는 axios를 사용하여 nodejs에서 받아와야 하는 방식으로 바꿔야 함.
     * 현재는 require 문법 테스트 하느라 임시로 이렇게 해둠
     */
    let userImage;
    try {
        userImage = require(`../../../../assets/img/profile/${props.user_id}.png`)
    }
    catch (e) {
        if (e instanceof Error && e.code === "MODULE_NOT_FOUND")
            console.log("Can't load foo!");
        else
            throw e;
    }
    return (
        <>
            <div class="itemCenter">
                {
                    userImage ?
                        <img
                            className="img-thumbnail rounded-circle"
                            width="140"
                            height="140"
                            src={userImage}
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
            </div>
        </>
    )
}