import React from "react";
import portfphoto from '../assets/portfolio.jpeg'

export default function AboutPanel() {
    return (
        <article>
             <div className="columns">
            <section className="column has-text-centered has-text-white">
            <img className="propic is-rounded mt-4" src={portfphoto} alt="Photo of me"></img>
            </section>
            <section className="desc column has-text-white has-text-centered mr-2">
            <h1 className="title has-text-white mt-6 pb-1 about">About Me</h1>
                <p className="mb-5 mr-1 pr-6 pl-6 abttext">
                    Hey! I'm Yanming Cai. Welcome to my portfolio website!
                </p>
                <p className="mb-5 mr-1 pr-6 pl-6 abttext">
                    I am on my way to be a full-stack developer!
                </p>
                <p className="mb-5 pr-6 pl-6 abttext">
                    I learned the skills at Upenn BootCamp. 
                </p>
                <p className="pr-6 pl-6 abttext">
                    Contact me: <a href="mailto:ymingc.12@gmail.com">ymingc.12@gmail.com</a>
                </p>
            </section>
            </div>
        </article>
      );
    }
