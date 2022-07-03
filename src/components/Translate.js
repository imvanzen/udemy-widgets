import React, { useState, useEffect } from "react"
import Dropdown from "./Dropdown"

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
    const [language, setLanguage] = useState(options[0])

    return (
        <div className='translate ui'>
            <Dropdown
                label='Select a Language'
                options={options}
                selected={language}
                onSelectedChange={setLanguage} />
            <div>{language.label}</div>
        </div>
    )
}

export default Translate