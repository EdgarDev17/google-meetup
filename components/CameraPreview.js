import {createLocalVideoTrack, LocalVideoTrack} from 'twilio-video'
import {useRef, useState, useEffect} from 'react'
import {motion} from 'framer-motion'

export default function CameraPreview({handlePreview}) {
    const [localVideoTrack, setLocalVideoTrack] = useState(null) // Este es el video del participante: LocalVideoTrack
    const [videoTrackID, setVideoTrackID] = useState('') // el ID del video

    const videoRef = useRef()

    useEffect(() => {
        createLocalVideoTrack({name: 'preview'})
            .then((videoTrack) => {
                videoTrack.attach(videoRef.current)
                setLocalVideoTrack(videoTrack)
                return videoTrack
            })
            .then((res) => {
                setVideoTrackID(res.id)
            })
    }, [])

    return (
        <motion.div
            initial={{scale:0}}
            animate={{ scale: 1 }}
        >
            <div className="bg-white rounded shadow-lg px-5 py-5">
                <p className="font-bold text-xl text-center my-5">
                    Hey! 👋🏼 ¡Luces asombroso! 😎
                </p>
                <video ref={videoRef}/>
                <div className="flex justify-center items-center">
                    <button
                        onClick={() => {
                            handlePreview(false)
                            window.location.reload()
                        }}
                        className="bg-red-400 px-7 py-2 mt-5 rounded text-white"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
