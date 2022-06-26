import React, { useEffect, useState } from "react"
import wikipedia from '../api/wikipedia'

const Wikipedia = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        if (!term) return
        async function getResults() {
            const response = await wikipedia.get('', {
                params: { srsearch: term }
            })
            setResults(response.data.query.search)
        }
        getResults()
    }, [term])

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
            <div className='wikipedia-results'>
                {results.length}
            </div>
        </>
    )
}

export default Wikipedia