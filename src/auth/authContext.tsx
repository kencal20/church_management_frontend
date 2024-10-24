import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../auth/firebaseConfig";
import { LogoutComponent } from "./logoutComponent";
import { componentProps } from "../components/types";

type AuthContextType = componentProps['authContextProps'];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isloading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (firebaseUser) => {
            if (firebaseUser) {
                setIsAuthenticated(true);
                const storedUser = localStorage.getItem('user');
                setUser(storedUser ? JSON.parse(storedUser) : null);
            } else {
                setIsAuthenticated(false);
                setUser(null)
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, isloading, user, LogoutComponent }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
