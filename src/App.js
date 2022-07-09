import React, { useState, useEffect } from 'react'
import Route from './Route';
import Accordion from './components/Accordion';
import Wikipedia from './components/Wikipedia';
import ColouredText from './components/ColouredText';
import Translate from './components/Translate';

const App = () => {
    const [items, setItems] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setItems([
            {
                title: 'What is React?',
                description: 'React is a fron end javascript library'
            },
            {
                title: 'Why use React?',
                description: 'React is a favorite JS library among engineers'
            },
            {
                title: 'How do you use React?',
                description: 'You use React by creating components'
            }
        ])

        setOptions([
            {
                label: 'The Color Red',
                value: 'red'
            },
            {
                label: 'The Color Green',
                value: 'green'
            },
            {
                label: 'The Color Blue',
                value: 'blue'
            }
        ])
    }, [])

    const isActive = pathname => {
        return window.location.pathname === pathname ? 'active' : ''
    }

    return (
        <div className='app ui container' style={{ marginTop: '10px' }}>
            <div className="ui pointing menu">
                <a href='/' className={`item ${isActive('/')}`}>
                    Accordion
                </a>
                <a href='/wikipedia' className={`item ${isActive('/wikipedia')}`}>
                    Wikipedia
                </a>
                <a href='/dropdown' className={`item ${isActive('/dropdown')}`}>
                    Dropdown
                </a>
                <a href='/translate' className={`item ${isActive('/translate')}`}>
                    Translate
                </a>
            </div>
            <div className="ui segment">
                <Route path='/' render={<Accordion items={items} />} />
                <Route path='/wikipedia' render={<Wikipedia />} />
                <Route path='/dropdown' render={<ColouredText options={options} />} />
                <Route path='/translate' render={<Translate />} />
            </div>
        </div>
    )
}

export default App