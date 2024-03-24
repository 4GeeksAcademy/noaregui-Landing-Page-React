import React from "react";

const Jumbotron = () => {
    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Bienvenida a la Feria del Comic</h1>
                <p className="col-md-8 fs-4">Como ya sabrás se han abierto nuevas fechas en Barcelona, Madrid, Vitoria-Gasteiz y Lugo. ¡Corre y no pierdas tu entrada!</p>
                <button className="btn btn-primary btn-lg" type="button">Más info</button>
            </div>
            </div>      
        </>
    );
};

export default Jumbotron;