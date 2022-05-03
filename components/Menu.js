import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


import React from 'react'

export default function Menu() {
    return (
        <div>
            <FontAwesomeIcon icon={regular('coffee')} />
        </div>
    )
}
