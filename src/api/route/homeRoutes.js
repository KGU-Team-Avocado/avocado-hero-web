import DatabaseContainer from "container/example/DatabaseContainer";
import ExampleContainer from "container/example/ExampleContainer";
import FileUploadExample from "container/example/FileUploadExample";
import MultiSelectExampleContainer from "container/example/MultiSelectExampleContainer";
import RankContainer from "container/example/RankContainer";
import ReduxExample from "container/example/ReduxExample";
import GroupFinderContainer from "container/group/finder/GroupFinderContainer";
import HomeContainer from "container/home/HomeContainer";
import JobFinderContainer from "container/jobFinder/JobFinderContainer";
import ProfileContainer from "container/sign/profile/ProfileContainer";

const mainRoutes = [
    {
        path: '/',
        element: <HomeContainer/>,
        name: '아보카도 히어로는...',
        description: '팀 프로젝트의 처음부터 끝까지 함께하는 국내 유일의 서비스입니다.',
    },
    {
        path: '/groupFinder',
        element: <GroupFinderContainer/>,
        name: '그룹찾기',
        description: '원하는 그룹을 찾아보아요',
    },
    {
        path: '/user/:id',
        element: <ProfileContainer/>,
        name: '프로필',
        description: 'ㅋㅋ',
    },
    {
        path: '/jobFinder',
        element: <JobFinderContainer/>,
        name: '채용공고',
        description: '일자리를 찾아보아요',
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