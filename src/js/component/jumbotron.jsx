import React from "react";

const Jumbotron = ({props}) => {
    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{props.titulo}</h1>
                <p className="col-md-12 fs-4">{props.parrafo}</p>
                <button className="btn btn-primary btn-lg" type="button" onClick={props.handleClick}>{props.boton}</button>
            </div>
            </div>      
        </>
    );
};

export default Jumbotron;