import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({
    label,
    options,
    selected,
    onSelectedChange
}) => {
    const [dropdown, setDropdown] = useState(false)
    const ref = useRef()

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

    useEffect(() => {
        const onBodyClick = e => {
            if (ref.current.contains(e.target)) return
            setDropdown(false)
        }
        document.body.addEventListener('click', onBodyClick, { capture: true }
        )
        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true })
        }
    }, []);

    return (
        <div ref={ref} className='dropdown ui form'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div
                    onClick={() => setDropdown(!dropdown)}
                    className={`ui selection dropdown${dropdown ? ' visible active' : ''}`}
                >
                    <i className='dropdown icon' />
                    <div className='text'>{selected.label}</div>
                    <div className={`menu${dropdown ? ' visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown