import React from 'react'
import Button from './buttons/Button'
import Title from './Title';

function Form({
    username,
    handleUsernameChange,
    roomName,
    handleRoomNameChange,
    handleSubmit,
    connecting,
}) {
    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit}>
                <div className={'flex flex-col my-5'}>
                    <h1 className='text-xl font-bold my-5'>Bienvenido! 👋🏼</h1> 
                    <label className={'mr-3'} htmlFor="name">
                        Ingresa tu nombre de usuario:
                    </label>
                    <input
                        className={
                            'w-80 border border-gray-300 rounded-md px-3 py-2'
                        }
                        type="text"
                        id="field"
                        value={username}
                        onChange={handleUsernameChange}
                        readOnly={connecting}
                        required
                    />
                </div>

                <div className={'flex flex-col my-5'}>
                    <label className={'mr-3'} htmlFor="room">
                        Código de la sala:
                    </label>
                    <input
                        className={
                            'w-80 border border-gray-300 rounded-md px-3 py-2'
                        }
                        type="text"
                        id="room"
                        value={roomName}
                        onChange={handleRoomNameChange}
                        readOnly={connecting}
                        required
                    />
                </div>

                <Button
                    type={'submit'}
                    disabled={connecting}
                    label={connecting ? 'Conectando...' : 'Unirse a la llamada'}
                />
                
            </form>
        </div>
    )
}

export default Form
