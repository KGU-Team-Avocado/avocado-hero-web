import { Outlet, Link, useParams } from "react-router-dom";
import ProjectHeader from "../../../component/project/ProjectHeader";
import ProjectSidebar from "../../../component/project/ProjectSidebar";
import * as API from "../../../api/API";
import { useEffect, useState } from "react";

export default function ProjectDefaultLayout() {
    const params = useParams();
    const project_id = params.id;
    const [group, setGroup] = useState({});
    const [user, setUser] = useState({user_id: ''})

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            console.log()
            setUser(JSON.parse(sessionStorage.getItem("user")));
        }

        getGroup();
    }, []);

    const getGroup = async () => {
        setGroup(await API.getGroupById({ _id: project_id }));
    }

    return (
        <>
            <ProjectHeader group={group} />
            <div className="container-fluid">
                <div className="row">
                    <ProjectSidebar group={group} user={user} />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}