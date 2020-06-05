import React from 'react'

export default function Larg({ carachters }) {
    let small = carachters(4)
    return (
        <div className='margin'>
            <h6>{small}</h6>
        </div>
    )
}
