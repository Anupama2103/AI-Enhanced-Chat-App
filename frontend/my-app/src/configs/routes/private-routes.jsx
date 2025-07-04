// routes/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token"); // Or use context/redux
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
