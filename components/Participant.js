import React, {useEffect, useRef } from "react";
import { useMedia } from "../hooks/room/useVideo";

const Participant = ({ participant }) => {
 
   const {videoTracks, audioTracks} = useMedia(participant)

    const videoRef = useRef();
    const audioRef = useRef();

    useEffect(() => {
        const videoTrack = videoTracks[0];
        if (videoTrack) {
            videoTrack.attach(videoRef.current);
            return () => {
                videoTrack.detach();
            };
        }
    }, [videoTracks]);

    useEffect(() => {
        const audioTrack = audioTracks[0];
        if (audioTrack) {
            audioTrack.attach(audioRef.current);
            return () => {
                audioTrack.detach();
            };
        }
    }, [audioTracks]);

    return (
        // este es el contenedor de la camara del participante
        <div className="w-80 mx-1">
            {/*En esta parte es donde puedo editar el frame donde se muestra el video*/}
            <video ref={videoRef} autoPlay={true} className={'rounded-md'}/>
            <audio ref={audioRef} autoPlay={true} />
            <p className={'text-center my-1'}>{participant.identity}</p>
        </div>
    );
};

export default Participant;