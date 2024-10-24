// src/components/RouterComponent.tsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/homeScreen";
import  LoginScreen  from "../pages/loginScreen";
import LayoutComponent from "../components/layoutComponent";
import NotFoundPage from "../pages/notFoundPage";
import SignUpScreen from "../pages/signUpScreen";
import AdminDashboard from "../pages/adminDashboard";
import UserDashboard from "../pages/userDashboard";
import DashboardComponent from "../components/dashboardComponent";
import { useAuth } from "../auth/authContext";

export default function RouterComponent() {
    const { isAuthenticated, user, isloading } = useAuth();

    if (isloading) {
        return <div>Loading...</div>;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutComponent />}>
                    <Route index path="/" element={<HomeScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/dashboard" element={<DashboardComponent />} />

                    {isAuthenticated && (
                        <>
                            {user.userType === 'member' && (
                                <Route path='/user/dashboard' element={<UserDashboard />} />
                            )}
                            {user.userType === 'admin' && (
                                <>
                                    <Route path='/admin/dashboard' element={<AdminDashboard />} />
                                    <Route path='/admin/signup' element={<SignUpScreen />} />
                                </>
                            )}
                        </>
                    )}

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
