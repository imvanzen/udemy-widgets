import React from 'react'

const Route = ({ path, render }) => {
    return window.location.pathname === path
        ? render
        : null
}

export default Route