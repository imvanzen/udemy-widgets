import React from 'react'

const Dropdown = ({ options }) => {
    const renderedOptions = options.map(({ label, value }) => (
        <div key={value} className='item'>
            {label}
        </div>
    ))

    return (
        <div className='dropdown ui form'>
            <div className='field'>
                <label className='label'>Select a Color</label>
                <div className='ui selection dropdown visible active'>
                    <i className='dropdown icon' />
                    <div className='text'>Select Color</div>
                    <div className='menu visible transition'>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown