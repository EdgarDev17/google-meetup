/*
 * @param STRING. variantColor  only accept,  green, black, red, yellow values
*/

import { useState } from 'react';

const color = {
    default:'w-80 bg-black px-7 py-2 mt-3 rounded text-white',
    black: 'w-80 bg-black px-7 py-2 mt-3 rounded text-white',
    green: 'w-80 bg-emerald-500 px-7 py-2 mt-3 rounded text-white',
}


export default function Button({ label, type, disabled, variant }) {

    return (
        <button className={color.black} type={String(type)} disabled={disabled}>
            {label}
        </button>
    )
}
