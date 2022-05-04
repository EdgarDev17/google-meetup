import { createLocalVideoTrack, LocalVideoTrack } from 'twilio-video'
import { useRef, useState, useEffect } from 'react'

export default function CameraPreview({ handlePreview }) {
    const [localVideoTrack, setLocalVideoTrack] = useState(null) // Este es el video del participante : LocalVideoTrack
    const [videoTrackID, setVideoTrackID] = useState('') // el Id del video

    const videoRef = useRef()

    useEffect(() => {
        createLocalVideoTrack({ name: 'preview' })
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
        <div className="bg-white rounded shadow-lg px-5 py-5">
            <p className="font-bold text-xl text-center my-5">
                Hey! 👋🏼 ¡Luces asombroso! 😎
            </p>
            <video ref={videoRef} />
            <div className="flex justify-center items-center">
                <button
                    onClick={() => {
                        handlePreview(false)
                        localVideoTrack.forEach((publication) => {
                            publication.disable()
                        })
                    }}
                    className="bg-red-400 px-7 py-2 mt-5 rounded text-white"
                >
                    Cerrar
                </button>
            </div>
        </div>
    )
}
