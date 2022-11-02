import ProjectEndContainer from "container/group/workspace/ProjectEndContainer";
import ProjectEvaluationContainer from "container/group/workspace/ProjectEvaluationContainer";
import ProjectMembersContainer from "container/group/workspace/ProjectMembersContainer";
import NoticeContainer from "container/group/workspace/NoticeContainer";
import ProjectRoleContainer from "container/group/workspace/ProjectRoleContainer";
import TodoContainer from "container/group/workspace/TodoContainer";
import CalendarContainer from "container/group/workspace/CalendarContainer";
import ReadmeContainer from "container/group/workspace/ReadmeContainer";
import SettingsContainer from "container/group/workspace/SettingsContainer";


const workspaceRoutes = [
    {
        path: '/workspace/:id',
        element: <ReadmeContainer />,
    },
    {
        path: '/workspace/:id/notice',
        element: <NoticeContainer />,
    },
    {
        path: '/workspace/:id/calendar',
        element: <CalendarContainer />,
    },
    {
        path: '/workspace/:id/todo',
        element: <TodoContainer />,
    },
    {
        path: '/workspace/:id/role',
        element: <ProjectRoleContainer />,
    },
    {
        path: '/workspace/:id/members',
        element: <ProjectMembersContainer />,
    },
    {
        path: '/workspace/:id/end',
        element: <ProjectEndContainer />,
    },
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