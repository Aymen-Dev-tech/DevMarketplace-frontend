import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import RequireAuth from "./components/RequireAuth";
import PresistLogin from "./components/PresistLogin";
import Marketplace from "./pages/Marketplace";
import Landing from "./pages/Landing";
import Unauth from "./pages/Unauth";
import NotFound from "./pages/NotFound";
import DashboardMain from "./pages/DashboardMain";
import SidebarLayout from "./components/Dashboard/SidebarLayout";
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails";
import { EditProject } from "./pages/EditProject";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <Routes>
      <Route element={<PresistLogin />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/unauth" element={<Unauth />} />
        <Route path="/payments/success" element={<PaymentSuccess />} />
        <Route element={<RequireAuth allowedRole="both" />}>
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RequireAuth allowedRole="seller" />}>
          <Route path="/dashboard" element={<SidebarLayout />}>
            <Route index element={<DashboardMain />} />
            <Route path="add-project" element={<AddProject />} />
            <Route path="edit-project/:id?" element={<EditProject />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
