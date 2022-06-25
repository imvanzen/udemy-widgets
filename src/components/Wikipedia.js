import React, { useState } from "react"

const Wikipedia = () => {
    const [term, setTerm] = useState("");

    return (
        <div className="wikipedia ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input
                    onChange={e => setTerm(e.target.value)}
                    type="text"
                    value={term} />
            </div>
        </div>
    )
}

export default Wikipedia