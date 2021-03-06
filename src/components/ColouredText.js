import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown'

const ColouredText = ({ options }) => {
    const [selected, setSelected] = useState({});

    useEffect(() => {
        const [first = {}] = options;
        setSelected(pre => ({ ...pre, ...first }))
    }, [options])

    return (
        <>
            <Dropdown
                label='Select a Colour'
                selected={selected}
                onSelectedChange={setSelected}
                options={options} />
            <div className='ui two column stackable grid'>
                <div className='column'>
                    <p style={{ color: selected.value }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus nisi, blandit ut eleifend vel, tristique ut purus. Integer non placerat eros. Integer molestie posuere tristique. Proin consequat erat augue, sit amet sodales dolor maximus vel. Nulla scelerisque nulla lorem, id tristique tortor hendrerit vel. Ut mauris magna, aliquam quis sapien ut, auctor auctor ante. Maecenas ligula quam, vulputate vitae sollicitudin ut, hendrerit eu velit. Fusce facilisis ex risus, a aliquam diam posuere non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vel lacus sapien.</p>
                </div>
                <div className='column'>
                    <p style={{ color: selected.value }}>Pellentesque at nisi justo. Vivamus non sem volutpat ex mattis congue. Vestibulum pretium quis ex a elementum. Morbi tristique erat nec leo posuere, sit amet vehicula erat efficitur. Nulla nibh metus, dictum in orci molestie, dignissim efficitur nibh. Integer tempor, lectus id dapibus venenatis, mi risus dignissim felis, elementum volutpat lectus dolor ut lectus. Integer mollis justo et odio blandit elementum. Integer sagittis fringilla arcu vitae posuere. Cras posuere nisl sit amet dui dignissim maximus. Sed commodo ac orci non vehicula. Nam sit amet vestibulum est. Proin iaculis, tellus vel aliquam mollis, est metus malesuada dui, ac sagittis nisl nisi sit amet nisi. Praesent sapien risus, lobortis sit amet magna vel, cursus luctus libero. Proin ornare nisi fermentum sem finibus, eget sollicitudin nisl vestibulum. Aliquam dignissim metus vel ipsum pulvinar tempor. Pellentesque in consectetur erat.</p>
                </div>
            </div>
        </>
    )
}

export default ColouredText;