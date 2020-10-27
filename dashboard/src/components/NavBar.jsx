import React from 'react';
import links from './data/links';
import {
    Link
} from 'react-router-dom';

const NavBar = () => {
    
    return (
        <nav className="NavBar">
            <ul>
               {links.map(link =>(
                   <li key= {links.indexOf(link)}><Link to={link.link}>{link.name}</Link></li>
               ))}
            </ul>
        </nav>
    )
}

export default NavBar;