import './Wikipedia.css'

import React, { useEffect, useState } from "react"
import wikipedia from '../api/wikipedia'

const Wikipedia = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        async function getResults() {
            const { data } = await wikipedia.get('', {
                params: { srsearch: term }
            })
            setResults(data.query.search)
        }

        if (term) {
            getResults()
        }
    }, [term])

    const renderedResults = results.map(result => (
        <div className="item" key={result.pageid}>
            <div className='right floated content'>
                <a
                    className='ui button'
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    target='_blank'>Go</a>
            </div>
            <div className='content'>
                <div className="header">{result.title}</div>
                <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
        </div>
    ))

    return (
        <>
            <div className="wikipedia ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        onChange={e => setTerm(e.target.value)}
                        type="text"
                        value={term} />
                </div>
            </div>
            <div className='wikipedia-results ui celled list'>
                {renderedResults}
            </div>
        </>
    )
}

export default Wikipedia