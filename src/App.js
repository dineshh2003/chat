import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";

function useProtectedRoute() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!currentUser) {
    navigate("/login/");
    return false;
  }
  return true;
}

function App() {
  const isUserAuthenticated = useProtectedRoute();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isUserAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
