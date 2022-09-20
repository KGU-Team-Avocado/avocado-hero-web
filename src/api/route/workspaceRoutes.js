import ProjectEndContainer from "container/group/workspace/ProjectEndContainer";
import ProjectEvaluationContainer from "container/group/workspace/ProjectEvaluationContainer";
import ProjectMembersContainer from "container/group/workspace/ProjectMembersContainer";
import ProjectContainer from "container/group/workspace/ProjectNoticeContainer";
import ProjectRoleContainer from "container/group/workspace/ProjectRoleContainer";
import ProjectTodoContainer from "container/group/workspace/ProjectTodoContainer";
import ProjectCalendarContainer from "container/group/workspace/ProjectCalendarContainer";


const workspaceRoutes = [
    {
        path: '/workspace/:id',
        element: <ProjectContainer/>,
    },
    {
        path: '/workspace/:id/calendar',
        element: <ProjectCalendarContainer/>,
    },
    {
        path: '/workspace/:id/todo',
        element: <ProjectTodoContainer/>,
    },
    {
        path: '/workspace/:id/role',
        element: <ProjectRoleContainer/>,
    },
    {
        path: '/workspace/:id/members',
        element: <ProjectMembersContainer/>,
    },
    {
        path: '/workspace/:id/end',
        element: <ProjectEndContainer/>,
    },
    {
        path: '/workspace/:id/evaluation/:user_id',
        element: <ProjectEvaluationContainer/>,
    },
];
export default workspaceRoutes;