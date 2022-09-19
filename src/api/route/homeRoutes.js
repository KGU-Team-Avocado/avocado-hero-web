import GroupFinderContainer from "container/group/finder/GroupFinderContainer";
import HomeContainer from "container/home/HomeContainer";

const mainRoutes = [
    {
        key:0,
        path: '/',
        element: <HomeContainer/>,
        name: '아보카도 히어로는...',
        description: '팀 프로젝트의 처음부터 끝까지 함께하는 국내 유일의 서비스입니다.',
    },
    {
        key:1,
        path: '/groupFinder',
        element: <GroupFinderContainer/>,
        name: '그룹찾기',
        description: '원하는 그룹을 찾아보아요',
    },
];
export default mainRoutes;