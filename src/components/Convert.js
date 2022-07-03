import React, { useState, useEffect } from "react"
import axios from 'axios'

const Translate = ({
    language,
    text
}) => {
    const [debouncedText, setDebouncedText] = useState('')
    const [translation, setTranslation] = useState('')

    useEffect(() => {
        async function getTranslation() {
            const response = await axios.get('https://translation.googleapis.com/language/translate/v2', {
                params: {
                    target: debouncedText,
                    q: language,
                    key: ''
                }
            })
            console.log(response)
            // setTranslation(data.query.search)
        }

        if (debouncedText) {
            getTranslation()
        }
    }, [debouncedText, language])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedText(text)
        }, 500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <div className='convert ui'>
            Convert
        </div>
    )
}

export default Translate