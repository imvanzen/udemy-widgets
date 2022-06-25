import React, { useState, useEffect } from 'react'
import Accordion from './components/Accordion';

const App = () => {
    const [items, setItems] = useState([]);

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
    }, [])

    return (
        <div className='app ui container'>
            <Accordion items={items} />
        </div>
    )
}

export default App