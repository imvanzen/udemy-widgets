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