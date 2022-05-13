import { useState, useEffect } from "react"

export const useRoom = (room) =>{
    const [participants, setParticipants] = useState([])

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

    return {participants}
}