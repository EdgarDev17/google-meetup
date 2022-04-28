import React from 'react';

function Lobby({
                   username,
                   handleUsernameChange,
                   roomName,
                   handleRoomNameChange,
                   handleSubmit,
                   connecting,
               }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={'flex flex-col my-5'}>
                    <label className={'mr-3'} htmlFor="name">Ingresa tu nombre de usuario:</label>
                    <input
                        className={'w-80 border border-gray-300 rounded-md px-3 py-2'}
                        type="text"
                        id="field"
                        value={username}
                        onChange={handleUsernameChange}
                        readOnly={connecting}
                        required
                    />
                </div>

                <div className={'flex flex-col my-5'}>
                    <label className={'mr-3'} htmlFor="room">Room name:</label>
                    <input
                        className={'w-80 border border-gray-300 rounded-md px-3 py-2'}
                        type="text"
                        id="room"
                        value={roomName}
                        onChange={handleRoomNameChange}
                        readOnly={connecting}
                        required
                    />
                </div>

                <button className={'w-80 bg-black px-7 py-2 rounded text-white'} type="submit" disabled={connecting}>
                    {connecting ? "Conectando..." : "Unirse a la llamada"}
                </button>
            </form>
        </div>
    );
}

export default Lobby;