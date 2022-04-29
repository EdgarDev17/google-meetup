export default function Footer({marginX, marginY}) {
    return (
        <footer className={`flex justify-center`}>
            <p className={'mx-5 '}>Hecho con ☕ por EdgarDev desde latam </p>
            <a className={'mx-1 text-blue-700'} href={'https://github.com/EdgarDev17'}>Github</a>
            <a className={'mx-1 text-blue-700'} href={'https://twitter.com/edgarDev17'}>Twitter</a>
        </footer>
    )
}