import React from 'react';
import logo from "../../assets/images/png-clipart-ganesha-hinduism-shiva-ganesh-chaturthi-om-ganesha-logo-flower.png"
import floorPlans from "../../assets/images/icons/civil-engineering.png"
import exterior from "../../assets/images/icons/office-building.png"
import interior from "../../assets/images/icons/interior-design.png"
import professionals from "../../assets/images/icons/engineers.png"
import blogs from "../../assets/images/icons/copywriting.png"

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <a className="navbar-brand" href="#">
                    <img
                        src={logo}
                        height={30}
                        className="navbar-brand logo"
                        alt="Brand Logo"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src={floorPlans} height={25} width={25} alt="" />
                                <span className="nav-text">Floor Plans</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src={exterior} height={25} width={25} alt="" />
                                <span className="nav-text ">3D Exterior Design</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src={interior} height={25} width={25} alt="" />
                                <span className="nav-text">Interior Design</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src={blogs} height={25} width={25} alt="" />
                                <span className="nav-text ">Blogs</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src={professionals} height={25} width={25} alt="" />
                                <span className="nav-text">Professionals</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar