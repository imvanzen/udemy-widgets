import React, { useState, useEffect } from 'react'

const Dropdown = ({
    options,
    selected,
    onSelectedChange
}) => {
    const [dropdown, setDropdown] = useState(false)

    const renderedOptions = options
        .filter(option => option.value !== selected.value)
        .map(option => (
            <div
                key={option.value}
                className='item'
                onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        ))

    const dropdownLabel = selected.label || 'Select Color'

    useEffect(() => {
        document.body.addEventListener(
            'click',
            e => {
                setDropdown(false)
            },
            { capture: true }
        );
    }, []);

    return (
        <div className='dropdown ui form'>
            <div className='field'>
                <label className='label'>Select a Color</label>
                <div
                    onClick={() => setDropdown(!dropdown)}
                    className={`ui selection dropdown${dropdown ? ' visible active' : ''}`}
                >
                    <i className='dropdown icon' />
                    <div className='text'>{dropdownLabel}</div>
                    <div className={`menu${dropdown ? ' visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown