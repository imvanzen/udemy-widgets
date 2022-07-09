import React from 'react'

const Route = ({ path, component }) => {
    const { pathname } = window.location;
    if (path === pathname)
        return component;
}

export default Route