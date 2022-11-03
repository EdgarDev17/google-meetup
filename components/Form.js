import React, { useRef } from 'react'
import Button from './buttons/Button'
import Title from './Title'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

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
        <div
            className={
                'flex justify-center items-center px-32 py-20 rounded-xl'
            }
        >
            <div className="flex sm:bg-white sm:shadow p-16 items-center justify-center gap-10 sm:border  rounded-xl">
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ scale: [0.3, 1], opacity: 1}}
                    transition={{ ease: 'easeIn', duration: 0.5 }}
                    className={'sm:mr-10'}
                >
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-2xl text-center font-bold my-10 ">
                            Bienvenido! 👋🏼
                        </h1>
                        <div className={'flex flex-col'}>
                            <label htmlFor="name">
                                Ingresa tu nombre de usuario:
                            </label>
                            <input
                                className={
                                    'w-80 border border-gray-300 rounded-md px-3 mt-5 py-2'
                                }
                                type="text"
                                id="field"
                                value={username}
                                onChange={handleUsernameChange}
                                readOnly={connecting}
                                required
                            />
                        </div>

                        <div className={'flex flex-col my-7'}>
                            <label className={'mr-3'} htmlFor="room">
                                Código de la sala:
                            </label>
                            <span className={'text-gray-500 w-72 '}>
                                Usa la palabra que quieras para crear una sala.
                            </span>
                            <input
                                className={
                                    'w-80 border border-gray-300 rounded-md px-3 py-2 mt-5'
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

                <div className="hidden sm:block">
                    <Image
                        alt={'login image'}
                        src={'/loginImg.svg'}
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default Form
