import React from "react"
import Carfix from '../assets/Carfix.png'
import Funfacts from '../assets/Funfacts.png'
import Card from '../components/card'
import { useState } from "react"
const projs = [
    {
        name: "NBA Fun Facts",
        desc: "A webpage application for finding NBA facts. Tech used: HTML, CSS, JavaScript, and APIs",
        gitLink: "https://github.com/YC937/FunNBAFacts",
        webLink: "https://yc937.github.io/FunNBAFacts/",
        screenShot: Funfacts
    },
    {
        name: "Car Fix Blog",
        desc: "A blog for car lovers. You can post issues of your car. Tech used: HTML, CSS, Handlebars, MySQL, and JavaScript",
        gitLink: "https://github.com/YC937/CarFixBlog",
        webLink: "https://github.com/YC937/CarFixBlog",
        screenShot: Carfix,
    },
]
const count = 3
export default function projectList() {
    const [offset, setOffset] = useState(0);
    const projsToRender = projs.slice(offset, offset + count)

    const handleNextPage = () => {
        setOffset((prev) => (prev + count >= projs.length ? 0 : prev + count));
    };
    const handlePrevPage = () => {
        setOffset((prev) =>
            prev - count < 0
                ? projs.length -
                (projs.length % count === 0 ? count : projs.length % count)
                : prev - count
        );
    };
    return (
        <article>
            <section>
                <h2 className="title has-text-white has-text-centered mt-6">Selected Projects</h2>
                <button onClick={handleNextPage} className="button is-fullwidth abttext mt-3">Forward</button>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '8em 2em',
                    gap: '1em',
                }}>
                    {
                        projsToRender.map((project => <Card name={project.name} desc={project.desc} gitLink={project.gitLink} webLink={project.webLink} screenShot={project.screenShot} />))
                    }
                </div>
                <button onClick={handlePrevPage} className="button is-fullwidth abttext mb-3">Back</button>
            </section>
        </article>
    )
}
