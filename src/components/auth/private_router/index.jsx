import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component }) => {
    return localStorage.getItem('token') ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;