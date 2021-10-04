import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link mr-5" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link mr-5" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link mr-5" >Dental Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reviews" className="nav-link mr-5 text-white" >Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blogs" className="nav-link mr-5 text-white" >Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link mr-5 text-white" >Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;