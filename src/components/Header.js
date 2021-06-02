import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar">
     <header>
        <a href="#" class="logo">Food<span>.</span></a>
        <ul class="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/chef">Chef</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            
        </ul>

    </header>


            
            
        </div>
    )
}

export default Header
