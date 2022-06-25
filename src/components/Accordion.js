import React, { useState } from 'react'

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const onTitleClickHandler = index => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {
        return <React.Fragment key={item.title}>
            <div
                className='title active'
                onClick={() => onTitleClickHandler(index)}
            >
                <i className='dropdown icon' />
                {item.title}
            </div>
            <div className='content active'>
                <p>{item.description}</p>
            </div>
        </React.Fragment>
    })

    return (
        <div className='accordion ui styled accordion'>
            {renderedItems}
            {activeIndex}
        </div>
    )
}

export default Accordion