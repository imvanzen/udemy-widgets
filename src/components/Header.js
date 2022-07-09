import React from 'react'
import Link from '../Link'

const Header = () => {
    const isActive = pathname => {
        return window.location.pathname === pathname
            ? 'item active'
            : 'item'
    }

    return (
        <div className="ui pointing menu">
            <a href='/' className={isActive('/')}>
                Accordion
            </a>
            <a href='/wikipedia' className={isActive('/wikipedia')}>
                Wikipedia
            </a>
            <a href='/dropdown' className={isActive('/dropdown')}>
                Dropdown
            </a>
            <a href='/translate' className={isActive('/translate')}>
                Translate
            </a>
        </div>
    )
}

export default Header;