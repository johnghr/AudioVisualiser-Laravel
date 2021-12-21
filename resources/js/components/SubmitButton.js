import React from "react";

const SubmitButton = ({ children, disabled }) => (
    <button className="submit-button" disabled={disabled} type="submit">
        {children}
    </button>
);

export default SubmitButton;
