import { Alert, Button, Spinner } from "react-bootstrap";
import InputComponent from "../components/inputComponent";
import { useState } from "react";
import { componentProps } from "../components/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../auth/firebaseConfig";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormComponent from "../components/formComponent";

type Props = {};

export default function LoginScreen({ }: Props) {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [status, setStatus] = useState<componentProps['statusProps']>({
        text: "",
        variant: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { email, password } = form;
        setLoading(true);
        try {
            // Sign in the user with Firebase
            const userCredentials = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            const user = userCredentials.user;

            // Fetch user type from your backend
            const response = await axios.get(`http://localhost:5000/users/user/${email}`);
            const data = response.data;
            const userType = data.userType;
            console.log(userType);


            if (!userType) {
                throw new Error('User type not found. Signed out.');
            }

            // Store user info in local storage
            localStorage.setItem('user', JSON.stringify({ user, userType }));
            localStorage.setItem('userType', userType); // Make sure you're storing userType here
           
            navigate('/dashboard', { state: { uid: user.uid, email: user.email } });

        } catch (error: any) {
            console.error("Error during login:", error);
            setStatus({ text: error.message, variant: "danger" });
        } finally {
            setLoading(false);
        }
    }


    return (
        <div>
            <FormComponent onSubmit={handleLoginSubmit}>
                <h2>Login</h2>
                {
                    status.text &&
                    <Alert variant={status.variant}
                        onClose={() => setStatus({ text: "", variant: "" })} dismissible>
                        {status.text}
                    </Alert>
                }

                <InputComponent
                    label="Email"
                    placeholder="johndoe@email.dev"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    type="text"
                />
                <InputComponent
                    label="Password"
                    placeholder="**********"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    type="password"
                />

                <br />
                <Button type="submit" variant="primary" disabled={loading}>
                    {loading ? <Spinner animation='border' size='sm' /> : "Login"}
                </Button>
            </FormComponent>
        </div>
    );
}
