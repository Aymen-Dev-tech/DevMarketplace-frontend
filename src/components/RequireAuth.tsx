import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type Props = {
  allowedRole: string;
};
const RequireAuth = ({ allowedRole }: Props) => {
  const { auth } = useAuth();
  const location = useLocation();
  return allowedRole == "both" && auth?.id !== 0 ? (
    <Outlet />
  ) : allowedRole == "seller" && auth?.Seller ? (
    <Outlet />
  ) : auth?.Buyer ? (
    <Navigate to="/unauth" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
