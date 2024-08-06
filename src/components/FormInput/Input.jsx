import React from 'react';

const Input = ({
    placeholder,
    value,
    type = "text",
    onChange,
    className,
    ...props
}) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
            className={`w-full ${className}`}
        />
    );
}

export default Input;
