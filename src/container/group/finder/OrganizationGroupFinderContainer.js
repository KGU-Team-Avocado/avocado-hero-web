import { useParams } from "react-router-dom";

const OrganizationGroupFinderContainer = () => {
    const params = useParams(); //url로 넘어온 파라미터를 받는 역할 (App.js 의 :id 참고)
    const code = params.code; //(params의 :code를 받는 역할)
    console.log(code)
    return (
        <>
            ㅇㅇ
        </>
    )
}

export default OrganizationGroupFinderContainer;