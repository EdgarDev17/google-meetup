const disableCamera = (room) => {
    room.localParticipant.videoTracks.forEach((publication) => {
        publication.track.disable()
    })
}
const enableCamera = (room) => {
    room.localParticipant.videoTracks.forEach((publication) => {
        publication.track.enable()
    })
}

export { disableCamera, enableCamera }
