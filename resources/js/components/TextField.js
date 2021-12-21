import React from "react";
import TextInput from "./TextInput";

const TextField = ({
    className,
    children,
    id,
    name,
    onChange,
    required,
    type,
    value,
}) => (
    <label className={`label ${className ? className : ""}`}>
        {children}
        <TextInput
            className={className}
            id={id ? id : null}
            name={name}
            onChange={onChange}
            required={required ? true : null}
            type={type}
            value={value}
        />
    </label>
);

export default TextField;
