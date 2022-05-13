import React, { useState, useEffect, useCallback } from 'react'
import Room from './Room'
import Form from './Form'
import { useForm } from '../hooks/videoChat/useForm'

function VideoChat() {
    const {
        handleRoomName,
        handleUserName,
        handleSumbit,
        username,
        roomName,
        room,
        connecting,
        handleLogOut,
    } = useForm()
    let render

    useEffect(() => {
        if (room) {
            const preparing = (event) => {
                if (event.persisted) {
                    return
                }
                if (room) {
                    handleLogOut()
                }

                window.addEventListener('pagehide', preparing)
                window.addEventListener('beforeunload', preparing)

                return () => {
                    window.removeEventListener('pagehide', preparing)
                    window.removeEventListener('beforeunload', preparing)
                }
            }
        }
    }, [room, handleLogOut])

    if (room) {
        render = (
            <Room room={room} roomName={roomName} handleLogout={handleLogOut} />
        )
    } else {
        render = (
            <div className={'w-full h-screen flex justify-center items-center'}>
                <Form
                    username={username}
                    handleSubmit={handleSumbit}
                    connecting={connecting}
                    roomName={roomName}
                    handleUsernameChange={handleUserName}
                    handleRoomNameChange={handleRoomName}
                />
            </div>
        )
    }

    return render
}

export default VideoChat
