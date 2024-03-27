import React from "react";

const Navbar = ({props}) => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">{props.tituloNavbar}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" onClick={props.handleClick}>{props.subtituloNavbar1}</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">{props.subtituloNavbar2}</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">{props.subtituloNavbar3}</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        {props.subtituloNavbar4}
                    </span>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;