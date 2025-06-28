import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Resgister";
import PrivateRoute from "./configs/routes/private-routes";
import PublicRoute from "./configs/routes/public-routes";
import Chat from "./components/home/Chat";


function App() {
  return (
    <Routes>
      {/* Public routes (only for non-authenticated users) */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         {/* <Route path="/chat" element={<Chat />} /> */}
      </Route>

      {/* Private routes (only for authenticated users) */}
      <Route element={<PrivateRoute />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/chat" element={<Chat />} />
      </Route>

      {/* Default route */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
