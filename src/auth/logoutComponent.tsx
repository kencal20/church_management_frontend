import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../auth/firebaseConfig";

export const LogoutComponent = async (): Promise<void> => {
    try {
        await signOut(FIREBASE_AUTH);
        localStorage.clear(); 
    } catch (error) {
        console.error("Logout failed:", error); // Log the error for debugging
        throw error; // Rethrow if you want to handle it elsewhere
    }
};
