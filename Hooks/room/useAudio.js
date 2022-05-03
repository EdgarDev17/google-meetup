
const muteAudio = (room) => {
    setMutedSound(true)
    room.localParticipant.audioTracks.forEach((publication) => {
        publication.track.disable()
    })
}


const unMuteAudio = (room) => {
    setMutedSound(false)
    room.localParticipant.audioTracks.forEach((publication) => {
        publication.track.enable()
    })
}


export {muteAudio, unMuteAudio}