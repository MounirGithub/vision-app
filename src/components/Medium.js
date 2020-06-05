import React from 'react'

export default function Medium({ carachters }) {
    let medium = carachters(4)
    return (
        <div className='margin'>
            <h3>{medium}</h3>
        </div>
    )
}
