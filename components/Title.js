import { useState } from 'react'
/*
@param size only accept small, medium and large as Strings values.
*/

function Title({ label }) {
    return (
        <>
            <h1 className={`text-3xl font-bold my-1 lg:text-5xl `}>{label}</h1>
        </>
    )
}

export default Title
