import React, { useState, useEffect } from 'react'
import Accordion from './components/Accordion';
import Wikipedia from './components/Wikipedia';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
        const [first = {}] = options;
        setSelected(pre => ({ ...pre, ...first }))
    }, [options])

    const changeColourPage = () => (
        <>
            <Dropdown
                label='Select a Colour'
                selected={selected}
                onSelectedChange={setSelected}
                options={options} />
            <div className='ui two column stackable grid'>
                <div className='column'>
                    <p style={{ color: selected.value }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus nisi, blandit ut eleifend vel, tristique ut purus. Integer non placerat eros. Integer molestie posuere tristique. Proin consequat erat augue, sit amet sodales dolor maximus vel. Nulla scelerisque nulla lorem, id tristique tortor hendrerit vel. Ut mauris magna, aliquam quis sapien ut, auctor auctor ante. Maecenas ligula quam, vulputate vitae sollicitudin ut, hendrerit eu velit. Fusce facilisis ex risus, a aliquam diam posuere non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vel lacus sapien.</p>
                </div>
                <div className='column'>
                    <p style={{ color: selected.value }}>Pellentesque at nisi justo. Vivamus non sem volutpat ex mattis congue. Vestibulum pretium quis ex a elementum. Morbi tristique erat nec leo posuere, sit amet vehicula erat efficitur. Nulla nibh metus, dictum in orci molestie, dignissim efficitur nibh. Integer tempor, lectus id dapibus venenatis, mi risus dignissim felis, elementum volutpat lectus dolor ut lectus. Integer mollis justo et odio blandit elementum. Integer sagittis fringilla arcu vitae posuere. Cras posuere nisl sit amet dui dignissim maximus. Sed commodo ac orci non vehicula. Nam sit amet vestibulum est. Proin iaculis, tellus vel aliquam mollis, est metus malesuada dui, ac sagittis nisl nisi sit amet nisi. Praesent sapien risus, lobortis sit amet magna vel, cursus luctus libero. Proin ornare nisi fermentum sem finibus, eget sollicitudin nisl vestibulum. Aliquam dignissim metus vel ipsum pulvinar tempor. Pellentesque in consectetur erat.</p>
                </div>
            </div>
        </>
    )

    const getContent = () => {
        switch (window.location.pathname) {
            case '/wikipedia':
                return <Wikipedia />
            case '/dropdown':
                return changeColourPage()
            case '/translate':
                return <Translate />
            case '/':
            case '':
                return <Accordion items={items} />
            default:
                window.location.pathname = '/';
        }
    }

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
                {getContent()}
            </div>
        </div>
    )
}

export default App