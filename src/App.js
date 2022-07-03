import React, { useState, useEffect } from 'react'
import Accordion from './components/Accordion';
import Wikipedia from './components/Wikipedia';
import Dropdown from './components/Dropdown';

const App = () => {
    const [items, setItems] = useState([]);
    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState({});

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

    useEffect(() => {
        const [first = []] = options;
        setSelected(pre => ({ ...pre, first }))
    }, [options])

    return (
        <div className='app ui container'>
            {/* <Accordion items={items} /> */}
            {/* <Wikipedia /> */}
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options} />
        </div>
    )
}

export default App