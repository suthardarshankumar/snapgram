import React from 'react'
import TextField from '@mui/material/TextField';

const Input = ({
    label,
    value,
    type = "text",
    onChange,
    sx,
    ...props
}) => {
    return (
        <>
            {/* row={6}  multiline */}
            <TextField
                id="outlined-basic"
                variant="outlined"
                label={label}
                value={value}
                type={type}
                onChange={onChange}
                sx={sx}
                {...props}
            />
        </>
    )
}

export default Input