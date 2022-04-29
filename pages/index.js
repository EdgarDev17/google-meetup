import Title from '../components/Title'
import VideoChat from "../components/VideoChat";
import Image from "next/image";
import Footer from "../components/Footer";
import React, {useState, useRef, useEffect} from "react";
import {createLocalVideoTrack} from "twilio-video";
import CameraPreview from './../components/CameraPreview';

function Home() {
    const [showPreview, setShowPreview] = useState(false)
    const handlePreview = (isShown) =>{
        setShowPreview(isShown)
    }

    let cameraPreview = ( <div className='w-full h-screen flex bg-black/50 justify-center items-center absolute z-10'><CameraPreview handlePreview={handlePreview}/></div> )

    return (
        <div>
            <div className={'flex justify-center items-center'}>
                  {/* aca se muestra una preview de la camara cuando el usuario lo pida */}
                  {showPreview ? cameraPreview : ""}
                <div className={'flex container mx-auto justify-around items-center'}>
                    {/*contenedor de los titulos, formularios e imagen*/}
                    <div>
                        {/*Titulos del landing page*/}
                        <div>
                            <Title label={'Videollamadas para Todos'}/>
                            <h3 className={'font-medium text-lg mt-5'}>En meet up puedes realizar video llamadas
                                grupales </h3>
                            <p className={'text-slate-700 mt-1'}>
                                Puedes utilizarlo para realizar reuniones con amigos, familia o equipos de trabajo
                            </p>
                        </div>
                        {/*Aca aparece el room o el formulario*/}
                         <VideoChat/>

                         <button className='w-80 bg-emerald-500 px-7 py-2 mt-3
                          rounded text-white' onClick={() => handlePreview(true)}>Probrar camara y audio</button>
                    </div>
                    <Image alt={'Landing page image'} src={'/group.svg'} height={700} width={700}/>
                </div>
            </div>
            <div className={'my-5'}>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;