import React, { useState, useEffect } from "react"
import Dropdown from "./Dropdown"
import Convert from "./Convert"

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {
    const [text, setText] = useState('')
    const [language, setLanguage] = useState(options[0])

    return (
        <div className='translate ui'>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        type='text'
                        value={text}
                        onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label='Select a Language'
                options={options}
                selected={language}
                onSelectedChange={setLanguage} />
            <Convert
                language={language.value}
                text={text} />
        </div>
    )
}

export default Translate