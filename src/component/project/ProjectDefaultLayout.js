import { Outlet, Link } from "react-router-dom";
import ProjectHeader from "./ProjectHeader";
import ProjectSidebar from "./ProjectSidebar";

export default function ProjectDefaultLayout() {
  return (
      <div>
          <div className="mb-2">
              <ProjectHeader />
          </div>
          <div>
              <div class="container-fluid">
                  <div class="row">
                      <ProjectSidebar />
                      <Outlet />
                  </div>
              </div>
          </div>
      </div>
  );
}