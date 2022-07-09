import React from 'react'

const Link = ({ path, children }) => {
    const isActive = pathname => {
        return window.location.pathname === pathname
            ? 'item active'
            : 'item'
    }
    return (
        <a href={path} className={isActive(path)}>
            {children}
        </a>
    )
}