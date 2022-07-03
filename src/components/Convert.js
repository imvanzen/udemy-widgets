import React, { useState, useEffect } from "react"
import axios from 'axios'

const Translate = ({
    language,
    text
}) => {
    const [debouncedText, setDebouncedText] = useState('')
    const [translations, setTranslations] = useState([])

    useEffect(() => {
        async function getTranslation() {
            const { data } = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language,
                        key: process.env.REACT_APP_GOOGLE_TRANSLATION_API_KEY
                    }
                })
            setTranslations(data.data.translations)
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

    const renderedTranslationText = translations.map(({ translatedText }, index) => (
        <h1 key={index} className='ui header'>{translatedText}</h1>
    ))

    return (
        <div className='convert ui'>
            {renderedTranslationText}
        </div>
    )
}

export default Translate