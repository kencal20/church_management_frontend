import { useState } from "react";
import InputComponent from "../components/inputComponent";
import { Button, Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import FormComponent from "../components/formComponent";

export default function SignUpScreen() {
    const [form, setForm] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        birthdate: '',
        userType: 'member'
    });

    const [status, setStatus] = useState({
        text: "",
        variant: ""
    });

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    async function handleSignupSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            setStatus({ text: 'Passwords do not match', variant: "danger" });
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/users/user/createUser', form); // Adjust the endpoint if necessary

            if (response.status === 201) {
                setStatus({ text: 'User created successfully', variant: "success" });
                // Reset form on success
                setForm({
                    fname: '',
                    lname: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    gender: '',
                    birthdate: '',
                    userType: 'member'
                });
            }

        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Error creating user';
            setStatus({ text: errorMessage, variant: "danger" });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <FormComponent onSubmit={handleSignupSubmit}>
                <h2>Sign Up</h2>
                {status.text && (
                    <Alert
                        variant={status.variant}
                        onClose={() => setStatus({ text: "", variant: "" })}
                        dismissible
                    >
                        {status.text}
                    </Alert>
                )}
                <InputComponent
                    label="First Name"
                    type="text"
                    name="fname"
                    value={form.fname}
                    onChange={handleInputChange}
                    required
                />
                <InputComponent
                    label="Last Name"
                    type="text"
                    name="lname"
                    value={form.lname}
                    onChange={handleInputChange}
                    required
                />
                <InputComponent
                    label="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                />
                <InputComponent
                    label="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    required
                />
                <InputComponent
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleInputChange}
                    required
                />
                <InputComponent
                    label="Gender"
                    type="select"
                    name="gender"
                    value={form.gender}
                    onChange={handleInputChange}
                    options={["Male", "Female", "Other"]}
                    required
                />

                <InputComponent
                    label="UserType"
                    type="select"
                    name="userType"
                    value={form.userType}
                    onChange={handleInputChange}
                    options={["member", "admin", "superAdmin"]}
                    required
                />
                <InputComponent
                    label="Birthdate"
                    type="date"
                    name="birthdate"
                    value={form.birthdate}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <Button type="submit" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" /> : 'Sign Up'}
                </Button>
            </FormComponent>
        </div>
    );
}
