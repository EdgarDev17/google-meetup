import React, {useEffect, useState} from 'react';
import Participant from "./Participant";


function Room({roomName, room, handleLogout}) {
    const [participants, setParticipants] = useState([])

    useEffect(() => {
        function participantConnected(participant) {
            setParticipants((prevParticipants) => [...prevParticipants, participant])
        }

        // Lo que hace esta funcion es retornar un nuevo array, removiendo a la persona que ha salido de la sesion
        function participantDisconnected(participant) {
            setParticipants((prevParticipants) => prevParticipants.filter((person) => person !== participant));
        }

        room.on("participantConnected", participantConnected) // se ejecuta cada vez que un participante se conecta
        room.on("participantDisconnected", participantDisconnected) // se ejecuta cada vez que un participante se desconecta
        room.participants.forEach(participantConnected)

        return () => {
            room.off("participantConnected", participantConnected);
            room.off("participantDisconnected", participantDisconnected);
        };
    }, [room]);

    const remoteParticipants = participants.map((participant) => (
        <Participant key={participant.sid} participant={participant}/>
    ));

    return (
        // contenedor de el room completo
            <div className={'w-screen bg-red-300'}>
                {/*Este es el contenedor del participante local*/}
                <div className="w-fit h-fit border border border-blue-500 rounded">
                    {room ? (
                        <Participant
                            key={room.localParticipant.sid}
                            participant={room.localParticipant}
                        />) : ("")}
                </div>

                {/*Contenedor de cada uno de los participantes remotos*/}
                <div>
                    <h3>Remote Participants</h3>
                    <div className="grid grid-cols-3">{remoteParticipants}</div>
                </div>

                {/*Acá deben ir cada uno de los controles de la llamada como salir, silenciar, etc. */}
                {/*TODO: hacer el componente que contenga los controles*/}
                <div>
                    <button className={'w-56 rounded-md bg-black px-7 py-1 text-white'} onClick={handleLogout}>Salir
                    </button>
                </div>
            </div>
    );
}

export default Room;