import { Navigate } from "react-router-dom";
import React from "react";
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/register" replace />;
  }
  return children;
}
