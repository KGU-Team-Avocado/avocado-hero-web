import ProjectEndContainer from "container/group/workspace/ProjectEndContainer";
import ProjectEvaluationContainer from "container/group/workspace/ProjectEvaluationContainer";
import ProjectMembersContainer from "container/group/workspace/ProjectMembersContainer";
import ProjectContainer from "container/group/workspace/ProjectNoticeContainer";
import ProjectRoleContainer from "container/group/workspace/ProjectRoleContainer";
import ProjectTodoContainer from "container/group/workspace/ProjectTodoContainer";
import ProjectCalendarContainer from "container/group/workspace/ProjectCalendarContainer";


const workspaceRoutes = [
    // {
    //     path: '/',
    //     element: <></>,
    // },
    {
        path: '/:id',
        element: <ProjectContainer/>,
    },
    {
        path: '/calendar/:id',
        element: <ProjectCalendarContainer/>,
    },
    {
        path: '/todo/:id',
        element: <ProjectTodoContainer/>,
    },
    {
        path: '/role/:id',
        element: <ProjectRoleContainer/>,
    },
    {
        path: '/members/:id',
        element: <ProjectMembersContainer/>,
    },
    {
        path: '/end/:id',
        element: <ProjectEndContainer/>,
    },
    {
        path: '/evaluation/:id/:user_id',
        element: <ProjectEvaluationContainer/>,
    },
];
export default workspaceRoutes;