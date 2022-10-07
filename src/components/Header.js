import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="row header">
                <div className="navbar">
                    <div className="navbar-heading col-12 col-md-3">
                        <h1 activeclassname="active">
                            <span>Tasty-Tips</span>
                        </h1>
                    </div>
                    <div className="navbar-links col-12 col-md-6">
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