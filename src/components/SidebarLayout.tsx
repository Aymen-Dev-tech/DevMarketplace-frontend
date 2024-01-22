import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";

export default function SidebarLayout() {
  return (
    <div style={{ margin: "2rem 2rem 2rem 2rem" }}>
      <DashboardNavbar />
      <div style={{ display: "flex", height: "80vh" }}>
        <Sidebar>
          <Menu
            menuItemStyles={{
              button: {
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [`&.active`]: {
                  backgroundColor: "#13395e",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem component={<Link to="/dashboard" />}> Dashboard</MenuItem>
            <MenuItem component={<Link to="/dashboard/add-project" />}>
              Add Project
            </MenuItem>
            <MenuItem component={<Link to="/dashboard/profile" />}>
              Profile
            </MenuItem>
          </Menu>
        </Sidebar>
        <div style={{marginTop:"2rem", width: '100%'}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
