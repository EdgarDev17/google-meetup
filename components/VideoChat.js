import React, {useState, useEffect, useCallback} from 'react';
import Room from "./Room";
import Lobby from "./Lobby";
import Video from "twilio-video";

function VideoChat() {
    const [username, setUsername] = useState("")
    const [roomName, setRoomName] = useState("")
    const [room, setRoom] = useState(null)
    const [connecting, setConnecting] = useState(false)


    // con este metodo manejamos cada vez que el usuario edite el input de su nombre
    const handleUserName = useCallback(event => {
        setUsername(event.target.value)
    }, [])

    // con este metodo manejamos cada vez que el usuario edite el input del room
    const handleRoomName = useCallback(event => {
        setRoomName(event.target.value)
    }, [])


    const handleSumbit = useCallback(async (event) => {
        event.preventDefault();
        setConnecting(true);

        const response = await fetch('/api/token', {
            method: "POST",
            body: JSON.stringify({
                identity: username,
                room: roomName,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json())

        // si la peticion funciona de manera correcta
        Video.connect(response.token, {
            name: roomName
        })
            .then(room => {
                setConnecting(false)
                setRoom(room)
            })
            .catch(err => {
                console.log('Something goes wrong! 😕 ' + err)
                setConnecting(true)
            })
    }, [username, roomName])

    const handleLogOut = useCallback(() => {
        setRoom((prevRoom) => {
            if (prevRoom) {
                prevRoom.localParticipant.tracks.forEach((trackPub) => {
                    trackPub.track.stop();
                });
                prevRoom.disconnect();
            }
            return null;
        });
    }, [])

    useEffect(() => {

        if (room) {
            const preparing = event => {
                if (event.persisted) {
                    return
                }
                if (room) {
                    handleLogOut()
                }

                window.addEventListener("pagehide", preparing);
                window.addEventListener("beforeunload", preparing);

                return () => {
                    window.removeEventListener("pagehide", preparing);
                    window.removeEventListener("beforeunload", preparing);
                }
            }
        }
    }, [room, handleLogOut])

    let render;
    if (room) {
        render = (<Room room={room} roomName={roomName} handleLogout={handleLogOut}/>)
    } else {
        render = (<Lobby username={username} handleSubmit={handleSumbit} connecting={connecting} roomName={roomName}
                         handleUsernameChange={handleUserName} handleRoomNameChange={handleRoomName}/>)
    }

    return render
}

export default VideoChat;