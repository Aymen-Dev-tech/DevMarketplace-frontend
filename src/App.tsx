import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import RequireAuth from "./components/RequireAuth";
import PresistLogin from "./components/PresistLogin";
import Marketplace from "./pages/Marketplace";
import Landing from "./pages/Landing";
import SellerSpace from "./pages/SellerDashboard";
import Unauth from "./pages/Unauth";
import NotFound from "./pages/NotFound";

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
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RequireAuth allowedRole="seller" />}>
          <Route path="/seller-dashboard" element={<SellerSpace />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
