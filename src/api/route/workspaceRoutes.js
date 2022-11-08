// import ProjectEndContainer from "container/group/workspace/settings/ProjectEndContainer";
import ProjectEvaluationContainer from "container/group/workspace/ProjectEvaluationContainer";
// import MembersContainer from "container/group/workspace/settings/MembersContainer";
// import NoticeContainer from "container/group/workspace/NoticeContainer";
// import RoleContainer from "container/group/workspace/settings/RoleContainer";
// import TodoContainer from "container/group/workspace/TodoContainer";
import CalendarContainer from "container/group/workspace/CalendarContainer";
import ReadmeContainer from "container/group/workspace/readme/ReadmeContainer";
import SettingsContainer from "container/group/workspace/settings/SettingsContainer";
import NoticeTodoContainer from "container/group/workspace/NoticeTodoContainer";
import RoleContainer from "container/group/workspace/settings/RoleContainer";

const workspaceRoutes = [
    {
        path: '/workspace/:id',
        element: <ReadmeContainer />,
    },
    // {
    //     path: '/workspace/:id/notice',
    //     element: <NoticeContainer />,
    // },
    {
        path: '/workspace/:id/calendar',
        element: <CalendarContainer />,
    },
    // {
    //     path: '/workspace/:id/todo',
    //     element: <TodoContainer />,
    // },
    {
        path: '/workspace/:id/notice_todo',
        element: <NoticeTodoContainer />,
    },
    {
        path: '/workspace/:id/role',
        element: <RoleContainer title="상호평가" />,
    },
    // {
    //     path: '/workspace/:id/members',
    //     element: <MembersContainer />,
    // },
    // {
    //     path: '/workspace/:id/end',
    //     element: <ProjectEndContainer />,
    // },
    {
        path: '/workspace/:id/evaluation/:user_id',
        element: <ProjectEvaluationContainer />,
    },
    {
        path: '/workspace/:id/settings',
        element: <SettingsContainer />,
    },
];
export default workspaceRoutes;