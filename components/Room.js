import React, { useEffect, useState } from 'react'
import Participant from './Participant'
function Room({ roomName, room, handleLogout }) {
    const [participants, setParticipants] = useState([])
    const [mutedSound, setMutedSound] = useState(true)

    useEffect(() => {
        // cada vez que se agrega un nuevo participante se debe actualizar el array anterior
        function participantConnected(participant) {
            setParticipants((prevParticipants) => [
                ...prevParticipants,
                participant,
            ])
        }

        // Lo que hace esta funcion es retornar un nuevo array, removiendo a la persona que ha salido de la sesion
        function participantDisconnected(participant) {
            setParticipants((prevParticipants) =>
                prevParticipants.filter((person) => person !== participant)
            )
        }

        room.on('participantConnected', participantConnected) // se ejecuta cada vez que un participante se conecta
        room.on('participantDisconnected', participantDisconnected) // se ejecuta cada vez que un participante se desconecta
        room.participants.forEach(participantConnected)

        return () => {
            room.off('participantConnected', participantConnected)
            room.off('participantDisconnected', participantDisconnected)
        }
    }, [room])

    const remoteParticipants = participants.map((participant) => (
        <Participant key={participant.sid} participant={participant} />
    ))

    const muteAudio = () => {
        room.localParticipant.audioTracks.forEach((publication) => {
            publication.track.disable()
        })
    }

    const unMuteAudio = () => {
        room.localParticipant.audioTracks.forEach((publication) => {
            publication.track.enable()
        })
    }

    const disableCamera = () => {
        room.localParticipant.videoTracks.forEach((publication) => {
            publication.track.disable()
        })
    }
    const enableCamera = () => {
        room.localParticipant.videoTracks.forEach((publication) => {
            publication.track.enable()
        })
    }

    return (
        <>
            <div className={'w-full h-full'}>
                <h1 className="font-bold text-center my-3">{roomName}</h1>
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
                        <div className=" grid grid-cols-3 gap-1 ">
                            {remoteParticipants}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <button
                    className={'w-56 rounded-md  bg-black px-7 py-1 text-white'}
                    onClick={handleLogout}
                >
                    Salir
                </button>
                <button
                    className={
                        mutedSound
                            ? 'w-56 rounded-md  bg-black px-7 py-1 text-white'
                            : 'w-56 rounded-md  bg-red-500 px-7 py-1 text-white'
                    }
                    onClick={unMuteAudio}
                >
                    Activar audio
                </button>
                <button
                    className={
                        mutedSound
                            ? 'w-56 rounded-md  bg-black px-7 py-1 text-white'
                            : 'w-56 rounded-md  bg-red-500 px-7 py-1 text-white'
                    }
                    onClick={muteAudio}
                >
                    Silenciar
                </button>

                <button
                    className={
                        mutedSound
                            ? 'w-56 rounded-md  bg-black px-7 py-1 text-white'
                            : 'w-56 rounded-md  bg-red-500 px-7 py-1 text-white'
                    }
                    onClick={disableCamera}
                >
                    Quitar camara
                </button>

                <button
                    className={
                        mutedSound
                            ? 'w-56 rounded-md  bg-black px-7 py-1 text-white'
                            : 'w-56 rounded-md  bg-red-500 px-7 py-1 text-white'
                    }
                    onClick={enableCamera}
                >
                    Activar camara
                </button>
            </div>
        </>
    )
}

export default Room
