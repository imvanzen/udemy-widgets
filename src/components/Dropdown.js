import React from 'react'

const Dropdown = ({
    options,
    selected,
    onSelectedChange
}) => {
    const renderedOptions = options.map(option => (
        <div
            key={option.value}
            className='item'
            onClick={() => onSelectedChange(option)}>
            {option.label}
        </div>
    ))

    const dropdownLabel = selected.label || 'Select Color'

    return (
        <div className='dropdown ui form'>
            <div className='field'>
                <label className='label'>Select a Color</label>
                <div className='ui selection dropdown visible active'>
                    <i className='dropdown icon' />
                    <div className='text'>{dropdownLabel}</div>
                    <div className='menu visible transition'>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown