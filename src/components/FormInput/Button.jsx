import React from 'react'

const Button = ({
    buttonName,
    type,
    className = ""
}) => {
    return (
        <>
            <Button
                type={type}
                className={`${className}`}
            >{buttonName}
            </Button>
        </>
    )
}

export default Button