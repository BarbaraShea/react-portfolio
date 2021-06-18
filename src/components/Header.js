import React, { useState } from 'react';

export default class Header extends Component {
    render () {
        return (
            <Header id="homepage">
                <nav id="nav-wrap">
                    <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About Me</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

        )
    }
}