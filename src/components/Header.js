import React from 'react'
import Link from '../Link'

const Header = () => (
    <div className="ui pointing menu">
        <Link href='/' className='item'>Accordion</Link>
        <Link href='/wikipedia' className='item'>Wikipedia</Link>
        <Link href='/dropdown' className='item'>Dropdown</Link>
        <Link href='/translate' className='item'>Translate</Link>
    </div>
)

export default Header;