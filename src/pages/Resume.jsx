import resume from '../assets/resume.pdf'

export default function Resume() {
    return (
        <section className="columns is-centered">
        <div className="contact column is-half">
            <h1 className="title mt-2 has-text-centered has-text-white">Resume</h1>
            <a href={resume} target="_blank"><button className="button is-fullwidth mb-4">Download</button></a>
            <div className="content skills has-text-white">
        </div>
        </div>
        </section>
    )
}
