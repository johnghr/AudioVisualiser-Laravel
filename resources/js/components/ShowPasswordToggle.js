import React from "react";

const ShowPasswordToggle = ({ showPassword, setShowPassword }) => {
    const handleShowPassword = () => setShowPassword(!showPassword);
    return (
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
    );
};

export default ShowPasswordToggle;
