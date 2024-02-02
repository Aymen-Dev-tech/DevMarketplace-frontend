import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/components/SidebarLayout.css";
import { useEffect } from "react";
export default function SidebarLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("current pathname: ", pathname);
  }, [pathname]);
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
              // fontFamily: "Roboto"
              
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
                className={pathname === "/dashboard" ? "tab" : ""}
                component={<Link to="/dashboard" />}
                active={pathname === "dashboard"}
                icon={<SpaceDashboardIcon />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                className={pathname === "/dashboard/add-project" ? "tab" : ""}
                component={<Link to="/dashboard/add-project" />}
                active={pathname === "/dashboard/add-project"}
                icon={<AddBoxIcon />}
              >
                Add Project
              </MenuItem>
              <MenuItem
                className={pathname === "/dashboard/edit-project" ? "tab" : ""}
                active={pathname === "/dashboard/edit-project"}
                component={<Link to="/dashboard/edit-project" />}
                icon={<AppRegistrationIcon />}
              >
                Edit Project
              </MenuItem>
              <MenuItem
                className={pathname === "/dashboard/profile" ? "tab" : ""}
                active={pathname === "/dashboard/profile"}
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
