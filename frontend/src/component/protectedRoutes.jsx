import { Outlet, Navigate, useLocation } from "react-router-dom";
import auth from "../services/authService";

const PrivateRoutes = (props) => {
  const user = auth.getCurrentUser();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location.pathname }} /> // pass state object throguh Navigate component, access in Component using useLocation
  );
};

export default PrivateRoutes;
