import Title from '../components/Title'
import VideoChat from "../components/VideoChat";
import Image from "next/image";

function Home() {
    return (
        <div className={'w-screen h-screen flex justify-center items-center'}>
            <div className={'flex justify-around items-center'}>
                <div className={''}>
                    <Title label={'Videollamadas para Todos'}/>
                    <h3 className={'font-medium text-lg mt-5'}>En meet up puedes realizar video llamadas grupales </h3>
                    <p className={'text-slate-700 mt-1'}>Puedes utilizarlo para realizar reuniones con amigos, familia o
                        equipos de trabajo</p>
                    <div className={'mt-12'}>
                    <VideoChat/>
                    </div>
                </div>
                <div>
                    <Image alt={'Landing page image'} src={'/group.svg'} height={500} width={700}/>
                </div>
            </div>
        </div>
    )
}

export default Home;