import React from 'react'

const Link = ({ href, className, children }) => {
    const wrapWithIsActive = () => {
        return window.location.pathname === href
            ? `${className} active`
            : className
    }
    return (
        <a {...{
            href,
            className: wrapWithIsActive()
        }}>
            {children}
        </a>
    )
}

export default Link