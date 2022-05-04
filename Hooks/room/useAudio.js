
const muteAudio = (room) => {
    room.localParticipant.audioTracks.forEach((publication) => {
        publication.track.disable()
    })
}


const unMuteAudio = (room) => {
    room.localParticipant.audioTracks.forEach((publication) => {
        publication.track.enable()
    })
}


export {muteAudio, unMuteAudio}