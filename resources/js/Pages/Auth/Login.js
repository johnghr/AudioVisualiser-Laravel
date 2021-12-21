import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import ErrorMessage from "../../components/ErrorMessage";
import ShowPasswordToggle from "../../components/ShowPasswordToggle";
import SubmitButton from "../../components/SubmitButton";
import TextField from "../../components/TextField";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value;
        setData({ ...data, [event.target.name]: value });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        post("/login");
    };

    return (
        <>
            <main className="login-main">
                <section className="login-section">
                    <h1 className="users-h1">Login</h1>
                    <form onSubmit={handleLogin}>
                        <TextField
                            id="email"
                            name="email"
                            onChange={handleChange}
                            type="email"
                            required
                            value={data.email}
                        >
                            Email
                        </TextField>
                        <ErrorMessage error={errors.email} />

                        <TextField
                            id="password"
                            name="password"
                            onChange={handleChange}
                            type={!showPassword ? "password" : "text"}
                            required
                            value={data.password}
                        >
                            Password
                        </TextField>
                        <ShowPasswordToggle
                            setShowPassword={setShowPassword}
                            showPassword={showPassword}
                        />
                        <ErrorMessage error={errors.password} />

                        <SubmitButton disabled={processing}>Login</SubmitButton>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Login;
