import React, { useState } from 'react'

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClickHandler = index => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return <React.Fragment key={item.title}>
            <div
                className={`title ${active}`}
                onClick={() => onTitleClickHandler(index)}
            >
                <i className='dropdown icon' />
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.description}</p>
            </div>
        </React.Fragment>
    })

    return (
        <div className='accordion ui styled accordion'>
            {renderedItems}
        </div>
    )
}

export default Accordion