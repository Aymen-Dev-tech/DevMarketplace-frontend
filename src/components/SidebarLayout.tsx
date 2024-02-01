import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PersonIcon from "@mui/icons-material/Person";
export default function SidebarLayout() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#E5EAF9",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <div style={{ margin: "1.5rem 1.5rem 1.5rem 1.5rem" }}>
        <DashboardNavbar />
        <div style={{ display: "flex", height: "80vh" }}>
          <Sidebar
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                backgroundColor: "#E5EAF9",
              },
            }}
          >
            <Menu
              rootStyles={{
                marginTop: "2rem",
              }}
              menuItemStyles={{
                root: {
                  marginTop: "1rem",
                },
                // button: {
                //   // the active class will be added automatically by react router
                //   // so we can use it to style the active menu item
                //   [`&.active`]: {
                //     backgroundColor: "#13395e !important",
                //     color: "#b6c8d9 !important",
                //   },
                // },
              }}
            >
              <MenuItem
                component={<Link to="/dashboard" />}
                icon={<SpaceDashboardIcon />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                component={<Link to="/dashboard/add-project" />}
                icon={<AddBoxIcon />}
              >
                Add Project
              </MenuItem>
              <MenuItem
                component={<Link to="/dashboard/edit-project" />}
                icon={<AppRegistrationIcon />}
              >
                Edit Project
              </MenuItem>
              <MenuItem
                component={<Link to="/dashboard/profile" />}
                icon={<PersonIcon />}
              >
                Profile
              </MenuItem>
            </Menu>
          </Sidebar>
          <div style={{ marginTop: "2rem", width: "100%" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
