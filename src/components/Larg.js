import React from 'react'

export default function Larg({ carachters }) {
    let larger = carachters(4)
    let larg = carachters(4)
    return (
        <div className='margin'>
            <h1 className='larger'>{larger}</h1>
            <h1 className='larg'>{larg}</h1>
        </div>
    )
}
