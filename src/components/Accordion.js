import React from 'react'

const Accordion = ({ items }) => {
    const renderedItems = items.map(item => {
        return <React.Fragment key={item.title}>
            <div className='title active'>
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
        </div>
    )
}

export default Accordion