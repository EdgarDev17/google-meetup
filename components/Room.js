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
    <Participant key={participant.sid} participant={participant} />
));

    return (<div>
            <div className="room">
                <h2>Room: {roomName}</h2>
                <button onClick={handleLogout}>Log out</button>
                <div className="local-participant">
                    {room ? (
                        <Participant
                            key={room.localParticipant.sid}
                            participant={room.localParticipant}
                        />) : ("")}
                </div>
                <h3>Remote Participants</h3>
                <div className="remote-participants">{remoteParticipants}</div>
            </div>
        </div>);
}

export default Room;