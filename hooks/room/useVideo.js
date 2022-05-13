import { useState, useEffect } from "react"

const trackpubsToTracks = (trackMap) => {
    return Array.from(trackMap.values())
        .map((publication) => publication.track)
        .filter((track) => track !== null)
}

const useMedia = (participant) => {
    const [videoTracks, setVideoTracks] = useState([])
    const [audioTracks, setAudioTracks] = useState([])

    useEffect(() => {
        setVideoTracks(trackpubsToTracks(participant.videoTracks))
        setAudioTracks(trackpubsToTracks(participant.audioTracks))

        const trackSubscribed = (track) => {
            if (track.kind === 'video') {
                setVideoTracks((videoTracks) => [...videoTracks, track])
            } else if (track.kind === 'audio') {
                setAudioTracks((audioTracks) => [...audioTracks, track])
            }
        }

        const trackUnsubscribed = (track) => {
            if (track.kind === 'video') {
                setVideoTracks((videoTracks) =>
                    videoTracks.filter((v) => v !== track)
                )
            } else if (track.kind === 'audio') {
                setAudioTracks((audioTracks) =>
                    audioTracks.filter((a) => a !== track)
                )
            }
        }

        participant.on('trackSubscribed', trackSubscribed)
        participant.on('trackUnsubscribed', trackUnsubscribed)

        return () => {
            setVideoTracks([])
            setAudioTracks([])
            participant.removeAllListeners()
        }
    }, [participant])

    return {
        videoTracks,
        audioTracks,
    }
}

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


export { disableCamera, enableCamera, useMedia }
