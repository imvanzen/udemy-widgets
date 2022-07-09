import React from 'react'
import Link from '../Link'

const Header = () => (
    <div className="ui pointing menu">
        <Link path='/'>Accordion</Link>
        <Link path='/wikipedia'>Wikipedia</Link>
        <Link path='/dropdown'>Dropdown</Link>
        <Link path='/translate'>Translate</Link>
    </div>
)

export default Header;