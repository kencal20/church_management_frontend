import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/authContext';

export default function DashboardComponent() {
    const navigate = useNavigate();
    const { user, isAuthenticated, isloading } = useAuth();

    useEffect(() => {
        // Wait for loading to finish
        if (isloading) return;

        // Ensure user is authenticated before checking the type
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            // Centralized redirection logic based on user type
            redirectUser(user);
        }
    }, [isAuthenticated, user, isloading, navigate]);

    const redirectUser = (user:any) => {
        switch (user.userType) {
            case 'admin':
                navigate('/admin/dashboard');
                break;
            case 'superAdmin':
                navigate('/superAdmin/dashboard');
                break;
            case 'member':
                navigate('/user/dashboard');
                break;
            default:
                navigate('/dashboard'); // Redirect to a default page if user type is not recognized
        }
    };

    return null; // Render nothing as this component handles redirection
}
