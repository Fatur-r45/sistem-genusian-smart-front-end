import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotePassword from "./pages/ForgotePassword";
import LinkResetPassword from "./pages/LinkResetPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset_password" element={<ForgotePassword />} />
        <Route
          path="/link_reset_password/:email"
          element={<LinkResetPassword />}
        />
        <Route path="/reset_password/:token" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
