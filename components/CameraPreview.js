import { createLocalVideoTrack, LocalVideoTrack } from 'twilio-video'
import { useRef } from 'react'

export default function CameraPreview({handlePreview}) {
	const videoRef = useRef()
	
	const localVideoTrack = createLocalVideoTrack({name: 'preview'}).then((videoTrack) => {
		videoTrack.attach(videoRef.current)
		return () => {
			videoTrack.detach()
		}
	})

	return (
		<div className='bg-white rounded shadow-lg px-5 py-5'>
			<p className='font-bold text-xl text-center my-5'>Hey! 👋🏼 ¡Luces asombroso! 😎</p>
			<video ref={videoRef} />
			<div className='flex justify-center items-center'>
				<button onClick={()=>{
					handlePreview(false)
			
				}} className='bg-red-400 px-7 py-2 mt-5 rounded text-white'>
					Cerrar
				</button>
			</div>
		</div>
	)
}
