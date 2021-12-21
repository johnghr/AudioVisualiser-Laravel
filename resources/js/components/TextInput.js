import React from "react";

const TextInput = ({
    className,
    id,
    name,
    onChange,
    required,
    type,
    value,
}) => (
    <input
        className={`input ${className ? className : ""}`}
        id={id}
        name={name}
        onChange={onChange}
        required={required ? true : null}
        type={type}
        value={value}
    />
);

export default TextInput;
