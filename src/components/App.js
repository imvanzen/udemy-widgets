import React, { useState } from 'react'
import Accordion from './Accordion';

const App = () => {
    const [items, setItems] = useState([]);

    return (
        <div className='app'>
            <Accordion />
        </div>
    )
}

export default App