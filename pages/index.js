import Title from '../components/Title'
import Image from 'next/image'
import Footer from '../components/Footer'
import React, { useState } from 'react'
import CameraPreview from './../components/CameraPreview'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Home() {
    const [showPreview, setShowPreview] = useState(false)

    const handleCameraPreview = (isShown) => {
        setShowPreview(isShown)
    }

    let cameraPreview = (
        <div className="w-full h-screen flex bg-black/50 justify-center items-center absolute z-10">
            <CameraPreview handlePreview={handleCameraPreview} />
        </div>
    )

    return (
        <>
            <div
                className={'flex justify-center items-center overflow-y-hidden'}
            >
                {/* aca se muestra una preview de la camara cuando el usuario lo pida */}
                {showPreview ? cameraPreview : ''}

                <div
                    className={
                        'flex container mx-auto justify-around items-center'
                    }
                >
                    {/*contenedor de los titulos, formularios e imagen*/}
                    <div>
                        {/*Titulos del landing page*/}
                        <div>
                            <Title label={'Videollamadas para Todos'} />
                            <h3 className={'font-medium text-lg mt-5'}>
                                En meet up puedes realizar video llamadas
                                grupales
                            </h3>
                            <p className={'text-slate-700 mt-1'}>
                                Puedes utilizarlo para realizar reuniones con
                                amigos, familia o equipos de trabajo.
                            </p>
                        </div>

                        <div className="flex flex-col my-8">
                            <button
                                className="w-80 bg-emerald-500 px-7 py-2 mt-3
                            rounded text-white"
                                onClick={() => handleCameraPreview(true)}
                            >
                                Probrar camara y audio
                            </button>
                            <Link href={'/lobby'}>
                                <a
                                    className="w-80 text-center bg-black px-7 py-2 mt-5
                                rounded text-white"
                                >
                                    Iniciar o unirse a una llamada
                                </a>
                            </Link>
                        </div>
                    </div>

                    <motion.div
                        animate={{ scale: [0.5, 1] }}
                        transition={{ ease: 'easeIn', duration: 0.5 }}
                    >
                        <Image
                            alt={'Landing page image'}
                            src={'/group.svg'}
                            height={700}
                            width={700}
                        />
                    </motion.div>
                </div>
            </div>
            <div className={'my-5'}>
                <Footer />
            </div>
        </>
    )
}

export default Home
