import { useCallback, useState } from 'react'
import Video from 'twilio-video'

const useForm = () => {
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState(null)
    const [roomName, setRoomName] = useState('')
    const [connecting, setConnecting] = useState(false)

    const handleUserName = useCallback((event) => {
        setUsername(event.target.value)
    }, [])

    // con este metodo manejo cada vez que el usuario edite el input del room
    const handleRoomName = useCallback((event) => {
        setRoomName(event.target.value)
    }, [])

    const handleSumbit = useCallback(
        async (event) => {
            event.preventDefault()
            setConnecting(true)

            const response = await fetch('/api/video/token', {
                method: 'POST',
                body: JSON.stringify({
                    identity: username,
                    room: roomName,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json())

            // si la peticion funciona de manera correcta
            Video.connect(response.token, {
                name: roomName,
            })
                .then((room) => {
                    setConnecting(false)
                    setRoom(room)
                })
                .catch((err) => {
                    console.log(
                        'Something goes wrong with the room endpoint, check it out! 😕 ' +
                            err
                    )
                    setConnecting(true)
                })
        },
        [username, roomName]
    )

    const handleLogOut = useCallback(() => {
        setRoom((prevRoom) => {
            if (prevRoom) {
                prevRoom.localParticipant.tracks.forEach((trackPub) => {
                    trackPub.track.stop()
                })
                prevRoom.disconnect()
            }
            return null
        })
    }, [])

    return {
        username,
        room,
        roomName,
        handleSumbit,
        handleUserName,
        handleRoomName,
        connecting,
        handleLogOut
    }
}

export { useForm }
