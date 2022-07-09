import React, { useState, useEffect } from 'react'
import Route from './Route';
import Header from './components/Header'
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

    return (
        <div className='app ui container' style={{ marginTop: '10px' }}>
            <Header />
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