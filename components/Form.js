import React, { useRef } from 'react'
import Button from './buttons/Button'
import Title from './Title'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Form({
    username,
    handleUsernameChange,
    roomName,
    handleRoomNameChange,
    handleSubmit,
    connecting,
}) {
    // let selectRef = useRef()
    return (
        <motion.div
            animate={{ scale: [0.3, 1] }}
            transition={{ ease: 'easeIn', duration: 0.5 }}
        >
            <form onSubmit={handleSubmit}>
                <h1 className="text-xl text-center font-bold my-5">
                    Bienvenido! 👋🏼
                </h1>
                <div className={'flex flex-col my-5'}>
                    <label htmlFor="name">Ingresa tu nombre de usuario:</label>
                    <input
                        className={
                            'w-80 border border-gray-300 rounded-md px-3 py-2'
                        }
                        type="text"
                        id="field"
                        value={username}
                        onChange={handleUsernameChange}
                        readOnly={connecting}
                        required
                    />
                </div>

                <div className={'flex flex-col my-5'}>
                    <label className={'mr-3'} htmlFor="room">
                        Código de la sala:
                    </label>
                    <input
                        className={
                            'w-80 border border-gray-300 rounded-md px-3 py-2'
                        }
                        type="text"
                        id="room"
                        value={roomName}
                        onChange={handleRoomNameChange}
                        readOnly={connecting}
                        required
                    />
                </div>

                <div className={'grid grid-cols-1 gap-3'}>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Button
                            type={'submit'}
                            disabled={connecting}
                            label={
                                connecting
                                    ? 'Conectando...'
                                    : 'Unirse a la llamada'
                            }
                        />
                    </motion.div>

                    <Link href={'/'}>
                        <a
                            className={
                                'w-80 bg-red-500 px-7 py-2 text-center rounded text-white'
                            }
                        >
                            Volver al inicio
                        </a>
                    </Link>
                </div>
            </form>
        </motion.div>
    )
}

export default Form
