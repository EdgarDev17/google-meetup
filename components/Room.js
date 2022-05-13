import React, { useEffect, useState } from 'react'
import Participant from './Participant'
import { muteAudio, unMuteAudio } from '../hooks/room/useAudio'
import { disableCamera, enableCamera } from '../hooks/room/useVideo'
import Image from 'next/image'
import { useRoom } from './../hooks/room/useRoom'

function Room({ roomName, room, handleLogout }) {
    // const [participants, setParticipants] = useState([]) 👈🏼 esto me lo refactorize en un hook
    const [mutedSound, setMutedSound] = useState(true)
    const [mutedCamera, setMutedCamera] = useState(false)
    const { participants } = useRoom(room)
    let micBtn
    let camBtn

    const remoteParticipants = participants.map((participant) => (
        <Participant key={participant.sid} participant={participant} />
    ))

    const handleMicButton = () => {
        if (mutedSound) {
            //mostrar boton para activar el mic
            micBtn = (
                <Image
                    onClick={() => {
                        setMutedSound(false)
                        unMuteAudio(room)
                    }}
                    alt="mic"
                    src={'/mic-off.png'}
                    width={40}
                    height={40}
                    className={'cursor-pointer mx-3'}
                />
            )
        } else {
            // mostrar el boton para desactivar el mic
            micBtn = (
                <Image
                    onClick={() => {
                        setMutedSound(true)
                        muteAudio(room)
                    }}
                    alt="mic"
                    src={'/mic-on.svg'}
                    width={40}
                    height={40}
                    className={'cursor-pointer mx-3'}
                />
            )
        }
    }

    const handleVideoButton = () => {
        if (mutedCamera) {
            //mostrar el boton para activar la camara
            camBtn = (
                <Image
                    onClick={() => {
                        setMutedCamera(false)
                        enableCamera(room)
                    }}
                    alt="mic"
                    src={'/camera-off.png'}
                    width={40}
                    height={40}
                    className={'cursor-pointer mx-3'}
                />
            )
        } else {
            camBtn = (
                <Image
                    onClick={() => {
                        setMutedCamera(true)
                        disableCamera(room)
                    }}
                    alt="mic"
                    src={'/camera-on.png'}
                    width={40}
                    height={40}
                    className={'cursor-pointer mx-3'}
                />
            )
        }
    }

    return (
        <>
            <div className={'w-full h-full'}>
                <h1 className="font-medium text-center my-3">
                    {'Código de la sala: ' + roomName}
                </h1>
                {/*Este es el contenedor del participante local*/}
                <div className="flex w-full">
                    <div>
                        {room ? (
                            <Participant
                                key={room.localParticipant.sid}
                                participant={room.localParticipant}
                            />
                        ) : (
                            ''
                        )}
                    </div>

                    {/*Contenedor de cada uno de los participantes remotos*/}
                    <div>
                        <div className=" mx-5 grid grid-cols-3 gap-1 ">
                            {remoteParticipants}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center items-center">
                {handleMicButton()}
                {handleVideoButton()}
                {micBtn}
                <div className={'mx-5'}>
                    <Image
                        onClick={handleLogout}
                        alt="hang up button"
                        src={'/hang-up.png'}
                        width={50}
                        height={50}
                        className={'cursor-pointer'}
                    />
                </div>
                {camBtn}
            </div>
        </>
    )
}

export default Room
