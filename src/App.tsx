import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import RequireAuth from "./components/RequireAuth";
import PresistLogin from "./components/PresistLogin";
import Marketplace from "./pages/Marketplace";
import Landing from "./pages/Landing";
import Unauth from "./pages/Unauth";
import NotFound from "./pages/NotFound";
import DashboardMain from "./pages/DashboardMain";
import SidebarLayout from "./components/SidebarLayout";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/unauth" element={<Unauth />} />
      <Route element={<PresistLogin />}>
        <Route element={<RequireAuth allowedRole="both" />}>
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RequireAuth allowedRole="seller" />}>
          <Route path="/dashboard" element={<SidebarLayout />}>
            <Route index element={<DashboardMain />} />
            <Route path="add-project" element={<AddProject />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
