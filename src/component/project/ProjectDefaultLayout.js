import { Outlet, Link } from "react-router-dom";
import ProjectHeader from "./ProjectHeader";
import ProjectSidebar from "./ProjectSidebar";

export default function ProjectDefaultLayout() {
    return (
        <>
            <ProjectHeader />
            <div className="container-fluid">
                <div className="row">
                    <ProjectSidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}