import React from "react";
import images from "../../constants/images";

import './First.css';

const First = () =>{
    return(
        <div>
            <h1 className="h__text">Welcome to Backend Dev Course!</h1>
            <hr />
            <p className="p__text">blah blah blah - digital space</p>
            <hr />
            <h1 className="h__text">Syllabus of the entire - Course</h1>
            <p className="p__text">
                <ul className="first__list">
                    <li>Introduction to Backend Programming-
                        <ul className="second__list">
                            <li>How Web works & Core Internet Things</li>
                            <li>Intro to HTML & CSS</li>
                            <li>Intro to Bootstrap & React</li>
                        </ul>
                    </li>
                    <li>Programming in Python</li>
                    <li>Version Control</li>
                    <li>Introduction to Databases for Backend Developement</li>
                    <li>Django Web Framework</li>
                    <li>APIs</li>
                    <li>The Full Stack</li>
                    <li>Back-End Developer Capstone</li>
                    <li>Coding Interview Prep</li>
                </ul>
            </p>
            <hr />
            <h2 className="h__text">Front-End vs Back-End</h2>
            <img src={images.frontBack} alt="front-vs-back" />
            <hr />
            <h2>How does the internet Work?</h2>
        </div>
    )
};

export default First;