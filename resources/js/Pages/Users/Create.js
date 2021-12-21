import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useForm } from "@inertiajs/inertia-react";
import ErrorMessage from "../../components/ErrorMessage";
import ShowPasswordToggle from "../../components/ShowPasswordToggle";
import SubmitButton from "../../components/SubmitButton";
import TextField from "../../components/TextField";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value;
        setData({ ...data, [event.target.name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        post("/users/create");
    };

    return (
        <div className="create-user-form-container">
            <h1 className="users-h1">Create New User</h1>
            <form className="create-user-form" onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    name="name"
                    onChange={handleChange}
                    type="text"
                    required
                    value={data.name}
                >
                    Name
                </TextField>
                <ErrorMessage error={errors.name} />

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
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />
                <ErrorMessage error={errors.password} />

                <SubmitButton disabled={processing}>Create</SubmitButton>
            </form>
        </div>
    );
};
export default Create;

Create.layout = (page) => <Layout children={page} title="Create" />;
