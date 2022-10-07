import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="row">
                <div className="navbar">
                    <div className="navbar-heading">
                        <h1 activeclassname="active">
                            <span>Tasty-Tips</span>
                        </h1>
                    </div>
                    <div className="navbar-links">
                        <ul>
                            <Link to="/"> {" "}
                                <li id="home">Home</li>
                            </Link>
                            <Link to="/about"> {" "}
                                <li>About Us</li>
                            </Link>
                            <Link to="/contact"> {" "}
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;