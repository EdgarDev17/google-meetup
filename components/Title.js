import { useState } from 'react'
/*
@param size only accept small, medium and large as Strings values.
*/

function Title({ label }) {
    return (
        <>
            <h1 className={`font-bold my-1 text-5xl `}>{label}</h1>
        </>
    )
}

export default Title
