import React from "react";
// @ts-ignore
import {Link} from "react-router-dom";

function Nav() {

    return(
        <nav className={'nav'}>
            <div className={'logo'}><Link to={"/"}/></div>
            <ul className={'nav-list'}>
                <li className={'nav-item'}><Link to={"/"}>Home</Link></li>
                <li className={'nav-item'}><Link to={"/about"}>About</Link></li>
                <li className={'nav-item'}><Link to={"/work"}>Work</Link></li>
                <li className={'nav-item'}><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav