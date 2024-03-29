import HumanResources from "container/company/HumanResources";
import JobPosting from "container/company/JobPosting";
import Prices from "container/company/Prices";
import DatabaseContainer from "container/example/DatabaseContainer";
import ExampleContainer from "container/example/ExampleContainer";
import FileUploadExample from "container/example/FileUploadExample";
import MultiSelectExampleContainer from "container/example/MultiSelectExampleContainer";
import RankContainer from "container/example/RankContainer";
import ReduxExample from "container/example/ReduxExample";
import GroupFinderContainer from "container/group/finder/GroupFinderContainer";
import OrganizationGroupFinderContainer from "container/group/finder/OrganizationGroupFinderContainer";
import OrganizationContainer from "container/group/organizations/OrganizationContainer";
import WorkspaceListContainer from "container/group/workspace/WorkspaceListContainer";
import HomeContainer from "container/home/HomeContainer";
import JobFinderContainer from "container/jobFinder/JobFinderContainer";
import ProfileUpdate from "container/sign/profile/edit/ProfileUpdate";
import ProfileEditV2 from "container/sign/profile/edit_v2/ProfileEditV2";
import ProfileContainer from "container/sign/profile/view/ProfileContainer";
import SignInContainer from "container/sign/sign_in/SignInContainer";
import SignUpContainer from "container/sign/sign_up/SignUpContainer";

const mainRoutes = [
    {
        path: '/',
        element: <HomeContainer/>,
        name: '히어로는...',
        description: '팀 프로젝트의 처음부터 끝까지 함께하는 국내 유일의 서비스입니다.',
    },
    {
        path: '/groupFinder',
        element: <GroupFinderContainer/>,
        name: '그룹찾기',
        description: '원하는 그룹을 찾아보아요',
    },
    {
        path: '/groupFinder/:code',
        element: <OrganizationGroupFinderContainer/>,
        name: '조직 내 그룹찾기',
        description: '조직 내에서 원하는 그룹을 찾아보아요',
    },
    {
        path: '/myWorkspace',
        element: <WorkspaceListContainer/>,
        name: '내 워크스페이스',
        description: '현재 소속된 프로젝트를 확인해보아요',
    },
    {
        path: '/user/:id',
        element: <ProfileContainer/>,
        name: '프로필',
        description: '조회',
    },
    {
        path: '/user/ProfileUpdate/:id',
        element: <ProfileUpdate/>,
        name: '프로필',
        description: '수정',
    },
    {
        path: '/user/profile/update/:id',
        element: <ProfileEditV2/>,
        name: '프로필',
        description: '수정',
    },
    {
        path: '/jobFinder',
        element: <JobFinderContainer/>,
        name: '채용공고',
        description: '일자리를 찾아보아요',
    },
    {
        path: '/jobPosting',
        element: <JobPosting/>,
        name: '채용공고 등록',
        description: '일자리를 등록해요',
    },
    {
        path: '/organizations',
        element: <OrganizationContainer/>,
        name: '조직 구성하기',
        description: '학교/직장 조직 내에서 그룹 찾기',
    },
    {
        path: '/humanResources',
        element: <HumanResources/>,
        name: '채용 제의하기',
        description: '인재를 찾아보아요',
    },
    {
        path: '/prices',
        element: <Prices/>,
        name: '요금제',
        description: '더 많은 기능을 사용해보아요',
    },
    {
        path: '/signin',
        element: <SignInContainer/>,
        name: '로그인',
        description: '로그인 하시고 더 많은 기능을 사용해보세요!',
    },
    {
        path: '/signup',
        element: <SignUpContainer/>,
        name: '회원가입',
        description: '어서와 히어로는 처음이지?',
    },
    {
        path: '/example',
        element: <ExampleContainer/>,
        name: '대표 예제',
        description: 'FE + BE',
    },
    {
        path: '/example/bestworker',
        element: <RankContainer/>,
        name: '활동 포인트',
        description: '열심히 합시다.',
    },
    {
        path: '/example/database',
        element: <DatabaseContainer/>,
        name: 'DB 조회',
        description: 'ㅇㅇㅇㅇㅇㅇ',
    },
    {
        path: '/example/multiSelectExample',
        element: <MultiSelectExampleContainer/>,
        name: '멀티 셀렉트 예제',
        description: 'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
    },
    {
        path: '/example/fileUpload',
        element: <FileUploadExample/>,
        name: '파일업로드',
        description: '수리중',
    },
    {
        path: '/example/redux',
        element: <ReduxExample/>,
        name: '리덕스 예제',
        description: 'ㅇㅇ',
    },
];
export default mainRoutes;