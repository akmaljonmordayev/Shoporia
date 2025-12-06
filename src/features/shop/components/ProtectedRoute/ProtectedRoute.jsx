import { Navigate } from "react-router-dom";
import React from "react";
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
