import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useForm } from "@inertiajs/inertia-react";
import ErrorMessage from "../../components/ErrorMessage";

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

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleSubmit = (event) => {
        event.preventDefault();
        post("/users/create");
    };

    return (
        <>
            <div className="users-header-container">
                <h1 className="users-h1">Create New User</h1>
            </div>

            <div className="create-user-form-container">
                <form className="create-user-form" onSubmit={handleSubmit}>
                    <label className="create-user-label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="create-user-input"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        type="text"
                        required
                        value={data.name}
                    />
                    <ErrorMessage error={errors.name} />

                    <label className="create-user-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="create-user-input"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        type="email"
                        required
                        value={data.email}
                    />
                    <ErrorMessage error={errors.email} />

                    <label
                        className="create-user-label"
                        htmlFor="create-user-password"
                    >
                        Password
                    </label>
                    <input
                        className="create-user-input"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        type={!showPassword ? "password" : "text"}
                        required
                        value={data.password}
                    />

                    <label
                        className="show-password"
                        htmlFor="show-password"
                    ></label>
                    <span className="show-password-span">
                        <input
                            className="show-password-input"
                            onChange={handleShowPassword}
                            name="show-password"
                            type="checkbox"
                            value={showPassword}
                        />
                        show password
                    </span>
                    <ErrorMessage error={errors.password} />

                    <div className="submit-button-container">
                        <button
                            className="create-user-submit"
                            disabled={processing}
                            onClick={handleSubmit}
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Create;

Create.layout = (page) => <Layout children={page} title="Create" />;
