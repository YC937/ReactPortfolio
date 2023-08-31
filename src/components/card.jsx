import React from "react";

export default function Card(props) {
    return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-2by1">
                <img src={props.screenShot} alt=""/>
            </figure>
        </div>
        <div className="card-content">
        <div className="media">
            <div className="media-left">
                <div className="media-content">
                    <p className="title is-2">{props.name}</p>
                </div>
            </div>
        </div>
        </div>
        <div className="card-content">
        <div className="content abttext">{props.desc}
        </div>
        <br />
        </div>
        <footer className="card-footer">
            <a className='card-footer-item is-link abttext' href={props.gitLink} target="_blank">Github</a>
            <a className="card-footer-item is-link abttext" href={props.webLink} target="_blank">Livesite</a>
        </footer>
    </div>
    )
}
