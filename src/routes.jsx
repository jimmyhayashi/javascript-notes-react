import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesIndexScreen from "./screens/notes/index";
import EditUserScreen from "./screens/users/edit";
import PrivateRoute from "./components/auth/private_router";


const RoutesApp = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/notes" element={<PrivateRoute element={NotesIndexScreen} />} />
            <Route path="/users/edit" element={<PrivateRoute element={ EditUserScreen } />} />
        </Routes>
    </BrowserRouter> 
);

export default RoutesApp;